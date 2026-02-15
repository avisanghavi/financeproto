import { NextResponse } from "next/server";
import { createAdminUser } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

// This route creates the initial admin user
// It can only be called once - if an admin already exists, it returns an error
export async function GET() {
  try {
    // Check if any admin user exists
    const existingAdmin = await prisma.adminUser.findFirst();
    
    if (existingAdmin) {
      return NextResponse.json(
        { error: "Admin user already exists. Setup has already been completed." },
        { status: 400 }
      );
    }

    // Create the admin user for hemang@dx.partners
    const user = await createAdminUser(
      "hemang@dx.partners",
      "BoardFinance2024!",  // Default password - change after first login
      "Hemang"
    );

    return NextResponse.json({
      success: true,
      message: "Admin user created successfully",
      email: user.email,
      note: "Default password is: BoardFinance2024! - Please change it after logging in.",
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json(
      { error: "Failed to create admin user" },
      { status: 500 }
    );
  }
}
