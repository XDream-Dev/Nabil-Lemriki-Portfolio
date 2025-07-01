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
    image: "/placeholder.svg?height=300&width=400",
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Built with 💜 by Nabil using{" "}
                <a
                  href="https://framer.com"
                  className="underline hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Framer
                </a>{" "}
                & Canvas
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 font-semibold">
                ©2025 Nabil Lemriki
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
