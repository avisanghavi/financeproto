import { NextRequest, NextResponse } from "next/server";
import { login } from "@/lib/admin-auth";
import { cookies } from "next/headers";

const SESSION_COOKIE_NAME = "admin_session";
const SESSION_EXPIRY_DAYS = 7;

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const result = await login(email, password);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 401 }
      );
    }

    // Set the session cookie
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, result.token!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: SESSION_EXPIRY_DAYS * 24 * 60 * 60,
      path: "/",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "An error occurred during login" },
      { status: 500 }
    );
  }
}
