import { Star } from "lucide-react";
import { cn } from "~/lib/utils";

interface StarRatingProps {
  rating: number | null | undefined;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  showValue?: boolean;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  className,
  showValue = false
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };

  // Handle null/undefined rating values
  const normalizedRating = rating ?? 0;

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starValue = index + 1;
    const isFilled = starValue <= normalizedRating;
    const isPartial = starValue > normalizedRating && starValue - 1 < normalizedRating;
    const fillPercentage = isPartial ? ((normalizedRating % 1) * 100) : 0;

    return (
      <div key={index} className="relative">
        <Star
          className={cn(
            sizeClasses[size],
            "text-gray-300 dark:text-gray-600",
            className
          )}
        />
        {(isFilled || isPartial) && (
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: isFilled ? '100%' : `${fillPercentage}%` }}
          >
            <Star
              className={cn(
                sizeClasses[size],
                "text-yellow-400 fill-yellow-400",
                className
              )}
            />
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {stars}
      </div>
      {showValue && (
        <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
          {rating ? rating.toFixed(1) : '0.0'}
        </span>
      )}
    </div>
  );
}