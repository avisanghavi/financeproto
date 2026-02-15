import { NextResponse } from "next/server";
import { logout } from "@/lib/admin-auth";
import { cookies } from "next/headers";

const SESSION_COOKIE_NAME = "admin_session";

export async function POST() {
  try {
    await logout();

    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "An error occurred during logout" },
      { status: 500 }
    );
  }
}
