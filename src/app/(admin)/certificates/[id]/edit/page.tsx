import { prisma } from "@/lib/prisma";
import { serialize } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { CertificateForm } from "../../certificate-form";

export const dynamic = "force-dynamic";

async function getFormData(id: string) {
  const certificate = await prisma.shareCertificate.findUnique({
    where: { id },
    include: { company: true },
  });

  if (!certificate) return null;

  const [stakeholders, shareClasses] = await Promise.all([
    prisma.stakeholder.findMany({
      where: { companyId: certificate.companyId },
      orderBy: { name: "asc" },
    }),
    prisma.shareClass.findMany({
      where: { companyId: certificate.companyId },
      orderBy: { name: "asc" },
    }),
  ]);

  return { certificate, stakeholders, shareClasses };
}

export default async function EditCertificatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getFormData(id);

  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href={`/certificates/${id}`}>
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Edit {data.certificate.securityId}
          </h1>
          <p className="text-muted-foreground">
            Update share certificate details
          </p>
        </div>
      </div>

      <CertificateForm
        stakeholders={serialize(data.stakeholders)}
        shareClasses={serialize(data.shareClasses)}
        certificate={serialize(data.certificate)}
      />
    </div>
  );
}
