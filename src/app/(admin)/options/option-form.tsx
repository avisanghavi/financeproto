"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createOptionGrant, type OptionGrantFormState } from "./actions";
import type { Stakeholder, EquityPlan } from "@prisma/client";
import { User, Receipt, Building2, Calendar } from "lucide-react";

interface OptionFormProps {
  stakeholders: Stakeholder[];
  equityPlans: EquityPlan[];
}

export function OptionForm({ stakeholders, equityPlans }: OptionFormProps) {
  const initialState: OptionGrantFormState = { errors: {} };
  const [state, formAction, isPending] = useActionState(createOptionGrant, initialState);

  const formatDateForInput = (date: Date | string | null | undefined) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  const today = formatDateForInput(new Date());
  const tenYearsFromNow = formatDateForInput(
    new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000)
  );

  return (
    <form action={formAction} className="space-y-6">
      {state.errors?._form && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {state.errors._form.join(", ")}
        </div>
      )}

      {/* Optionholder Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Option Grant Holder
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="stakeholderId">Stakeholder *</Label>
            <Select id="stakeholderId" name="stakeholderId" required>
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
            <Label htmlFor="grantReason">Grant Reason</Label>
            <Textarea
              id="grantReason"
              name="grantReason"
              placeholder="e.g., New hire grant, Promotion, Refresh grant..."
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="status">Status</Label>
            <Select id="status" name="status" defaultValue="ACTIVE">
              <option value="ACTIVE">Active</option>
              <option value="PARTIALLY_EXERCISED">Partially Exercised</option>
              <option value="FULLY_EXERCISED">Fully Exercised</option>
              <option value="EXPIRED">Expired</option>
              <option value="CANCELLED">Cancelled</option>
              <option value="TERMINATED">Terminated</option>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Quantities Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Grant Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="originalQuantity">Number of Options *</Label>
              <Input
                id="originalQuantity"
                name="originalQuantity"
                type="number"
                min="1"
                step="1"
                placeholder="50,000"
                required
              />
              {state.errors?.originalQuantity && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.originalQuantity.join(", ")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="exercisePrice">Exercise Price *</Label>
              <Input
                id="exercisePrice"
                name="exercisePrice"
                type="number"
                min="0"
                step="0.0001"
                placeholder="0.10"
                required
              />
              {state.errors?.exercisePrice && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.exercisePrice.join(", ")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="type">Option Type *</Label>
              <Select id="type" name="type" defaultValue="ISO" required>
                <option value="ISO">ISO (Incentive Stock Option)</option>
                <option value="NSO">NSO (Non-Qualified Stock Option)</option>
              </Select>
              {state.errors?.type && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.type.join(", ")}
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
          <div>
            <Label htmlFor="equityPlanId">Equity Plan *</Label>
            <Select id="equityPlanId" name="equityPlanId" required>
              <option value="">Select an equity plan...</option>
              {equityPlans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name} ({plan.availableShares.toLocaleString()} available)
                </option>
              ))}
            </Select>
            {state.errors?.equityPlanId && (
              <p className="text-sm text-red-500 mt-1">
                {state.errors.equityPlanId.join(", ")}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="grantDate">Grant Date *</Label>
              <Input
                id="grantDate"
                name="grantDate"
                type="date"
                defaultValue={today}
                required
              />
              {state.errors?.grantDate && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.grantDate.join(", ")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="boardApprovalDate">Board Approval Date</Label>
              <Input
                id="boardApprovalDate"
                name="boardApprovalDate"
                type="date"
                defaultValue={today}
              />
            </div>

            <div>
              <Label htmlFor="expirationDate">Expiration Date *</Label>
              <Input
                id="expirationDate"
                name="expirationDate"
                type="date"
                defaultValue={tenYearsFromNow}
                required
              />
              {state.errors?.expirationDate && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.expirationDate.join(", ")}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vesting Schedule Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Vesting Schedule
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="scheduleName">Schedule Name</Label>
            <Input
              id="scheduleName"
              name="scheduleName"
              placeholder="e.g., Standard 4-year"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="vestingStartDate">Vesting Start Date *</Label>
              <Input
                id="vestingStartDate"
                name="vestingStartDate"
                type="date"
                defaultValue={today}
                required
              />
              {state.errors?.vestingStartDate && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.vestingStartDate.join(", ")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="periodUnit">Period Unit</Label>
              <Select id="periodUnit" name="periodUnit" defaultValue="MONTHLY">
                <option value="MONTHLY">Monthly</option>
                <option value="QUARTERLY">Quarterly</option>
                <option value="ANNUALLY">Annually</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="cliffMonths">Cliff (months) *</Label>
              <Input
                id="cliffMonths"
                name="cliffMonths"
                type="number"
                min="0"
                step="1"
                defaultValue="12"
                required
              />
              {state.errors?.cliffMonths && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.cliffMonths.join(", ")}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="cliffPercentage">Cliff Percentage *</Label>
              <Select id="cliffPercentage" name="cliffPercentage" defaultValue="0.25">
                <option value="0">0%</option>
                <option value="0.25">25%</option>
                <option value="0.5">50%</option>
                <option value="1">100%</option>
              </Select>
            </div>

            <div>
              <Label htmlFor="totalPeriods">Total Periods *</Label>
              <Input
                id="totalPeriods"
                name="totalPeriods"
                type="number"
                min="1"
                step="1"
                defaultValue="48"
                required
              />
              <p className="text-xs text-muted-foreground mt-1">
                e.g., 48 for 4-year monthly vesting
              </p>
              {state.errors?.totalPeriods && (
                <p className="text-sm text-red-500 mt-1">
                  {state.errors.totalPeriods.join(", ")}
                </p>
              )}
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Default:</strong> 4-year vesting with 1-year cliff (25% vests at
              cliff, then 1/48th monthly)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => history.back()}>
          Cancel
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Grant Options"}
        </Button>
      </div>
    </form>
  );
}
