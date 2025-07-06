import React from "react"
import { cn } from "@/lib/utils"

const FeatureCard = React.forwardRef(({ className, icon, title, description, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex flex-col items-center text-center p-6", className)} {...props}>
      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
})
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }
