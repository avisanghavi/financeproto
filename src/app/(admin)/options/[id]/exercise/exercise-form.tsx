"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { exerciseOptions } from "../../actions";
import { PlayCircle } from "lucide-react";

interface ExerciseFormProps {
  grantId: string;
  exercisableShares: number;
  exercisePrice: number;
}

export function ExerciseForm({
  grantId,
  exercisableShares,
  exercisePrice,
}: ExerciseFormProps) {
  const router = useRouter();
  const [sharesToExercise, setSharesToExercise] = useState(exercisableShares);
  const [fmvAtExercise, setFmvAtExercise] = useState(exercisePrice * 2); // Default estimate
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalCost = sharesToExercise * exercisePrice;
  const spread = (fmvAtExercise - exercisePrice) * sharesToExercise;

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    setError(null);

    const result = await exerciseOptions(grantId, formData);

    if (result.error) {
      setError(result.error);
      setIsSubmitting(false);
    }
    // If successful, the action will redirect
  };

  return (
    <form action={handleSubmit}>
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
              name="sharesToExercise"
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
            <Label htmlFor="fmvAtExercise">Fair Market Value (FMV) at Exercise *</Label>
            <Input
              id="fmvAtExercise"
              name="fmvAtExercise"
              type="number"
              min="0"
              step="0.0001"
              value={fmvAtExercise}
              onChange={(e) => setFmvAtExercise(parseFloat(e.target.value) || 0)}
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Current 409A valuation or most recent priced round
            </p>
          </div>

          <div>
            <Label htmlFor="paymentMethod">Payment Method *</Label>
            <Select id="paymentMethod" name="paymentMethod" defaultValue="CASH" required>
              <option value="CASH">Cash</option>
              <option value="CASHLESS">Cashless (Net Exercise)</option>
              <option value="MIXED">Mixed (Cash + Cashless)</option>
              <option value="PROMISSORY_NOTE">Promissory Note</option>
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
            {spread > 0 && (
              <div className="flex justify-between text-green-600">
                <span className="text-muted-foreground">Bargain element (spread):</span>
                <span className="font-mono">{formatCurrency(spread)}</span>
              </div>
            )}
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
          {isSubmitting ? "Processing..." : "Exercise Options"}
        </Button>
      </div>
    </form>
  );
}
