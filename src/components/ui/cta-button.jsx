import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const CtaButton = React.forwardRef(({ className, variant = "primary", withArrow = false, children, ...props }, ref) => {
  const variantStyles = {
    primary: "bg-yellow-400 hover:bg-yellow-500 text-black font-semibold",
    secondary: "bg-blue-600 hover:bg-blue-700 text-white font-semibold",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold bg-transparent",
  }

  return (
    <Button
      ref={ref}
      className={cn("px-8 py-3 rounded-full transition-all duration-200", variantStyles[variant], className)}
      {...props}
    >
      {children}
      {withArrow && (
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </Button>
  )
})
CtaButton.displayName = "CtaButton"

export { CtaButton }
