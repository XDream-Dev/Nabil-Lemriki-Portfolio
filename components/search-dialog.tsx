"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight } from "lucide-react"

const projects = [
  {
    id: "beauty-secrets",
    slug: "beauty-secrets",
    title: "Beauty Secrets",
    description: "Full-stack CMS-based shop with SEO and product animations.",
    tag: "E-Commerce",
    tagColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    id: "hajir-ma",
    slug: "hajir-ma",
    title: "Hajir.ma",
    description: "Google-optimized job portal with landing design and analytics.",
    tag: "SEO",
    tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "urabuy",
    slug: "urabuy",
    title: "Urabuy",
    description: "E-commerce platform with advanced product management and user experience.",
    tag: "E-Commerce",
    tagColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    id: "ijob-ma",
    slug: "ijob-ma",
    title: "iJob.ma",
    description: "Job portal with SEO optimization and first-page Google rankings.",
    tag: "SEO",
    tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "membership-system",
    slug: "membership-system",
    title: "Membership Management",
    description: "Internal platform for employee/employer data with authentication and reporting.",
    tag: "System",
    tagColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: "employee-platform",
    slug: "employee-platform",
    title: "Employee Platform",
    description: "Comprehensive platform with UX/UI, authentication, subscriptions, and reporting.",
    tag: "Platform",
    tagColor: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  },
]

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase()) ||
      project.tag.toLowerCase().includes(query.toLowerCase()),
  )

  const handleSelect = (project: (typeof projects)[0]) => {
    router.push(`/projects/${project.slug}`)
    onOpenChange(false)
    setQuery("")
    setSelectedIndex(0)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filteredProjects.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
    } else if (e.key === "Enter" && filteredProjects[selectedIndex]) {
      e.preventDefault()
      handleSelect(filteredProjects[selectedIndex])
    }
  }

  useEffect(() => {
    if (!open) {
      setQuery("")
      setSelectedIndex(0)
    }
  }, [open])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 gap-0 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <DialogHeader className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <DialogTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <Search className="w-5 h-5" />
            Search Projects
          </DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <Input
            placeholder="Type to search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="mb-4 text-lg h-12 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            autoFocus
          />

          {query && (
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 border ${
                      index === selectedIndex
                        ? "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                        : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleSelect(project)}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                          <Badge className={`${project.tagColor} text-xs`}>{project.tag}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{project.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 ml-4" />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No projects found matching "{query}"</p>
                </div>
              )}
            </div>
          )}

          {!query && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Start typing to search through projects...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
