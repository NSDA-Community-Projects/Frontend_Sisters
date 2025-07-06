"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ProfileCard = React.forwardRef(({ className, name, description, avatarUrl, onViewProfile, ...props }, ref) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <Card ref={ref} className={cn("bg-white border border-gray-200", className)} {...props}>
      <CardContent className="p-6 text-center">
        <Avatar className="w-16 h-16 mx-auto mb-4">
          <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={name} />
          <AvatarFallback className="bg-gray-200 text-gray-600">{initials}</AvatarFallback>
        </Avatar>

        <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <Button
          variant="outline"
          size="sm"
          onClick={onViewProfile}
          className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
        >
          View profile →
        </Button>
      </CardContent>
    </Card>
  )
})
ProfileCard.displayName = "ProfileCard"

export { ProfileCard }
