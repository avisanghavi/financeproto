import { prisma } from "@/lib/prisma";
import { serialize } from "@/lib/utils";
import { CompanyForm, type Company } from "./company-form";
import { ShareClassList, type SerializedShareClass } from "./share-class-list";
import { EquityPlanList, type SerializedEquityPlan } from "./equity-plan-list";
import { Building2, Layers, Target } from "lucide-react";

async function getSettingsData() {
  const company = await prisma.company.findFirst({
    include: {
      shareClasses: {
        orderBy: { createdAt: "asc" },
      },
      equityPlans: {
        orderBy: { createdAt: "asc" },
      },
    },
  });

  return company;
}

export default async function SettingsPage() {
  const company = await getSettingsData();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Company Settings</h1>
        <p className="text-muted-foreground">
          Manage your company information, share classes, and equity plans
        </p>
      </div>

      {/* Company Information */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-xl font-semibold">Company Information</h2>
        </div>
        <CompanyForm company={company ? serialize(company) as unknown as Company : null} />
      </section>

      {company && (
        <>
          {/* Share Classes */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Share Classes</h2>
            </div>
            <ShareClassList 
              shareClasses={serialize(company.shareClasses) as unknown as SerializedShareClass[]} 
              companyId={company.id}
            />
          </section>

          {/* Equity Plans */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Equity Plans</h2>
            </div>
            <EquityPlanList 
              equityPlans={serialize(company.equityPlans) as unknown as SerializedEquityPlan[]} 
              companyId={company.id}
            />
          </section>
        </>
      )}
    </div>
  );
}
