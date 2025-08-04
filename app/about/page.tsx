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
                  src="./CEO1.jpg?height=200&width=350&quality=80&format=webp&blur=10&fit=cover&crop=faces"
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
