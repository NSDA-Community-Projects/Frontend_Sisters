import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const InfoSectionCard = React.forwardRef(
  ({ className, icon, title, description, variant = "mission", ...props }, ref) => {
    const bgColor = variant === "mission" ? "bg-blue-50" : "bg-yellow-50"
    const iconBg = variant === "mission" ? "bg-blue-600" : "bg-yellow-400"
    const iconColor = variant === "mission" ? "text-white" : "text-black"

    return (
      <Card ref={ref} className={cn(`${bgColor} border-0`, className)} {...props}>
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <div className={iconColor}>{icon}</div>
            </div>
            <div>
              <h3 className="font-bold text-blue-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
)
InfoSectionCard.displayName = "InfoSectionCard"

export { InfoSectionCard }
