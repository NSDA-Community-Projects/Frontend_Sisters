"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const HeroBanner = React.forwardRef(
  ({ className, title, description, ctaText, onCtaClick, teamIndicator, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("bg-gradient-to-b from-gray-50 to-white py-20 text-center", className)} {...props}>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 max-w-4xl mx-auto leading-tight">{title}</h1>

          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">{description}</p>

          {teamIndicator && <div className="flex items-center justify-center mb-8">{teamIndicator}</div>}

          {ctaText && (
            <Button
              onClick={onCtaClick}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full"
            >
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    )
  },
)
HeroBanner.displayName = "HeroBanner"

export { HeroBanner }
