import React from "react"
import { cn } from "@/lib/utils"

const NavigationBar = React.forwardRef(({ className, items = [], logo, actions, ...props }, ref) => {
  return (
    <nav
      ref={ref}
      className={cn("flex items-center justify-between w-full px-4 py-4 bg-white border-b border-gray-200", className)}
      {...props}
    >
      <div className="flex items-center">
        {logo || (
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-yellow-400 rounded transform rotate-45" />
          </div>
        )}
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {items.map((item, index) => (
          <a key={index} href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
            {item.label}
          </a>
        ))}
      </div>

      {actions && <div className="flex items-center space-x-3">{actions}</div>}
    </nav>
  )
})
NavigationBar.displayName = "NavigationBar"

export { NavigationBar }
