export const dynamic = "force-static";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "beauty-secrets",
    slug: "beauty-secrets",
    title: "Beauty Secrets",
    description: "Full-stack CMS-based shop with SEO and product animations.",
    image: "./bts.webp?height=300&width=500",
    tag: "E-Commerce",
    tagColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/nabillemriki/beauty-secrets",
    demoUrl: "https://beauty-secrets.ma",
    year: "2022",
  },
  {
    id: "hajir-ma",
    slug: "hajir-ma",
    title: "Hajir.ma",
    description:
      "Google-optimized job portal with landing design and analytics.",
    image: "/placeholder.svg?height=300&width=400",
    tag: "SEO",
    tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    technologies: ["Django", "Python", "PostgreSQL", "SEO"],
    githubUrl: "https://github.com/nabillemriki/hajir-ma",
    demoUrl: "https://hajir.ma",
    year: "2021",
  },
  {
    id: "urabuy",
    slug: "urabuy",
    title: "Urabuy",
    description:
      "E-commerce platform with advanced product management and user experience.",
    image: "/placeholder.svg?height=300&width=400",
    tag: "E-Commerce",
    tagColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    githubUrl: "https://github.com/nabillemriki/urabuy",
    demoUrl: "https://urabuy.ma",
    year: "2022",
  },
  {
    id: "ijob-ma",
    slug: "ijob-ma",
    title: "iJob.ma",
    description:
      "Job portal with SEO optimization and first-page Google rankings.",
    image: "/placeholder.svg?height=300&width=400",
    tag: "SEO",
    tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    technologies: ["WordPress", "PHP", "MySQL", "SEO Tools"],
    githubUrl: "https://github.com/nabillemriki/ijob-ma",
    demoUrl: "https://ijob.ma",
    year: "2021",
  },
  {
    id: "membership-system",
    slug: "membership-system",
    title: "Membership Management",
    description:
      "Internal platform for employee/employer data with authentication and reporting.",
    image: "/placeholder.svg?height=300&width=400",
    tag: "System",
    tagColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    technologies: ["ASP.NET", "C#", "SQL Server", "Bootstrap"],
    githubUrl: "https://github.com/nabillemriki/membership-system",
    demoUrl: "#", // No public demo for internal system
    year: "2019",
  },
  {
    id: "employee-platform",
    slug: "employee-platform",
    title: "Employee Platform",
    description:
      "Comprehensive platform with UX/UI, authentication, subscriptions, and reporting.",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Platform",
    tagColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    technologies: ["Django", "React", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com/nabillemriki/employee-platform",
    demoUrl: "https://employee-platform-demo.com",
    year: "2020",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 bg-dotted">
        {/* Breadcrumb */}
        <div className="pt-8 pb-4 px-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link
              href="/"
              className="hover:text-gray-800 dark:hover:text-gray-200"
            >
              Home
            </Link>
            <span>/</span>
            <span>Projects</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Projects
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              A selection of my work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-2 border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 bg-white dark:bg-gray-800"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Link href={`/projects/${project.slug}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} project preview`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </Link>
                  <Badge
                    className={`absolute top-3 left-3 ${project.tagColor} shadow-md font-semibold`}
                  >
                    {project.tag}
                  </Badge>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white bg-black/50 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Title */}
                  <Link href={`/projects/${project.slug}`}>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 cursor-pointer">
                      {project.title}
                    </h2>
                  </Link>

                  {/* Project Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge
                        variant="outline"
                        className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  {/*
                  <div className="flex gap-2 mb-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-white dark:text-gray-900"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                  */}

                  {/* View Details Link */}
                  <Link href={`/projects/${project.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center py-16 mt-16 border-t-2 border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Left Side */}
              <p className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
                © 2025 Nabil Lemriki | XDream.Dev — All rights reserved.
              </p>

              {/* Social Links */}
              <div className="flex gap-5 items-center">
                {/* GitHub */}
                <a
                  href="https://github.com/XDream-Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.14-.02-2.07-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.74.81 1.19 1.85 1.19 3.11 0 4.43-2.69 5.41-5.25 5.69.42.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.23 0 .31.2.67.8.56A10.999 10.999 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/nabil-lemriki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.47-2.17 2.98v5.69h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.58v5.61z" />
                  </svg>
                </a>

                {/* Email with Tooltip */}
                <div className="relative group">
                  <a
                    href="mailto:nabil.lemriki@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition flex items-center"
                    aria-label="Email"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </a>
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm bg-gray-800 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    nabil.lemriki@gmail.com
                  </div>
                </div>

                {/* Phone with Tooltip */}
                <div className="relative group">
                  <div
                    className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition cursor-pointer"
                    aria-label="Phone"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.27 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.58 1 1 0 0 1-.26 1l-2.29 2.21z" />
                    </svg>
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    +212 6 37 10 17 85
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
