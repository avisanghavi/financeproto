import { prisma } from "./prisma";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";

const SESSION_COOKIE_NAME = "admin_session";
const SESSION_EXPIRY_DAYS = 7;

// Simple password hashing (for production, use bcrypt)
function hashPassword(password: string): string {
  return crypto.createHash("sha256").update(password).digest("hex");
}

export function verifyPassword(password: string, hash: string): boolean {
  return hashPassword(password) === hash;
}

export async function createSession(userId: string): Promise<string> {
  const token = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + SESSION_EXPIRY_DAYS);

  await prisma.adminSession.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  });

  return token;
}

export async function getAdminUser() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (!sessionToken) {
    return null;
  }

  const session = await prisma.adminSession.findUnique({
    where: { token: sessionToken },
    include: { user: true },
  });

  if (!session || session.expiresAt < new Date()) {
    // Session expired or not found
    if (session) {
      await prisma.adminSession.delete({ where: { id: session.id } });
    }
    return null;
  }

  return session.user;
}

export async function requireAdmin() {
  const user = await getAdminUser();
  if (!user) {
    redirect("/auth/login");
  }
  return user;
}

export async function login(email: string, password: string): Promise<{ success: boolean; error?: string; token?: string }> {
  const user = await prisma.adminUser.findUnique({
    where: { email: email.toLowerCase() },
  });

  if (!user) {
    return { success: false, error: "Invalid email or password" };
  }

  if (!verifyPassword(password, user.passwordHash)) {
    return { success: false, error: "Invalid email or password" };
  }

  const token = await createSession(user.id);
  return { success: true, token };
}

export async function logout() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  if (sessionToken) {
    await prisma.adminSession.deleteMany({
      where: { token: sessionToken },
    });
  }
}

// Helper to create the initial admin user
export async function createAdminUser(email: string, password: string, name?: string) {
  const passwordHash = hashPassword(password);
  
  return prisma.adminUser.upsert({
    where: { email: email.toLowerCase() },
    update: { passwordHash, name },
    create: {
      email: email.toLowerCase(),
      passwordHash,
      name,
      role: "ADMIN",
    },
  });
}
