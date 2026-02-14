import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { addMonths, subMonths, addYears } from "date-fns";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting seed...");

  // Clean up existing data
  await prisma.auditLog.deleteMany();
  await prisma.optionExercise.deleteMany();
  await prisma.vestingPeriod.deleteMany();
  await prisma.vestingSchedule.deleteMany();
  await prisma.postTerminationExercisePeriod.deleteMany();
  await prisma.optionGrant.deleteMany();
  await prisma.shareCertificate.deleteMany();
  await prisma.convertible.deleteMany();
  await prisma.equityPlan.deleteMany();
  await prisma.shareClass.deleteMany();
  await prisma.stakeholderSession.deleteMany();
  await prisma.stakeholder.deleteMany();
  await prisma.company.deleteMany();
  await prisma.adminUser.deleteMany();

  // Create company
  const company = await prisma.company.create({
    data: {
      name: "Acme Inc",
      legalName: "Acme Incorporated",
      incorporationDate: new Date("2023-01-15"),
      incorporationState: "DE",
      authorizedShares: 10000000,
      parValue: 0.0001,
    },
  });
  console.log("✅ Created company:", company.name);

  // Create share classes
  const commonClass = await prisma.shareClass.create({
    data: {
      companyId: company.id,
      name: "Common Stock",
      type: "COMMON",
      authorizedShares: 8000000,
      pricePerShare: 0.0001,
      conversionRatio: 1,
      seniority: 1,
    },
  });

  const seriesSeedClass = await prisma.shareClass.create({
    data: {
      companyId: company.id,
      name: "Series Seed Preferred",
      type: "PREFERRED",
      authorizedShares: 2000000,
      pricePerShare: 0.50,
      conversionRatio: 1,
      liquidationPreference: 0.50,
      liquidationMultiple: 1,
      participatingPreferred: false,
      seniority: 2,
    },
  });
  console.log("✅ Created share classes");

  // Create stakeholders
  const founders = await Promise.all([
    prisma.stakeholder.create({
      data: {
        companyId: company.id,
        name: "Alice Chen",
        email: "alice@acme.com",
        type: "FOUNDER",
        title: "CEO",
      },
    }),
    prisma.stakeholder.create({
      data: {
        companyId: company.id,
        name: "Bob Martinez",
        email: "bob@acme.com",
        type: "FOUNDER",
        title: "CTO",
      },
    }),
    prisma.stakeholder.create({
      data: {
        companyId: company.id,
        name: "Carol Williams",
        email: "carol@acme.com",
        type: "FOUNDER",
        title: "COO",
      },
    }),
  ]);

  const investors = await Promise.all([
    prisma.stakeholder.create({
      data: {
        companyId: company.id,
        name: "Venture Capital Partners",
        email: "deals@vcp.com",
        type: "INVESTOR",
      },
    }),
    prisma.stakeholder.create({
      data: {
        companyId: company.id,
        name: "Angel Investor LLC",
        email: "invest@angel.com",
        type: "INVESTOR",
      },
    }),
  ]);

  const employees = await Promise.all([
    prisma.stakeholder.create({
      data: {
        companyId: company.id,
        name: "David Park",
        email: "david@acme.com",
        type: "EMPLOYEE",
        title: "Senior Engineer",
      },
    }),
    prisma.stakeholder.create({
      data: {
        companyId: company.id,
        name: "Emily Johnson",
        email: "emily@acme.com",
        type: "EMPLOYEE",
        title: "Product Manager",
      },
    }),
    prisma.stakeholder.create({
      data: {
        companyId: company.id,
        name: "Frank Lee",
        email: "frank@acme.com",
        type: "EMPLOYEE",
        title: "Designer",
      },
    }),
    prisma.stakeholder.create({
      data: {
        companyId: company.id,
        name: "Grace Kim",
        email: "grace@acme.com",
        type: "EMPLOYEE",
        title: "Engineer",
      },
    }),
  ]);

  const advisor = await prisma.stakeholder.create({
    data: {
      companyId: company.id,
      name: "Henry Thompson",
      email: "henry@advisor.com",
      type: "ADVISOR",
      title: "Strategic Advisor",
    },
  });
  console.log("✅ Created stakeholders");

  // Create founder share certificates
  const founderCerts = await Promise.all([
    prisma.shareCertificate.create({
      data: {
        companyId: company.id,
        securityId: "CS-01",
        stakeholderId: founders[0].id,
        shareClassId: commonClass.id,
        quantity: 2500000,
        pricePerShare: 0.0001,
        cashPaid: 250,
        costBasis: 250,
        acquisitionDate: new Date("2023-01-15"),
        issueDate: new Date("2023-01-15"),
        status: "OUTSTANDING",
      },
    }),
    prisma.shareCertificate.create({
      data: {
        companyId: company.id,
        securityId: "CS-02",
        stakeholderId: founders[1].id,
        shareClassId: commonClass.id,
        quantity: 2000000,
        pricePerShare: 0.0001,
        cashPaid: 200,
        costBasis: 200,
        acquisitionDate: new Date("2023-01-15"),
        issueDate: new Date("2023-01-15"),
        status: "OUTSTANDING",
      },
    }),
    prisma.shareCertificate.create({
      data: {
        companyId: company.id,
        securityId: "CS-03",
        stakeholderId: founders[2].id,
        shareClassId: commonClass.id,
        quantity: 1500000,
        pricePerShare: 0.0001,
        cashPaid: 150,
        costBasis: 150,
        acquisitionDate: new Date("2023-01-15"),
        issueDate: new Date("2023-01-15"),
        status: "OUTSTANDING",
      },
    }),
  ]);

  // Create investor preferred certificates
  const investorCerts = await Promise.all([
    prisma.shareCertificate.create({
      data: {
        companyId: company.id,
        securityId: "CS-04",
        stakeholderId: investors[0].id,
        shareClassId: seriesSeedClass.id,
        quantity: 1000000,
        pricePerShare: 0.50,
        cashPaid: 500000,
        costBasis: 500000,
        acquisitionDate: new Date("2023-09-01"),
        issueDate: new Date("2023-09-01"),
        status: "OUTSTANDING",
      },
    }),
    prisma.shareCertificate.create({
      data: {
        companyId: company.id,
        securityId: "CS-05",
        stakeholderId: investors[1].id,
        shareClassId: seriesSeedClass.id,
        quantity: 400000,
        pricePerShare: 0.50,
        cashPaid: 200000,
        costBasis: 200000,
        acquisitionDate: new Date("2023-09-01"),
        issueDate: new Date("2023-09-01"),
        status: "OUTSTANDING",
      },
    }),
  ]);
  console.log("✅ Created share certificates");

  // Create equity plan
  const equityPlan = await prisma.equityPlan.create({
    data: {
      companyId: company.id,
      name: "2023 Stock Option Plan",
      totalPoolSize: 1500000,
      availableShares: 800000, // After grants below
      boardApprovalDate: new Date("2023-01-20"),
      expirationDate: addYears(new Date("2023-01-20"), 10),
    },
  });
  console.log("✅ Created equity plan");

  // Helper to create vesting periods
  const createVestingPeriods = async (
    scheduleId: string,
    originalQty: number,
    startDate: Date,
    cliffMonths: number,
    totalPeriods: number,
    terminationDate?: Date
  ) => {
    const cliffDate = addMonths(startDate, cliffMonths);
    const cliffShares = Math.floor(originalQty * 0.25);
    const remainingShares = originalQty - cliffShares;
    const remainingPeriods = totalPeriods - cliffMonths;
    const sharesPerPeriod = Math.floor(remainingShares / remainingPeriods);

    const periods = [];

    // Cliff period
    periods.push({
      vestingScheduleId: scheduleId,
      periodNumber: 0,
      vestingDate: cliffDate,
      sharesVested: cliffShares,
      cumulativeVested: cliffShares,
    });

    // Monthly periods
    let cumulative = cliffShares;
    for (let i = 1; i <= remainingPeriods; i++) {
      const periodDate = addMonths(cliffDate, i);
      if (terminationDate && periodDate > terminationDate) break;

      const isLast = i === remainingPeriods;
      const vested = isLast
        ? remainingShares - sharesPerPeriod * (remainingPeriods - 1)
        : sharesPerPeriod;
      cumulative += vested;

      periods.push({
        vestingScheduleId: scheduleId,
        periodNumber: i,
        vestingDate: periodDate,
        sharesVested: vested,
        cumulativeVested: cumulative,
      });
    }

    await prisma.vestingPeriod.createMany({ data: periods });
  };

  // Create option grants at different stages
  const now = new Date();

  // Grant 1: Pre-cliff (started 6 months ago)
  const grant1 = await prisma.optionGrant.create({
    data: {
      companyId: company.id,
      securityId: "ES-01",
      stakeholderId: employees[0].id,
      equityPlanId: equityPlan.id,
      originalQuantity: 200000,
      exercisePrice: 0.10,
      type: "ISO",
      grantDate: subMonths(now, 6),
      boardApprovalDate: subMonths(now, 6),
      expirationDate: addYears(subMonths(now, 6), 10),
      grantReason: "New hire grant",
      status: "ACTIVE",
    },
  });
  const schedule1 = await prisma.vestingSchedule.create({
    data: {
      optionGrantId: grant1.id,
      scheduleName: "Standard 4-year",
      vestingStartDate: subMonths(now, 6),
      cliffMonths: 12,
      cliffPercentage: 0.25,
      totalPeriods: 48,
      periodUnit: "MONTHLY",
    },
  });
  await createVestingPeriods(
    schedule1.id,
    200000,
    subMonths(now, 6),
    12,
    48
  );

  // Grant 2: Mid-vest (started 2 years ago, 50% vested)
  const grant2 = await prisma.optionGrant.create({
    data: {
      companyId: company.id,
      securityId: "ES-02",
      stakeholderId: employees[1].id,
      equityPlanId: equityPlan.id,
      originalQuantity: 150000,
      exercisePrice: 0.05,
      type: "ISO",
      grantDate: subMonths(now, 24),
      boardApprovalDate: subMonths(now, 24),
      expirationDate: addYears(subMonths(now, 24), 10),
      grantReason: "New hire grant",
      status: "ACTIVE",
    },
  });
  const schedule2 = await prisma.vestingSchedule.create({
    data: {
      optionGrantId: grant2.id,
      scheduleName: "Standard 4-year",
      vestingStartDate: subMonths(now, 24),
      cliffMonths: 12,
      cliffPercentage: 0.25,
      totalPeriods: 48,
      periodUnit: "MONTHLY",
    },
  });
  await createVestingPeriods(
    schedule2.id,
    150000,
    subMonths(now, 24),
    12,
    48
  );

  // Grant 3: Fully vested (started 5 years ago)
  const grant3 = await prisma.optionGrant.create({
    data: {
      companyId: company.id,
      securityId: "ES-03",
      stakeholderId: employees[2].id,
      equityPlanId: equityPlan.id,
      originalQuantity: 100000,
      exercisePrice: 0.01,
      type: "NSO",
      grantDate: subMonths(now, 60),
      boardApprovalDate: subMonths(now, 60),
      expirationDate: addYears(subMonths(now, 60), 10),
      grantReason: "Early employee grant",
      status: "ACTIVE",
    },
  });
  const schedule3 = await prisma.vestingSchedule.create({
    data: {
      optionGrantId: grant3.id,
      scheduleName: "Standard 4-year",
      vestingStartDate: subMonths(now, 60),
      cliffMonths: 12,
      cliffPercentage: 0.25,
      totalPeriods: 48,
      periodUnit: "MONTHLY",
    },
  });
  await createVestingPeriods(
    schedule3.id,
    100000,
    subMonths(now, 60),
    12,
    48
  );

  // Grant 4: Partially exercised (started 3 years ago, some exercised)
  const grant4StartDate = subMonths(now, 36);
  const grant4 = await prisma.optionGrant.create({
    data: {
      companyId: company.id,
      securityId: "ES-04",
      stakeholderId: employees[3].id,
      equityPlanId: equityPlan.id,
      originalQuantity: 100000,
      exercisePrice: 0.03,
      type: "ISO",
      grantDate: grant4StartDate,
      boardApprovalDate: grant4StartDate,
      expirationDate: addYears(grant4StartDate, 10),
      grantReason: "New hire grant",
      status: "PARTIALLY_EXERCISED",
    },
  });
  const schedule4 = await prisma.vestingSchedule.create({
    data: {
      optionGrantId: grant4.id,
      scheduleName: "Standard 4-year",
      vestingStartDate: grant4StartDate,
      cliffMonths: 12,
      cliffPercentage: 0.25,
      totalPeriods: 48,
      periodUnit: "MONTHLY",
    },
  });
  await createVestingPeriods(schedule4.id, 100000, grant4StartDate, 12, 48);

  // Create certificate from exercise
  const exerciseCert = await prisma.shareCertificate.create({
    data: {
      companyId: company.id,
      securityId: "CS-06",
      stakeholderId: employees[3].id,
      shareClassId: commonClass.id,
      quantity: 25000,
      pricePerShare: 0.03,
      cashPaid: 750,
      costBasis: 750,
      acquisitionDate: subMonths(now, 6),
      issueDate: subMonths(now, 6),
      status: "OUTSTANDING",
    },
  });

  // Create exercise record
  await prisma.optionExercise.create({
    data: {
      optionGrantId: grant4.id,
      shareCertificateId: exerciseCert.id,
      sharesExercised: 25000,
      exercisePrice: 0.03,
      totalCost: 750,
      exerciseDate: subMonths(now, 6),
      fmvAtExercise: 0.15,
      paymentMethod: "CASH",
      approver: "Alice Chen",
      approvedAt: subMonths(now, 6),
      status: "COMPLETED",
    },
  });

  // Advisor grant
  const advisorGrant = await prisma.optionGrant.create({
    data: {
      companyId: company.id,
      securityId: "ES-05",
      stakeholderId: advisor.id,
      equityPlanId: equityPlan.id,
      originalQuantity: 50000,
      exercisePrice: 0.10,
      type: "NSO",
      grantDate: subMonths(now, 12),
      boardApprovalDate: subMonths(now, 12),
      expirationDate: addYears(subMonths(now, 12), 10),
      grantReason: "Advisor agreement",
      status: "ACTIVE",
    },
  });
  const advisorSchedule = await prisma.vestingSchedule.create({
    data: {
      optionGrantId: advisorGrant.id,
      scheduleName: "2-year monthly",
      vestingStartDate: subMonths(now, 12),
      cliffMonths: 0,
      cliffPercentage: 0,
      totalPeriods: 24,
      periodUnit: "MONTHLY",
    },
  });
  // Create monthly vesting periods for advisor (no cliff)
  const advisorPeriods = [];
  const advisorStartDate = subMonths(now, 12);
  const sharesPerMonth = Math.floor(50000 / 24);
  for (let i = 1; i <= 24; i++) {
    const isLast = i === 24;
    const vested = isLast ? 50000 - sharesPerMonth * 23 : sharesPerMonth;
    advisorPeriods.push({
      vestingScheduleId: advisorSchedule.id,
      periodNumber: i,
      vestingDate: addMonths(advisorStartDate, i),
      sharesVested: vested,
      cumulativeVested: i === 24 ? 50000 : sharesPerMonth * i,
    });
  }
  await prisma.vestingPeriod.createMany({ data: advisorPeriods });

  // Create post-termination exercise periods for all grants
  const grants = [grant1, grant2, grant3, grant4, advisorGrant];
  for (const grant of grants) {
    await prisma.postTerminationExercisePeriod.createMany({
      data: [
        { optionGrantId: grant.id, terminationType: "VOLUNTARY", duration: 90, durationUnit: "DAYS" },
        { optionGrantId: grant.id, terminationType: "INVOLUNTARY", duration: 90, durationUnit: "DAYS" },
        { optionGrantId: grant.id, terminationType: "FOR_CAUSE", duration: 0, durationUnit: "DAYS" },
        { optionGrantId: grant.id, terminationType: "DEATH", duration: 12, durationUnit: "MONTHS" },
        { optionGrantId: grant.id, terminationType: "DISABILITY", duration: 12, durationUnit: "MONTHS" },
        { optionGrantId: grant.id, terminationType: "RETIREMENT", duration: 3, durationUnit: "MONTHS" },
      ],
    });
  }
  console.log("✅ Created option grants with vesting schedules");

  // Create SAFE
  const safe = await prisma.convertible.create({
    data: {
      companyId: company.id,
      securityId: "SAFE-01",
      stakeholderId: investors[1].id,
      type: "SAFE",
      principal: 100000,
      valuationCap: 5000000,
      valuationCapType: "POST_MONEY",
      discount: 0.20,
      conversionPriceBasis: ["VALUATION_CAP", "DISCOUNT"],
      issueDate: new Date("2023-06-01"),
      boardApprovalDate: new Date("2023-06-01"),
      status: "OUTSTANDING",
    },
  });

  // Create Convertible Note
  const convertibleNote = await prisma.convertible.create({
    data: {
      companyId: company.id,
      securityId: "CN-01",
      stakeholderId: investors[0].id,
      type: "CONVERTIBLE_NOTE",
      principal: 250000,
      interestRate: 0.06,
      interestStartDate: new Date("2023-03-15"),
      valuationCap: 4000000,
      valuationCapType: "PRE_MONEY",
      discount: 0.15,
      conversionPriceBasis: ["VALUATION_CAP", "DISCOUNT", "QUALIFIED_FINANCING"],
      liquidityPriority: 1,
      cashoutMultiplier: 2,
      issueDate: new Date("2023-03-15"),
      boardApprovalDate: new Date("2023-03-15"),
      status: "OUTSTANDING",
    },
  });
  console.log("✅ Created convertibles (SAFE and CN)");

  // Create admin user
  await prisma.adminUser.create({
    data: {
      email: "admin@acme.com",
      name: "Admin User",
      passwordHash: "$2b$10$placeholder", // Would be a real hash in production
      role: "SUPER_ADMIN",
    },
  });
  console.log("✅ Created admin user");

  console.log("\n🎉 Seed completed successfully!");
  console.log("\nSummary:");
  console.log(`  - 1 Company: ${company.name}`);
  console.log(`  - 2 Share Classes: Common, Series Seed Preferred`);
  console.log(`  - ${founders.length + investors.length + employees.length + 1} Stakeholders`);
  console.log(`  - ${founderCerts.length + investorCerts.length + 1} Share Certificates`);
  console.log(`  - 1 Equity Plan with ${equityPlan.totalPoolSize.toLocaleString()} shares`);
  console.log(`  - ${grants.length} Option Grants at various vesting stages`);
  console.log(`  - 1 Exercised option creating CS-06`);
  console.log(`  - 1 SAFE and 1 Convertible Note`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
