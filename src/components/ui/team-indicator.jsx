import React from "react"
import { cn } from "@/lib/utils"

const TeamIndicator = React.forwardRef(
  ({ className, count = 4, label = "Meet our core team members", ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center justify-center", className)} {...props}>
        <div className="flex -space-x-2">
          {Array.from({ length: count }).map((_, i) => (
            <div key={i} className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white" />
          ))}
        </div>
        <span className="ml-3 text-gray-600">{label}</span>
      </div>
    )
  },
)
TeamIndicator.displayName = "TeamIndicator"

export { TeamIndicator }
