"use client";

import { useState, useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createEquityPlan, deleteEquityPlan, type EquityPlanFormState } from "./actions";
import { formatNumber, formatDate } from "@/lib/utils";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export interface SerializedEquityPlan {
  id: string;
  name: string;
  totalPoolSize: number;
  availableShares: number;
  boardApprovalDate: string;
  expirationDate: string;
}

interface EquityPlanListProps {
  equityPlans: SerializedEquityPlan[];
  companyId: string;
}

const initialState: EquityPlanFormState = {};

export function EquityPlanList({ equityPlans, companyId }: EquityPlanListProps) {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(createEquityPlan, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success("Equity plan created successfully");
      setOpen(false);
    }
    if (state.errors?._form) {
      toast.error(state.errors._form[0]);
    }
  }, [state]);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;
    
    const result = await deleteEquityPlan(id);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Equity plan deleted");
    }
  };

  // Default expiration: 10 years from today
  const defaultExpiration = new Date();
  defaultExpiration.setFullYear(defaultExpiration.getFullYear() + 10);

  return (
    <Card>
      <CardContent className="pt-6">
        {equityPlans.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              No equity plans defined yet. Create an equity plan to start granting stock options.
            </p>
          </div>
        ) : (
          <div className="space-y-3 mb-6">
            {equityPlans.map((plan) => (
              <div
                key={plan.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div>
                  <div className="font-medium">{plan.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {formatNumber(plan.availableShares)} of {formatNumber(plan.totalPoolSize)} available
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Expires {formatDate(plan.expirationDate)}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-sm font-medium">
                      {((plan.availableShares / plan.totalPoolSize) * 100).toFixed(1)}%
                    </div>
                    <div className="text-xs text-muted-foreground">available</div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(plan.id, plan.name)}
                  >
                    <Trash2 className="h-4 w-4 text-muted-foreground hover:text-red-500" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Equity Plan
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Equity Plan</DialogTitle>
            </DialogHeader>
            <form action={formAction} className="space-y-4">
              <input type="hidden" name="companyId" value={companyId} />
              
              <div className="space-y-2">
                <Label htmlFor="plan-name">Plan Name *</Label>
                <Input
                  id="plan-name"
                  name="name"
                  placeholder="2024 Equity Incentive Plan"
                  required
                />
                {state.errors?.name && (
                  <p className="text-sm text-red-500">{state.errors.name[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan-pool">Total Pool Size *</Label>
                <Input
                  id="plan-pool"
                  name="totalPoolSize"
                  type="number"
                  defaultValue={1000000}
                  min={1}
                  required
                />
                {state.errors?.totalPoolSize && (
                  <p className="text-sm text-red-500">{state.errors.totalPoolSize[0]}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  Total shares reserved for this option pool
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="plan-approval">Board Approval Date *</Label>
                  <Input
                    id="plan-approval"
                    name="boardApprovalDate"
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="plan-expiration">Expiration Date *</Label>
                  <Input
                    id="plan-expiration"
                    name="expirationDate"
                    type="date"
                    defaultValue={defaultExpiration.toISOString().split("T")[0]}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Creating..." : "Create Equity Plan"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
