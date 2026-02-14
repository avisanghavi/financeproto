"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createConvertible, updateConvertible, type ConvertibleFormState } from "./actions";
import type { Stakeholder, ShareClass, Convertible } from "@prisma/client";
import { User, Building2, DollarSign, FileText } from "lucide-react";

interface ConvertibleFormProps {
  stakeholders: Stakeholder[];
  shareClasses: ShareClass[];
  convertible?: Convertible | null;
}

export function ConvertibleForm({
  stakeholders,
  shareClasses,
  convertible,
}: ConvertibleFormProps) {
  const isEditing = !!convertible;
  const [type, setType] = useState<"SAFE" | "CONVERTIBLE_NOTE">(
    convertible?.type || "SAFE"
  );

  const initialState: ConvertibleFormState = { errors: {} };

  const boundAction = isEditing
    ? updateConvertible.bind(null, convertible.id)
    : createConvertible;

  const [state, formAction, isPending] = useActionState(boundAction, initialState);

  const formatDateForInput = (date: Date | string | null | undefined) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  const today = formatDateForInput(new Date());

  return (
    <form action={formAction} className="space-y-6">
      {state.errors?._form && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {state.errors._form.join(", ")}
        </div>
      )}

      {/* Type Toggle */}
      <Card>
        <CardHeader>
          <CardTitle>Instrument Type</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="SAFE"
                checked={type === "SAFE"}
                onChange={() => setType("SAFE")}
                className="w-4 h-4"
              />
              <span className="font-medium">SAFE</span>
              <span className="text-sm text-muted-foreground">
                (Simple Agreement for Future Equity)
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="type"
                value="CONVERTIBLE_NOTE"
                checked={type === "CONVERTIBLE_NOTE"}
                onChange={() => setType("CONVERTIBLE_NOTE")}
                className="w-4 h-4"
              />
              <span className="font-medium">Convertible Note</span>
              <span className="text-sm text-muted-foreground">
                (with interest accrual)
              </span>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Holder Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Convertible Holder
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="stakeholderId">Stakeholder *</Label>
            <Select
              id="stakeholderId"
              name="stakeholderId"
              defaultValue={convertible?.stakeholderId || ""}
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
              defaultValue={convertible?.status || "OUTSTANDING"}
            >
              <option value="OUTSTANDING">Outstanding</option>
              <option value="CONVERTED">Converted</option>
              <option value="CANCELLED">Cancelled</option>
              <option value="REPAID">Repaid</option>
            </Select>
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
              <Label htmlFor="issueDate">Issue Date *</Label>
              <Input
                id="issueDate"
                name="issueDate"
                type="date"
                defaultValue={formatDateForInput(convertible?.issueDate) || today}
                required
              />
              {state.errors?.issueDate && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.issueDate.join(", ")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="boardApprovalDate">Board Approval Date</Label>
              <Input
                id="boardApprovalDate"
                name="boardApprovalDate"
                type="date"
                defaultValue={formatDateForInput(convertible?.boardApprovalDate)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Value Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Value
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="principal">Principal Amount *</Label>
            <Input
              id="principal"
              name="principal"
              type="number"
              min="0"
              step="0.01"
              defaultValue={convertible?.principal?.toString() || ""}
              placeholder="100,000"
              required
            />
            {state.errors?.principal && (
              <p className="text-sm text-red-500 mt-1">
                {state.errors.principal.join(", ")}
              </p>
            )}
          </div>

          {type === "CONVERTIBLE_NOTE" && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="interestRate">Interest Rate (%) *</Label>
                <Input
                  id="interestRate"
                  name="interestRate"
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  defaultValue={
                    convertible?.interestRate
                      ? (Number(convertible.interestRate) * 100).toString()
                      : "6"
                  }
                  placeholder="6"
                />
                {state.errors?.interestRate && (
                  <p className="text-sm text-red-500 mt-1">
                    {state.errors.interestRate.join(", ")}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="interestStartDate">Interest Start Date *</Label>
                <Input
                  id="interestStartDate"
                  name="interestStartDate"
                  type="date"
                  defaultValue={
                    formatDateForInput(convertible?.interestStartDate) || today
                  }
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Terms Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Terms
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="valuationCap">Valuation Cap</Label>
              <Input
                id="valuationCap"
                name="valuationCap"
                type="number"
                min="0"
                step="1"
                defaultValue={convertible?.valuationCap?.toString() || ""}
                placeholder="10,000,000"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Leave blank for uncapped
              </p>
            </div>

            <div>
              <Label htmlFor="valuationCapType">Cap Type</Label>
              <Select
                id="valuationCapType"
                name="valuationCapType"
                defaultValue={convertible?.valuationCapType || ""}
              >
                <option value="">Select...</option>
                <option value="PRE_MONEY">Pre-Money</option>
                <option value="POST_MONEY">Post-Money</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="discount">Discount (%)</Label>
              <Input
                id="discount"
                name="discount"
                type="number"
                min="0"
                max="100"
                step="1"
                defaultValue={
                  convertible?.discount
                    ? (Number(convertible.discount) * 100).toString()
                    : ""
                }
                placeholder="20"
              />
            </div>

            <div>
              <Label htmlFor="convertsToClassId">Converts To Share Class</Label>
              <Select
                id="convertsToClassId"
                name="convertsToClassId"
                defaultValue={convertible?.convertsToClassId || ""}
              >
                <option value="">Select...</option>
                {shareClasses.map((sc) => (
                  <option key={sc.id} value={sc.id}>
                    {sc.name}
                  </option>
                ))}
              </Select>
            </div>

            <div>
              <Label htmlFor="liquidityPriority">Liquidity Priority</Label>
              <Input
                id="liquidityPriority"
                name="liquidityPriority"
                type="number"
                min="1"
                step="1"
                defaultValue={convertible?.liquidityPriority?.toString() || ""}
                placeholder="1"
              />
            </div>

            <div>
              <Label htmlFor="cashoutMultiplier">Cashout Multiplier</Label>
              <Input
                id="cashoutMultiplier"
                name="cashoutMultiplier"
                type="number"
                min="0"
                step="0.1"
                defaultValue={convertible?.cashoutMultiplier?.toString() || ""}
                placeholder="2"
              />
            </div>
          </div>

          <div>
            <Label>Conversion Price Basis</Label>
            <div className="flex flex-wrap gap-4 mt-2">
              {["VALUATION_CAP", "DISCOUNT", "QUALIFIED_FINANCING", "CHANGE_OF_CONTROL"].map(
                (basis) => (
                  <label key={basis} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="conversionPriceBasis"
                      value={basis}
                      defaultChecked={convertible?.conversionPriceBasis?.includes(basis)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm capitalize">
                      {basis.toLowerCase().replace("_", " ")}
                    </span>
                  </label>
                )
              )}
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
            : type === "SAFE"
            ? "Issue SAFE"
            : "Issue Convertible Note"}
        </Button>
      </div>
    </form>
  );
}
