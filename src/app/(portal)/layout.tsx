import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PortalSidebar } from "@/components/portal-sidebar";

async function getStakeholderFromSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("stakeholder_session")?.value;

  if (!sessionToken) {
    return null;
  }

  const session = await prisma.stakeholderSession.findUnique({
    where: { token: sessionToken },
    include: { stakeholder: true },
  });

  if (!session || session.expiresAt < new Date()) {
    return null;
  }

  return session.stakeholder;
}

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const stakeholder = await getStakeholderFromSession();

  if (!stakeholder) {
    redirect("/auth/stakeholder/login");
  }

  return (
    <div className="flex h-screen">
      <PortalSidebar
        stakeholderName={stakeholder.name}
        stakeholderEmail={stakeholder.email}
      />
      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
