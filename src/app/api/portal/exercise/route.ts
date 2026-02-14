import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getStakeholderFromSession } from "@/lib/stakeholder-auth";
import { generateSecurityId } from "@/lib/security-id";
import { getVestingProgress } from "@/lib/vesting";

export async function POST(req: NextRequest) {
  try {
    const stakeholder = await getStakeholderFromSession();
    if (!stakeholder) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { grantId, sharesToExercise, paymentMethod } = await req.json();

    if (!grantId || !sharesToExercise || !paymentMethod) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify the grant belongs to this stakeholder
    const grant = await prisma.optionGrant.findFirst({
      where: {
        id: grantId,
        stakeholderId: stakeholder.id,
        status: { in: ["ACTIVE", "PARTIALLY_EXERCISED"] },
      },
    });

    if (!grant) {
      return NextResponse.json(
        { error: "Grant not found or not authorized" },
        { status: 404 }
      );
    }

    // Verify exercisable shares
    const progress = await getVestingProgress(grant.id);
    if (sharesToExercise > progress.exercisableShares) {
      return NextResponse.json(
        {
          error: `Cannot exercise more than ${progress.exercisableShares} shares`,
        },
        { status: 400 }
      );
    }

    // Get common share class for the certificate
    const commonClass = await prisma.shareClass.findFirst({
      where: { companyId: grant.companyId, type: "COMMON" },
    });

    if (!commonClass) {
      return NextResponse.json(
        { error: "No common share class found" },
        { status: 500 }
      );
    }

    // Generate certificate security ID
    const certSecurityId = await generateSecurityId("CS", grant.companyId);
    const totalCost = sharesToExercise * Number(grant.exercisePrice);
    const now = new Date();

    // Create certificate and exercise in transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create the share certificate
      const certificate = await tx.shareCertificate.create({
        data: {
          companyId: grant.companyId,
          securityId: certSecurityId,
          stakeholderId: stakeholder.id,
          shareClassId: commonClass.id,
          quantity: sharesToExercise,
          pricePerShare: grant.exercisePrice,
          cashPaid: totalCost,
          costBasis: totalCost,
          acquisitionDate: now,
          issueDate: now,
          status: "OUTSTANDING",
        },
      });

      // Create the exercise record (pending approval)
      const exercise = await tx.optionExercise.create({
        data: {
          optionGrantId: grantId,
          shareCertificateId: certificate.id,
          sharesExercised: sharesToExercise,
          exercisePrice: grant.exercisePrice,
          totalCost,
          exerciseDate: now,
          fmvAtExercise: grant.exercisePrice, // Will be updated by admin
          paymentMethod: paymentMethod as any,
          status: "PENDING", // Pending admin approval
        },
      });

      return { certificate, exercise };
    });

    // Create audit log
    await prisma.auditLog.create({
      data: {
        companyId: grant.companyId,
        userId: stakeholder.id,
        userEmail: stakeholder.email,
        action: "EXERCISE_REQUEST",
        entityType: "OptionExercise",
        entityId: result.exercise.id,
        after: {
          grantId,
          sharesToExercise,
          paymentMethod,
          status: "PENDING",
        },
      },
    });

    return NextResponse.json({
      success: true,
      exerciseId: result.exercise.id,
      certificateId: result.certificate.id,
    });
  } catch (error) {
    console.error("Exercise request error:", error);
    return NextResponse.json(
      { error: "Failed to process exercise request" },
      { status: 500 }
    );
  }
}
