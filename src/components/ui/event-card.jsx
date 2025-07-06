import React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const EventCard = React.forwardRef(({ className, title, description, imageUrl, category, imageAlt, ...props }, ref) => {
  return (
    <Card ref={ref} className={cn("bg-white border border-gray-200 overflow-hidden", className)} {...props}>
      <div className="aspect-video relative">
        <img src={imageUrl || "/placeholder.svg"} alt={imageAlt || title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="text-xs text-gray-500 mb-2">{category}</div>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  )
})
EventCard.displayName = "EventCard"

export { EventCard }
