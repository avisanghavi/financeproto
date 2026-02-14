"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { createCompany, updateCompany, type CompanyFormState } from "./actions";
import { toast } from "sonner";

export interface Company {
  id: string;
  name: string;
  legalName: string | null;
  incorporationDate: string;
  incorporationState: string;
  authorizedShares: number;
  parValue: number;
}

interface CompanyFormProps {
  company: Company | null;
}

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC"
];

const initialState: CompanyFormState = {};

export function CompanyForm({ company }: CompanyFormProps) {
  const action = company ? updateCompany : createCompany;
  const [state, formAction, isPending] = useActionState(action, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success(company ? "Company updated successfully" : "Company created successfully");
    }
    if (state.errors?._form) {
      toast.error(state.errors._form[0]);
    }
  }, [state, company]);

  const formatDateForInput = (dateStr: string | undefined) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toISOString().split("T")[0];
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <form action={formAction} className="space-y-6">
          {company && <input type="hidden" name="id" value={company.id} />}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Company Name *</Label>
              <Input
                id="name"
                name="name"
                defaultValue={company?.name ?? ""}
                placeholder="Acme Inc"
                required
              />
              {state.errors?.name && (
                <p className="text-sm text-red-500">{state.errors.name[0]}</p>
              )}
            </div>

            {/* Legal Name */}
            <div className="space-y-2">
              <Label htmlFor="legalName">Legal Name</Label>
              <Input
                id="legalName"
                name="legalName"
                defaultValue={company?.legalName ?? ""}
                placeholder="Acme Incorporated"
              />
              {state.errors?.legalName && (
                <p className="text-sm text-red-500">{state.errors.legalName[0]}</p>
              )}
            </div>

            {/* Incorporation Date */}
            <div className="space-y-2">
              <Label htmlFor="incorporationDate">Incorporation Date *</Label>
              <Input
                id="incorporationDate"
                name="incorporationDate"
                type="date"
                defaultValue={formatDateForInput(company?.incorporationDate)}
                required
              />
              {state.errors?.incorporationDate && (
                <p className="text-sm text-red-500">{state.errors.incorporationDate[0]}</p>
              )}
            </div>

            {/* Incorporation State */}
            <div className="space-y-2">
              <Label htmlFor="incorporationState">Incorporation State *</Label>
              <select
                id="incorporationState"
                name="incorporationState"
                defaultValue={company?.incorporationState ?? "DE"}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                required
              >
                {US_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              {state.errors?.incorporationState && (
                <p className="text-sm text-red-500">{state.errors.incorporationState[0]}</p>
              )}
            </div>

            {/* Authorized Shares */}
            <div className="space-y-2">
              <Label htmlFor="authorizedShares">Authorized Shares *</Label>
              <Input
                id="authorizedShares"
                name="authorizedShares"
                type="number"
                defaultValue={company?.authorizedShares ?? 10000000}
                min={1}
                required
              />
              {state.errors?.authorizedShares && (
                <p className="text-sm text-red-500">{state.errors.authorizedShares[0]}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Total number of shares the company is authorized to issue
              </p>
            </div>

            {/* Par Value */}
            <div className="space-y-2">
              <Label htmlFor="parValue">Par Value *</Label>
              <Input
                id="parValue"
                name="parValue"
                type="number"
                step="0.000001"
                defaultValue={company?.parValue ?? 0.0001}
                min={0.000001}
                required
              />
              {state.errors?.parValue && (
                <p className="text-sm text-red-500">{state.errors.parValue[0]}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Nominal value per share (typically $0.0001 or $0.00001)
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : company ? "Update Company" : "Create Company"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
