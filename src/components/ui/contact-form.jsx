"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const ContactForm = React.forwardRef(({ className, onSubmit, ...props }, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <Card ref={ref} className={cn("bg-yellow-400 border-0", className)} {...props}>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" className="text-blue-900 font-medium">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-yellow-300 border-yellow-300 focus:border-blue-600 focus:ring-blue-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-blue-900 font-medium">
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-yellow-300 border-yellow-300 focus:border-blue-600 focus:ring-blue-600"
                placeholder="Your phone number"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-blue-900 font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-yellow-300 border-yellow-300 focus:border-blue-600 focus:ring-blue-600"
              placeholder="Your email address"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-blue-900 font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-yellow-300 border-yellow-300 focus:border-blue-600 focus:ring-blue-600 min-h-[120px]"
              placeholder="Your message"
            />
          </div>

          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3">
            Get In Touch
          </Button>
        </form>
      </CardContent>
    </Card>
  )
})
ContactForm.displayName = "ContactForm"

export { ContactForm }
