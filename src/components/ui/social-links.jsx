import React from "react"
import { cn } from "@/lib/utils"

const SocialLinks = React.forwardRef(({ className, links = [], variant = "header", ...props }, ref) => {
  const linkStyles = variant === "header" ? "text-gray-600 hover:text-blue-600" : "text-blue-600 hover:text-blue-800"

  return (
    <div ref={ref} className={cn("flex items-center space-x-3", className)} {...props}>
      {links.map((link, index) => (
        <a key={index} href={link.href} className={cn("transition-colors", linkStyles)} aria-label={link.label}>
          {link.icon}
        </a>
      ))}
    </div>
  )
})
SocialLinks.displayName = "SocialLinks"

export { SocialLinks }
