import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Twitter, Linkedin, Dribbble, Instagram, Download } from "lucide-react"

const skills = ["Web Development", "UX/UI", "SEO", "CMS (WordPress)", "Fullstack (Laravel, Django, ASP.NET)"]

const techStack = [
  "C#",
  "JavaScript",
  "Python",
  "PHP",
  "SQL",
  "HTML/CSS",
  ".NET",
  "Django",
  "Laravel",
  "Canva",
  "Figma",
  "Git",
]

const experiences = [
  {
    id: "uranus-media",
    company: "Uranus Media",
    role: "Fullstack Developer + SEO",
    period: "2021–2023",
    description:
      "Built e-commerce sites (beauty-secrets.ma, urabuy.ma). SEO strategies → 1st-page Google rankings (hajir.ma, ijob.ma). UX/UI for landing pages and logos.",
    logo: "U",
    color: "bg-blue-500",
  },
  {
    id: "marsa-maroc",
    company: "Marsa Maroc",
    role: "System Developer",
    period: "2019",
    description:
      "Designed membership management system. Developed CRUD logic and custom reports. Stack: ASP.NET, SQL Server.",
    logo: "M",
    color: "bg-green-500",
  },
]

export default function AboutPage() {
  return (
    < >
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 bg-dotted">
        {/* Breadcrumb */}
        <div className="pt-8 pb-4 px-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-gray-800 dark:hover:text-gray-200">
              Home
            </Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-12">Nabil Lemriki</h1>

          {/* Profile Section */}
          <div className="relative mb-12">
            <div className="relative inline-block">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Nabil Lemriki"
                width={350}
                height={200}
                className="rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Sticky Note Stats */}
              <div className="absolute -bottom-3 left-3 flex gap-2">
                <div className="bg-yellow-200 dark:bg-yellow-300 p-2 rounded-lg shadow-lg transform -rotate-2">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800">4+</div>
                    <div className="text-xs text-gray-800">years</div>
                    <div className="text-xs text-gray-800">experience</div>
                  </div>
                </div>
                <div className="bg-orange-200 dark:bg-orange-300 p-2 rounded-lg shadow-lg transform rotate-1">
                  <div className="text-center">
                    <div className="text-lg font-bold">🏆</div>
                    <div className="text-xs text-gray-800">awards</div>
                  </div>
                </div>
                <div className="bg-blue-200 dark:bg-blue-300 p-2 rounded-lg shadow-lg transform -rotate-1">
                  <div className="text-center">
                    <div className="text-sm font-bold">📍</div>
                    <div className="text-xs text-gray-800">Morocco</div>
                  </div>
                </div>
                <div className="bg-green-200 dark:bg-green-300 p-2 rounded-lg shadow-lg transform rotate-2">
                  <div className="text-center">
                    <div className="text-xs text-gray-800">Available</div>
                    <div className="text-xs text-gray-800">for hiring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Intro</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              4+ years of experience building smart, scalable websites, with a love for SEO, UX/UI, and crafting custom
              tools for clients. As a passionate fullstack developer, I thrive in creating solutions that not only look
              great but perform exceptionally well in search engines and user experience.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Skills</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-200 text-white dark:text-gray-900"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Experience</h2>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200"
                aria-label="Download resume PDF"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card
                  key={exp.id}
                  className="p-6 hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}
                    >
                      <span className="text-white font-bold">{exp.logo}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{exp.company}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">
                        {exp.role} • {exp.period}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">Let's talk</h2>

            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">nabil.lemriki@gmail.com</p>
              <div className="flex justify-center gap-4">
                <Twitter className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" />
                <Dribbble className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 cursor-pointer" />
              </div>
            </div>

            <form className="max-w-2xl mx-auto space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="rounded-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="rounded-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="rounded-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 md:col-span-2"
                />
              </div>
              <Textarea
                placeholder="Message"
                className="rounded-2xl min-h-[120px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
              />
              <Button className="w-full rounded-full bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-white dark:text-gray-900">
                Send
              </Button>
            </form>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with 💜 by Nabil using <span className="underline">Framer</span> & Canvas ✨
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">©2025 Nabil Lemriki</p>
          </div>
        </div>
      </main>
    </>
  )
}
