"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { StickyNote } from "./sticky-note";
import {
  Twitter,
  Linkedin,
  Dribbble,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const stickyNotes = [
  {
    id: "1",
    content: "5+\nyears\nexperience",
    color: "bg-green-200 dark:bg-green-300",
    x: -80,
    y: 40,
    rotation: -12,
    size: "small" as const,
  },
  {
    id: "2",
    content: "Based in\nMorocco",
    color: "bg-blue-200 dark:bg-blue-300",
    x: 180,
    y: 20,
    rotation: 8,
    size: "small" as const,
  },
  {
    id: "3",
    content: "Framer &\nFigma\nfriendly",
    color: "bg-pink-200 dark:bg-pink-300",
    x: -20,
    y: -90,
    rotation: -8,
    size: "small" as const,
  },
  {
    id: "4",
    content: "Multi-skilled\ndeveloper",
    color: "bg-purple-200 dark:bg-purple-300",
    x: 160,
    y: -60,
    rotation: 10,
    size: "small" as const,
  },
  {
    id: "5",
    content: "Fluent in\nEnglish,\nFrench,\nArabic",
    color: "bg-yellow-200 dark:bg-yellow-300",
    x: -90,
    y: -50,
    rotation: -15,
    size: "medium" as const,
  },
];

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

export function AboutSection() {
  const { elementRef: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { elementRef: profileRef, isVisible: profileVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.3, delay: 200 });
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 400 });
  const router = useRouter();

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 transition-all duration-1000 ease-out ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-labelledby="about-title"
    >
      <div
        className={`w-full max-w-5xl mx-auto text-center mb-8 transition-all duration-800 ease-out ${
          sectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-12 sm:w-16 h-px bg-gray-300 dark:bg-gray-600" />
          <h2
            id="about-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100"
          >
            About
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gray-300 dark:bg-gray-600" />
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 mb-8 w-full">
          {/* Left Side - Profile Image with Sticky Notes */}
          <div
            ref={profileRef}
            className={`relative flex-shrink-0 flex flex-col items-center max-w-xs w-full mx-auto lg:mx-0 transition-all duration-1000 ease-out ${
              profileVisible ? "animate-about-slide-down-blur" : "opacity-0"
            }`}
            style={{ minWidth: 220 }}
          >
            <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] mx-auto align-center">
              <Image
                src="./CEO1.jpg?height=200&width=200&format=webp&quality=80&cache=true"
                alt="Nabil Lemriki - Fullstack Developer"
                width={200}
                height={200}
                className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-xl border-4 border-white dark:border-gray-800"
                priority
              />
              {/* Sketched arrow pointing to photo */}
              <div className="absolute -top-8 -right-10 sm:-right-12 transform rotate-12 pointer-events-none">
                <svg
                  width="60"
                  height="40"
                  viewBox="0 0 60 40"
                  className="text-gray-600 dark:text-gray-400"
                >
                  <path
                    d="M10 30 Q30 10 50 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="2,2"
                  />
                  <path
                    d="M45 15 L50 20 L45 25"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-8 -right-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border-2 border-gray-100 dark:border-gray-700 ">
                <a
                  href="https://www.instagram.com/nabil_xdream/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 "
                >
                  @nabil_xdream⁀➷
                </a>
              </div>
              {/* Sticky Notes around profile */}
              <div className="absolute inset-0 pointer-events-none">
                {stickyNotes.map((note) => (
                  <StickyNote key={note.id} {...note} />
                ))}
              </div>
            </div>
          </div>
          {/* Right Side - Links, Skills, Experience */}
          <div
            ref={contentRef}
            className={`flex-1 text-left lg:pl-8 w-full max-w-xl mx-auto lg:mx-0 transition-all duration-700 ease-out ${
              contentVisible ? "animate-about-fade-down-blur" : "opacity-0"
            }`}
          >
            {/* Social Links */}
            <div
              className={`mb-5 transition-all duration-700 ease-out ${
                contentVisible ? "animate-about-fade-down-blur" : "opacity-0"
              }`}
              style={{ transitionDelay: "0ms" }}
            >
              <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
                Links
              </h3>
              <div className="flex gap-4 justify-center lg:justify-start">
                {[
                  {
                    Icon: Twitter,
                    href: "#",
                    label: "Twitter",
                    color: "hover:text-blue-500",
                  },
                  {
                    Icon: Linkedin,
                    href: "#",
                    label: "LinkedIn",
                    color: "hover:text-blue-600",
                  },
                  {
                    Icon: Dribbble,
                    href: "#",
                    label: "Dribbble",
                    color: "hover:text-pink-500",
                  },
                  {
                    Icon: Instagram,
                    href: "#",
                    label: "Instagram",
                    color: "hover:text-purple-500",
                  },
                ].map(({ Icon, href, label, color }, idx) => (
                  <a
                    key={label}
                    href={href}
                    className={`p-2 rounded-full transition-colors duration-200 text-gray-600 dark:text-gray-400 ${color} hover:scale-110`}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div
              className={`mb-8 transition-all duration-700 ease-out ${
                contentVisible ? "animate-about-fade-down-blur" : "opacity-0"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.slice(0, 6).map((skill, idx) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-sm border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 animate-about-fade-down-blur"
                    style={{ animationDelay: `${180 + idx * 60}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Experience Preview */}
            <div
              className={`transition-all duration-700 ease-out ${
                contentVisible ? "animate-about-fade-down-blur" : "opacity-0"
              }`}
              style={{ transitionDelay: "320ms" }}
            >
              <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
                Experience
              </h3>
              <div className="space-y-3 max-w-xl mx-auto lg:mx-0">
                <div
                  className="animate-about-fade-down-blur"
                  style={{ animationDelay: "400ms" }}
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    Uranus Media
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fullstack Developer + SEO • 2021 - Current
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Leading web development and SEO strategies
                  </p>
                </div>
                <div
                  className="animate-about-fade-down-blur"
                  style={{ animationDelay: "480ms" }}
                >
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    Marsa Maroc
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    System Developer • 2019 - 2021
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Developed membership management systems
                  </p>
                </div>
              </div>

              <div
                className="mt-4 animate-about-fade-down-blur flex justify-center lg:justify-start"
                style={{ animationDelay: "600ms" }}
              >
                <Button
                  className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 border border-gray-900 dark:border-white hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 animate-border-wave"
                  onClick={() => router.push("/about")}
                >
                  About Me
                  <ArrowRight className="ml-2 w-4 h-4 animate-slide-right" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mb-4 px-4 sm:px-0">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            5+ years of experience building smart, scalable websites, with a
            love for SEO, UX/UI, and crafting custom tools for clients.
          </p>
        </div>
      </div>
    </section>
  );
}

/*
Add this to your global CSS (e.g., styles/globals.css) if not already present:

@keyframes borderWave {
  0% {
    border-radius: 1.5rem 0.5rem 1.5rem 0.5rem;
  }
  25% {
    border-radius: 0.5rem 1.5rem 0.5rem 1.5rem;
  }
  50% {
    border-radius: 1.5rem 1.5rem 0.5rem 0.5rem;
  }
  75% {
    border-radius: 0.5rem 0.5rem 1.5rem 1.5rem;
  }
  100% {
    border-radius: 1.5rem 0.5rem 1.5rem 0.5rem;
  }
}

.animate-border-wave {
  animation: borderWave 2s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
*/
