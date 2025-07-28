"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

const TeamCard = React.forwardRef(
  ({ className, teamName, description, responsibilities = [], onJoinClick, avatar, ...props }, ref) => {
    return (
      <Card ref={ref} className={cn("bg-white border border-gray-200 h-full", className)} {...props}>
        <CardContent className="p-6 flex flex-col h-full">
          {avatar || (
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
              <User className="w-8 h-8 text-black" />
            </div>
          )}

          <h3 className="font-bold text-yellow-600 text-lg mb-3">{teamName}</h3>

          <div className="flex-1 space-y-2 text-sm text-gray-600 mb-4">
            <p>-{description}</p>
            {responsibilities.map((responsibility, index) => (
              <p key={index}>-{responsibility}</p>
            ))}
          </div>

          <Button
            onClick={onJoinClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold w-full mt-auto"
          >
            Join Now
          </Button>
        </CardContent>
      </Card>
    )
  },
)
TeamCard.displayName = "TeamCard"

export { TeamCard }
