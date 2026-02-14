"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { PlayCircle } from "lucide-react";

interface PortalExerciseFormProps {
  grantId: string;
  exercisableShares: number;
  exercisePrice: number;
}

export function PortalExerciseForm({
  grantId,
  exercisableShares,
  exercisePrice,
}: PortalExerciseFormProps) {
  const router = useRouter();
  const [sharesToExercise, setSharesToExercise] = useState(exercisableShares);
  const [paymentMethod, setPaymentMethod] = useState("CASH");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalCost = sharesToExercise * exercisePrice;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/portal/exercise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          grantId,
          sharesToExercise,
          paymentMethod,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to submit exercise request");
        setIsSubmitting(false);
        return;
      }

      // Redirect to exercises page with success
      router.push("/exercises?success=true");
    } catch (err) {
      setError("An error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Exercise Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="sharesToExercise">Shares to Exercise *</Label>
            <Input
              id="sharesToExercise"
              type="number"
              min="1"
              max={exercisableShares}
              step="1"
              value={sharesToExercise}
              onChange={(e) => setSharesToExercise(parseInt(e.target.value, 10) || 0)}
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Maximum: {formatNumber(exercisableShares)} shares
            </p>
          </div>

          <div>
            <Label htmlFor="paymentMethod">Payment Method *</Label>
            <Select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="CASH">Cash</option>
              <option value="CASHLESS">Cashless (Net Exercise)</option>
              <option value="MIXED">Mixed (Cash + Cashless)</option>
            </Select>
          </div>

          {/* Cost Summary */}
          <div className="bg-muted/50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shares to exercise:</span>
              <span className="font-mono">{formatNumber(sharesToExercise)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Exercise price:</span>
              <span className="font-mono">{formatCurrency(exercisePrice)}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-medium">Total cost:</span>
              <span className="font-mono font-medium">{formatCurrency(totalCost)}</span>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded text-sm">
            <strong>Note:</strong> Your exercise request will be submitted for
            approval by the company administrator. You will be notified once
            it&apos;s processed.
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end gap-4 mt-6">
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting || sharesToExercise <= 0}>
          <PlayCircle className="mr-2 h-4 w-4" />
          {isSubmitting ? "Submitting..." : "Submit Exercise Request"}
        </Button>
      </div>
    </form>
  );
}
