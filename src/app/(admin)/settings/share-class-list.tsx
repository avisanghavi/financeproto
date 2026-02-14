"use client";

import { useState, useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createShareClass, deleteShareClass, type ShareClassFormState } from "./actions";
import { formatNumber, formatCurrency } from "@/lib/utils";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

export interface SerializedShareClass {
  id: string;
  name: string;
  type: string;
  authorizedShares: number;
  pricePerShare: number;
  conversionRatio: number;
}

interface ShareClassListProps {
  shareClasses: SerializedShareClass[];
  companyId: string;
}

const initialState: ShareClassFormState = {};

export function ShareClassList({ shareClasses, companyId }: ShareClassListProps) {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(createShareClass, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success("Share class created successfully");
      setOpen(false);
    }
    if (state.errors?._form) {
      toast.error(state.errors._form[0]);
    }
  }, [state]);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;
    
    const result = await deleteShareClass(id);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Share class deleted");
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        {shareClasses.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              No share classes defined yet. Add at least one share class to start issuing equity.
            </p>
          </div>
        ) : (
          <div className="space-y-3 mb-6">
            {shareClasses.map((sc) => (
              <div
                key={sc.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{sc.name}</span>
                      <Badge variant={sc.type === "COMMON" ? "default" : "secondary"}>
                        {sc.type}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {formatNumber(sc.authorizedShares)} authorized · {formatCurrency(sc.pricePerShare)}/share
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(sc.id, sc.name)}
                >
                  <Trash2 className="h-4 w-4 text-muted-foreground hover:text-red-500" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Share Class
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Share Class</DialogTitle>
            </DialogHeader>
            <form action={formAction} className="space-y-4">
              <input type="hidden" name="companyId" value={companyId} />
              
              <div className="space-y-2">
                <Label htmlFor="sc-name">Name *</Label>
                <Input
                  id="sc-name"
                  name="name"
                  placeholder="Common Stock"
                  required
                />
                {state.errors?.name && (
                  <p className="text-sm text-red-500">{state.errors.name[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="sc-type">Type *</Label>
                <select
                  id="sc-type"
                  name="type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  required
                >
                  <option value="COMMON">Common</option>
                  <option value="PREFERRED">Preferred</option>
                </select>
                {state.errors?.type && (
                  <p className="text-sm text-red-500">{state.errors.type[0]}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="sc-authorized">Authorized Shares *</Label>
                  <Input
                    id="sc-authorized"
                    name="authorizedShares"
                    type="number"
                    defaultValue={10000000}
                    min={1}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sc-price">Price per Share *</Label>
                  <Input
                    id="sc-price"
                    name="pricePerShare"
                    type="number"
                    step="0.0001"
                    defaultValue={0.0001}
                    min={0.0001}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Creating..." : "Create Share Class"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
