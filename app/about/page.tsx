"use client";
export const dynamic = "force-static";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Twitter,
  Linkedin,
  Dribbble,
  Instagram,
  Download,
  Mail,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  "Web Development",
  "UX/UI",
  "SEO",
  "CMS (WordPress)",
  "Fullstack (Laravel, Django, ASP.NET)",
];

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
];

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
];

// Helper for staggered delay style
const getDelayStyle = (base: number, i: number, step: number = 60) => ({
  transitionDelay: `${base + i * step}ms`,
});

import { Navigation } from "@/components/navigation";

export default function AboutPage() {
  // Animation hooks for each block, with staggered delays and triggerOnce: false
  const headerAnim = useScrollAnimation<HTMLHeadingElement>({
    threshold: 0.2,
    delay: 60,
    triggerOnce: false,
  });
  const profileAnim = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    delay: 120,
    triggerOnce: false,
  });
  const introAnim = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    delay: 180,
    triggerOnce: false,
  });
  const skillsAnim = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    delay: 240,
    triggerOnce: false,
  });
  const techAnim = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    delay: 300,
    triggerOnce: false,
  });
  const expAnim = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    delay: 360,
    triggerOnce: false,
  });
  const contactAnim = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    delay: 420,
    triggerOnce: false,
  });
  const footerAnim = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    delay: 480,
    triggerOnce: false,
  });

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 bg-dotted">
        <Navigation />
        {/* Breadcrumb */}
        <div className="pt-8 pb-4 px-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Link
              href="/"
              className="hover:text-gray-800 dark:hover:text-gray-200"
            >
              Home
            </Link>
            <span>/</span>
            <span>About</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-16">
          <h1
            ref={headerAnim.elementRef}
            className={`text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-12 transition-all duration-1000 ease-out
              ${
                headerAnim.isVisible
                  ? "opacity-100 blur-0 scale-100 translate-y-0"
                  : "opacity-0 blur-lg scale-95 translate-y-8"
              }
            `}
          >
            Nabil Lemriki
          </h1>

          {/* Profile + Info Section (side by side on desktop) */}
          <section
            ref={profileAnim.elementRef}
            className={`min-h-screen flex flex-col justify-center lg:flex-row gap-12 mb-16 items-start transition-all duration-1000 ease-out
              ${
                profileAnim.isVisible
                  ? "opacity-100 blur-0 scale-100 translate-x-0"
                  : "opacity-0 blur-lg scale-95 -translate-x-8"
              }
            `}
          >
            {/* Profile Image + Sticky Notes */}
            <div
              ref={profileAnim.elementRef}
              className={`relative mb-8 lg:mb-0 transition-all duration-1000 ease-out
                ${
                  profileAnim.isVisible
                    ? "opacity-100 blur-0 scale-100 translate-x-0"
                    : "opacity-0 blur-lg scale-95 -translate-x-8"
                }
              `}
            >
              <div className="relative inline-block">
                <Image
                  src="/CEO1.jpg?height=200&width=350&quality=80&format=webp&blur=10&fit=cover&crop=faces"
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
                      <div className="text-lg font-bold text-gray-800">✨</div>
                      <div className="text-xs text-gray-800">Available</div>
                      <div className="text-xs text-gray-800">for hiring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Intro, Skills, Tech Stack */}
            <div className="flex-1 lg:pl-8">
              {/* Intro Section */}
              <div
                ref={introAnim.elementRef}
                className={`mb-8 transition-all duration-1000 ease-out
                  ${
                    introAnim.isVisible
                      ? "opacity-100 blur-0 scale-100 translate-y-0"
                      : "opacity-0 blur-lg scale-95 translate-y-8"
                  }
                `}
              >
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Intro
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  4+ years of experience building smart, scalable websites, with
                  a love for SEO, UX/UI, and crafting custom tools for clients.
                  As a passionate fullstack developer, I thrive in creating
                  solutions that not only look great but perform exceptionally
                  well in search engines and user experience.
                </p>
              </div>
              {/* Skills */}
              <div
                ref={skillsAnim.elementRef}
                className={`mb-8 transition-all duration-1000 ease-out
                  ${
                    skillsAnim.isVisible
                      ? "opacity-100 blur-0 scale-100 translate-y-0"
                      : "opacity-0 blur-lg scale-95 translate-y-8"
                  }
                `}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {skills.map((skill, i) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      style={getDelayStyle(0, i, 60)}
                      className={`transition-all duration-700 ease-out
                        ${
                          skillsAnim.isVisible
                            ? "opacity-100 blur-0 scale-100 translate-y-0"
                            : "opacity-0 blur-md scale-95 translate-y-4"
                        }
                        hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              {/* Tech Stack */}
              <div
                ref={techAnim.elementRef}
                className={`transition-all duration-1000 ease-out
                  ${
                    techAnim.isVisible
                      ? "opacity-100 blur-0 scale-100 translate-y-0"
                      : "opacity-0 blur-lg scale-95 translate-y-8"
                  }
                `}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <Badge
                      key={tech}
                      style={getDelayStyle(200, i, 60)}
                      className={`transition-all duration-700 ease-out
                        ${
                          techAnim.isVisible
                            ? "opacity-100 blur-0 scale-100 translate-y-0"
                            : "opacity-0 blur-md scale-95 translate-y-4"
                        }
                        bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 text-white dark:text-gray-900`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="min-h-screen flex flex-col justify-center mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Experience
              </h2>
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
              {experiences.map((exp, i) => {
                // Individual scroll animation for each card
                const cardAnim = useScrollAnimation<HTMLDivElement>({
                  threshold: 0.3,
                  delay: 60,
                  triggerOnce: false,
                });
                return (
                  <Card
                    key={exp.id}
                    ref={cardAnim.elementRef}
                    style={getDelayStyle(0, i, 120)}
                    className={`p-6 hover:shadow-lg transition-all duration-1000 ease-out
                      ${
                        cardAnim.isVisible
                          ? "opacity-100 blur-0 scale-100 translate-y-0"
                          : "opacity-0 blur-lg scale-95 translate-y-8"
                      }
                      border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0 shadow-md`}
                      >
                        <span className="text-white font-bold">{exp.logo}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                          {exp.company}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2 font-medium">
                          {exp.role} • {exp.period}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </section>
          {/* Contact Section (from Home) */}
          <section className="py-20 transition-all duration-1000 ease-out min-h-screen flex flex-col justify-center mb-16">
            <div className="text-center ">
              <div className="flex items-center justify-center gap-6 mb-12">
                <div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
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
                  <a
                    href="#"
                    className="p-3 rounded-full transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:scale-110 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/nabil-lemriki-588550205"
                    className="p-3 rounded-full transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:nabil.lemriki@gmail.com"
                    className="p-3 rounded-full transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-110 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Gmail"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 hover:scale-110 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    aria-label="Dribbble"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Dribbble className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-8 ">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="rounded-full h-14 px-6 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 transition-colors duration-200 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  required
                  aria-label="Your name"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="rounded-full h-14 px-6 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 transition-colors duration-200 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  required
                  aria-label="Your email address"
                />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-full h-14 px-6 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 transition-colors duration-200 text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 md:col-span-2"
                  aria-label="Your phone number"
                />
              </div>
              <Textarea
                name="message"
                placeholder="Message"
                className="rounded-2xl min-h-[140px] p-6 border-2 border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 transition-colors duration-200 resize-none text-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400"
                required
                aria-label="Your message"
              />
              <Button
                type="submit"
                className="w-full rounded-full h-14 bg-gray-800 dark:bg-gray-200 hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors duration-200 group text-lg font-semibold text-white dark:text-gray-900"
              >
                Send
              </Button>
            </form>
          </section>

          {/* Footer */}
          <section
            ref={footerAnim.elementRef}
            className={`min-h-[40vh] flex flex-col justify-center text-center py-8 border-t border-gray-200 dark:border-gray-700 transition-all duration-1000 ease-out
            ${
              footerAnim.isVisible
                ? "opacity-100 blur-0 scale-100 translate-y-0"
                : "opacity-0 blur-lg scale-95 translate-y-8"
            }
          `}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Built with 💜 by Nabil using{" "}
              <span className="underline">Framer</span> & Canvas ✨
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              ©2025 Nabil Lemriki
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
