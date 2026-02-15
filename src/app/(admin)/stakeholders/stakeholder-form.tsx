"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { createStakeholder, updateStakeholder, type StakeholderFormState } from "./actions";
import { toast } from "sonner";

interface Stakeholder {
  id: string;
  name: string;
  email: string;
  type: string;
  title: string | null;
}

interface StakeholderFormProps {
  stakeholder?: Stakeholder | null;
}

const STAKEHOLDER_TYPES = [
  { value: "FOUNDER", label: "Founder" },
  { value: "EMPLOYEE", label: "Employee" },
  { value: "INVESTOR", label: "Investor" },
  { value: "ADVISOR", label: "Advisor" },
  { value: "BOARD_MEMBER", label: "Board Member" },
  { value: "CONSULTANT", label: "Consultant" },
];

const initialState: StakeholderFormState = {};

export function StakeholderForm({ stakeholder }: StakeholderFormProps) {
  const action = stakeholder ? updateStakeholder : createStakeholder;
  const [state, formAction, isPending] = useActionState(action, initialState);

  useEffect(() => {
    if (state.errors?._form) {
      toast.error(state.errors._form[0]);
    }
  }, [state]);

  return (
    <Card>
      <CardContent className="pt-6">
        <form action={formAction} className="space-y-6">
          {stakeholder && <input type="hidden" name="id" value={stakeholder.id} />}

          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                defaultValue={stakeholder?.name}
                placeholder="John Smith"
                required
              />
              {state.errors?.name && (
                <p className="text-sm text-red-500">{state.errors.name[0]}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                defaultValue={stakeholder?.email}
                placeholder="john@example.com"
                required
              />
              {state.errors?.email && (
                <p className="text-sm text-red-500">{state.errors.email[0]}</p>
              )}
            </div>

            {/* Type */}
            <div className="space-y-2">
              <Label htmlFor="type">Type *</Label>
              <select
                id="type"
                name="type"
                defaultValue={stakeholder?.type || "EMPLOYEE"}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
              >
                {STAKEHOLDER_TYPES.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {state.errors?.type && (
                <p className="text-sm text-red-500">{state.errors.type[0]}</p>
              )}
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                defaultValue={stakeholder?.title || ""}
                placeholder="CEO, Software Engineer, etc."
              />
              {state.errors?.title && (
                <p className="text-sm text-red-500">{state.errors.title[0]}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button type="submit" disabled={isPending}>
              {isPending
                ? stakeholder
                  ? "Updating..."
                  : "Creating..."
                : stakeholder
                ? "Update Stakeholder"
                : "Create Stakeholder"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
