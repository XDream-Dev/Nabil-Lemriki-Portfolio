import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Code,
} from "lucide-react";
import { notFound } from "next/navigation";

const projects = [
  {
    id: "beauty-secrets",
    slug: "beauty-secrets",
    title: "Beauty Secrets",
    description: "Full-stack CMS-based shop with SEO and product animations.",
    longDescription:
      "A comprehensive e-commerce platform built for beauty products with advanced CMS integration, SEO optimization, and smooth product animations. The platform features a custom admin panel, inventory management, and payment processing.",
    image: "/bts.webp?height=400&width=600",
    images: ["/bts.webp?height=300&width=500"],
    tag: "E-Commerce",
    tagColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "CSS3", "HTML5"],
    githubUrl: "https://github.com/nabillemriki/beauty-secrets",
    demoUrl: "https://beauty-secrets.ma",
    year: "2022",
    duration: "3 months",
    team: "Solo Project",
    features: [
      "Custom CMS with product management",
      "SEO-optimized product pages",
      "Smooth animations and transitions",
      "Payment gateway integration",
      "Responsive design for all devices",
      "Admin dashboard with analytics",
    ],
    challenges:
      "The main challenge was creating a seamless user experience while maintaining fast loading times for product images and animations.",
    solution:
      "Implemented lazy loading, optimized images, and used CSS animations instead of JavaScript for better performance.",
  },
  {
    id: "hajir-ma",
    slug: "hajir-ma",
    title: "Hajir.ma",
    description:
      "Google-optimized job portal with landing design and analytics.",
    longDescription:
      "A comprehensive job portal platform optimized for search engines with advanced filtering, real-time notifications, and detailed analytics. Achieved first-page Google rankings for competitive keywords.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    tag: "SEO",
    tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    technologies: [
      "Django",
      "Python",
      "PostgreSQL",
      "JavaScript",
      "Bootstrap",
      "SEO",
    ],
    githubUrl: "https://github.com/nabillemriki/hajir-ma",
    demoUrl: "https://hajir.ma",
    year: "2021",
    duration: "4 months",
    team: "2 Developers",
    features: [
      "Advanced job search and filtering",
      "Real-time job notifications",
      "Company profiles and reviews",
      "SEO-optimized job listings",
      "Analytics dashboard",
      "Mobile-responsive design",
    ],
    challenges:
      "Achieving first-page Google rankings in a competitive job market while maintaining site performance.",
    solution:
      "Implemented comprehensive SEO strategy with structured data, optimized content, and technical SEO improvements.",
  },
  {
    id: "urabuy",
    slug: "urabuy",
    title: "Urabuy",
    description:
      "E-commerce platform with advanced product management and user experience.",
    longDescription:
      "A modern e-commerce platform with advanced product management, user reviews, wishlist functionality, and seamless checkout process. Built with focus on user experience and conversion optimization.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    tag: "E-Commerce",
    tagColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe", "Redis", "Docker"],
    githubUrl: "https://github.com/nabillemriki/urabuy",
    demoUrl: "https://urabuy.ma",
    year: "2022",
    duration: "5 months",
    team: "3 Developers",
    features: [
      "Advanced product catalog",
      "User reviews and ratings",
      "Wishlist and favorites",
      "Multiple payment methods",
      "Order tracking system",
      "Admin analytics dashboard",
    ],
    challenges:
      "Creating a scalable architecture that could handle high traffic during sales events.",
    solution:
      "Implemented caching strategies with Redis, optimized database queries, and used CDN for static assets.",
  },
  {
    id: "ijob-ma",
    slug: "ijob-ma",
    title: "iJob.ma",
    description:
      "Job portal with SEO optimization and first-page Google rankings.",
    longDescription:
      "A professional job portal platform with advanced search capabilities, company profiles, and comprehensive SEO optimization that achieved first-page Google rankings for multiple job-related keywords.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    tag: "SEO",
    tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "SEO Tools"],
    githubUrl: "https://github.com/nabillemriki/ijob-ma",
    demoUrl: "https://ijob.ma",
    year: "2021",
    duration: "3 months",
    team: "Solo Project",
    features: [
      "Job search with advanced filters",
      "Company directory",
      "Resume builder tool",
      "Email job alerts",
      "SEO-optimized content",
      "Social media integration",
    ],
    challenges:
      "Competing with established job portals for search engine visibility.",
    solution:
      "Focused on local SEO, created high-quality content, and implemented technical SEO best practices.",
  },
  {
    id: "membership-system",
    slug: "membership-system",
    title: "Membership Management",
    description:
      "Internal platform for employee/employer data with authentication and reporting.",
    longDescription:
      "A comprehensive membership management system for organizations with role-based access control, detailed reporting, and data analytics. Built for scalability and security.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    tag: "System",
    tagColor:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    technologies: ["ASP.NET", "C#", "SQL Server", "Bootstrap", "Chart.js"],
    githubUrl: "https://github.com/nabillemriki/membership-system",
    demoUrl: "#", // No public demo for internal system
    year: "2019",
    duration: "4 months",
    team: "Solo Project",
    features: [
      "Role-based access control",
      "Member data management",
      "Advanced reporting system",
      "Data export functionality",
      "Audit trail logging",
      "Dashboard with analytics",
    ],
    challenges:
      "Ensuring data security and compliance with privacy regulations.",
    solution:
      "Implemented encryption, secure authentication, and comprehensive audit logging.",
  },
  {
    id: "employee-platform",
    slug: "employee-platform",
    title: "Employee Platform",
    description:
      "Comprehensive platform with UX/UI, authentication, subscriptions, and reporting.",
    longDescription:
      "A full-featured employee management platform with modern UX/UI design, subscription management, detailed reporting, and comprehensive authentication system.",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    tag: "Platform",
    tagColor:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    technologies: ["Django", "React", "PostgreSQL", "Stripe", "Docker", "AWS"],
    githubUrl: "https://github.com/nabillemriki/employee-platform",
    demoUrl: "https://employee-platform-demo.com",
    year: "2020",
    duration: "6 months",
    team: "4 Developers",
    features: [
      "Modern responsive UI/UX",
      "Subscription management",
      "Employee onboarding",
      "Performance tracking",
      "Payroll integration",
      "Advanced reporting",
    ],
    challenges: "Creating an intuitive interface for complex HR processes.",
    solution:
      "Conducted user research, created prototypes, and iteratively improved the UX based on feedback.",
  },
];

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 bg-dotted">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link
              href="/"
              className="hover:text-gray-800 dark:hover:text-gray-200"
            >
              Home
            </Link>
            <span>/</span>
            <Link
              href="/projects"
              className="hover:text-gray-800 dark:hover:text-gray-200"
            >
              Projects
            </Link>
            <span>/</span>
            <span>{project.title}</span>
          </div>

          {/* Back Button */}
          <Link href="/projects">
            <Button
              variant="outline"
              className="mb-8 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h1>
                  <Badge
                    className={`${project.tagColor} font-semibold px-3 py-1`}
                  >
                    {project.tag}
                  </Badge>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 flex-shrink-0">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Github
                  </Button>
                </a>
                {project.demoUrl !== "#" && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-white dark:text-gray-900"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {project.year} • {project.duration}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{project.team}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>{project.technologies.slice(0, 3).join(", ")}</span>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className="mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={`${project.title} main preview`}
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </section>

              {/* Features */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Challenge & Solution */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  Challenge & Solution
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                      Challenge
                    </h3>
                    <p className="text-red-700 dark:text-red-400">
                      {project.challenges}
                    </p>
                  </div>
                  <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">
                      Solution
                    </h3>
                    <p className="text-green-700 dark:text-green-400">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </section>

              {/* Additional Images */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                  Project Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Project Links
                </h3>
                <div className="space-y-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="text-gray-800 dark:text-gray-200">
                      View Source Code
                    </span>
                  </a>
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-800 dark:text-gray-200">
                        Live Demo
                      </span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Year
                    </span>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {project.year}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Duration
                    </span>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {project.duration}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Team
                    </span>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {project.team}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

                {/* Email */}
                <a
                  href="mailto:nabil.lemriki@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>

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
