"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createCertificate, updateCertificate, type CertificateFormState } from "./actions";
import type { Stakeholder, ShareClass, ShareCertificate } from "../../../../prisma/generated/prisma";
import { User, FileText, Building2 } from "lucide-react";

interface CertificateFormProps {
  stakeholders: Stakeholder[];
  shareClasses: ShareClass[];
  certificate?: ShareCertificate | null;
}

export function CertificateForm({
  stakeholders,
  shareClasses,
  certificate,
}: CertificateFormProps) {
  const isEditing = !!certificate;
  
  const initialState: CertificateFormState = { errors: {} };
  
  const boundAction = isEditing
    ? updateCertificate.bind(null, certificate.id)
    : createCertificate;
  
  const [state, formAction, isPending] = useActionState(boundAction, initialState);

  const formatDateForInput = (date: Date | string | null | undefined) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  return (
    <form action={formAction} className="space-y-6">
      {state.errors?._form && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {state.errors._form.join(", ")}
        </div>
      )}

      {/* Shareholder Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Shareholder
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="stakeholderId">Stakeholder *</Label>
            <Select
              id="stakeholderId"
              name="stakeholderId"
              defaultValue={certificate?.stakeholderId || ""}
              required
            >
              <option value="">Select a stakeholder...</option>
              {stakeholders.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name} ({s.email})
                </option>
              ))}
            </Select>
            {state.errors?.stakeholderId && (
              <p className="text-sm text-red-500 mt-1">
                {state.errors.stakeholderId.join(", ")}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="status">Status</Label>
            <Select
              id="status"
              name="status"
              defaultValue={certificate?.status || "OUTSTANDING"}
            >
              <option value="OUTSTANDING">Outstanding</option>
              <option value="CANCELLED">Cancelled</option>
              <option value="TRANSFERRED">Transferred</option>
              <option value="REPURCHASED">Repurchased</option>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Certificate Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Certificate Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="shareClassId">Share Class *</Label>
            <Select
              id="shareClassId"
              name="shareClassId"
              defaultValue={certificate?.shareClassId || ""}
              required
            >
              <option value="">Select a share class...</option>
              {shareClasses.map((sc) => (
                <option key={sc.id} value={sc.id}>
                  {sc.name} ({sc.type})
                </option>
              ))}
            </Select>
            {state.errors?.shareClassId && (
              <p className="text-sm text-red-500 mt-1">
                {state.errors.shareClassId.join(", ")}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="quantity">Quantity *</Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                step="1"
                defaultValue={certificate?.quantity || ""}
                placeholder="1,000,000"
                required
              />
              {state.errors?.quantity && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.quantity.join(", ")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="pricePerShare">Price per Share *</Label>
              <Input
                id="pricePerShare"
                name="pricePerShare"
                type="number"
                min="0"
                step="0.0001"
                defaultValue={certificate?.pricePerShare?.toString() || ""}
                placeholder="0.0001"
                required
              />
              {state.errors?.pricePerShare && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.pricePerShare.join(", ")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="cashPaid">Cash Paid *</Label>
              <Input
                id="cashPaid"
                name="cashPaid"
                type="number"
                min="0"
                step="0.01"
                defaultValue={certificate?.cashPaid?.toString() || ""}
                placeholder="100.00"
                required
              />
              {state.errors?.cashPaid && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.cashPaid.join(", ")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="costBasis">Cost Basis</Label>
              <Input
                id="costBasis"
                name="costBasis"
                type="number"
                min="0"
                step="0.01"
                defaultValue={certificate?.costBasis?.toString() || ""}
                placeholder="Defaults to cash paid"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Leave blank to use cash paid
              </p>
            </div>

            <div>
              <Label htmlFor="acquisitionDate">Acquisition Date *</Label>
              <Input
                id="acquisitionDate"
                name="acquisitionDate"
                type="date"
                defaultValue={formatDateForInput(certificate?.acquisitionDate)}
                required
              />
              {state.errors?.acquisitionDate && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.acquisitionDate.join(", ")}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Issuer Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Issuer Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="issueDate">Issue Date</Label>
              <Input
                id="issueDate"
                name="issueDate"
                type="date"
                defaultValue={formatDateForInput(certificate?.issueDate)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Defaults to today
              </p>
            </div>

            <div>
              <Label htmlFor="originalIssueDate">Original Issue Date</Label>
              <Input
                id="originalIssueDate"
                name="originalIssueDate"
                type="date"
                defaultValue={formatDateForInput(certificate?.originalIssueDate)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                If different from issue date
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => history.back()}>
          Cancel
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending
            ? isEditing
              ? "Saving..."
              : "Creating..."
            : isEditing
            ? "Save Changes"
            : "Issue Certificate"}
        </Button>
      </div>
    </form>
  );
}
