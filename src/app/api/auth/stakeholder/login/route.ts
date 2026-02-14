import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Find stakeholder by email
    const stakeholder = await prisma.stakeholder.findFirst({
      where: { email: email.toLowerCase() },
    });

    if (!stakeholder) {
      return NextResponse.json(
        { error: "No stakeholder found with this email" },
        { status: 404 }
      );
    }

    // For demo purposes, create a session directly
    // In production, you would send a magic link email
    const sessionToken = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    // Delete existing sessions for this stakeholder
    await prisma.stakeholderSession.deleteMany({
      where: { stakeholderId: stakeholder.id },
    });

    // Create new session
    await prisma.stakeholderSession.create({
      data: {
        stakeholderId: stakeholder.id,
        token: sessionToken,
        expiresAt,
      },
    });

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set("stakeholder_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: expiresAt,
      path: "/",
    });

    // Return redirect for demo mode
    return NextResponse.json({ redirect: "/portfolio" });
  } catch (error) {
    console.error("Stakeholder login error:", error);
    return NextResponse.json(
      { error: "An error occurred during login" },
      { status: 500 }
    );
  }
}
