import React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const ProjectCard = React.forwardRef(({ className, icon, title, description, variant = "default", ...props }, ref) => {
  return (
    <Card
      ref={ref}
      className={cn("border-0", variant === "default" ? "bg-yellow-400" : "bg-yellow-500", className)}
      {...props}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">{icon}</div>
          <div>
            <h3 className="font-bold text-blue-900 mb-2">{title}</h3>
            <p className="text-blue-800 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
})
ProjectCard.displayName = "ProjectCard"

export { ProjectCard }
