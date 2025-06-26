"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Type helpers for refs
import type { RefObject } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  // Use generic for correct ref types
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
  const { elementRef: formRef, isVisible: formVisible } = useScrollAnimation<HTMLFormElement>({ threshold: 0.2, delay: 300 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      ref={sectionRef as RefObject<HTMLDivElement>}
      className={`py-20 transition-all duration-1000 ease-out ${sectionVisible ? "opacity-100" : "opacity-0"}`}
      aria-labelledby="contact-title"
    >
      <div
        ref={titleRef as RefObject<HTMLDivElement>}
        className={`text-center mb-16 transition-all duration-800 ease-out ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
          <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            Let's Talk
          </h2>
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
        </div>

        <div className="mb-12 space-y-4">
          <a
            href="mailto:nabil.lemriki@gmail.com"
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 block font-medium"
          >
            nabil.lemriki@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/nabil-lemriki-588550205"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 block"
          >
            linkedin.com/in/nabil-lemriki-588550205
          </a>

          <div className="flex justify-center gap-6 pt-4">
            {[
              { Icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-800 dark:hover:text-gray-200" },
              {
                Icon: Linkedin,
                href: "https://linkedin.com/in/nabil-lemriki-588550205",
                label: "LinkedIn",
                color: "hover:text-blue-600 dark:hover:text-blue-400",
              },
              {
                Icon: Mail,
                href: "mailto:nabil.lemriki@gmail.com",
                label: "Gmail",
                color: "hover:text-red-500 dark:hover:text-red-400",
              },
              { Icon: Twitter, href: "#", label: "Twitter", color: "hover:text-blue-500 dark:hover:text-blue-400" },
            ].map(({ Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`p-3 rounded-full transition-all duration-200 text-gray-600 dark:text-gray-400 ${color} hover:scale-110 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700`}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <form
        ref={formRef as RefObject<HTMLFormElement>}
        onSubmit={handleSubmit}
        className={`space-y-8 max-w-2xl mx-auto transition-all duration-1000 ease-out ${
          formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="rounded-full h-14 px-6 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 transition-colors duration-200 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            required
            aria-label="Your name"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="rounded-full h-14 px-6 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 transition-colors duration-200 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
            required
            aria-label="Your email address"
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="rounded-full h-14 px-6 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 transition-colors duration-200 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 md:col-span-2"
            aria-label="Your phone number"
          />
        </div>
        <Textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="rounded-2xl min-h-[140px] p-6 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 transition-colors duration-200 resize-none text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          required
          aria-label="Your message"
        />
        <Button
          type="submit"
          className="w-full rounded-full h-14 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-200 group text-lg font-semibold text-white dark:text-gray-900"
        >
          <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
          Send
        </Button>
      </form>
    </section>
  )
}
