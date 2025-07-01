"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Code,
  PencilRuler,
  Wrench,
  Database,
  LineChart,
  Palette,
  Laptop,
  Wand2,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Development",
    desc: "Get a fast, modern website that works on all devices, built from scratch or with CMS tools.",
    emoji: "🖥️",
  },
  {
    icon: PencilRuler,
    title: "UI/UX Design",
    desc: "Impress users with smooth, beautiful layouts that are easy to use and feel just right.",
    emoji: "🎨",
  },
  {
    icon: Wrench,
    title: "Custom Web Solutions",
    desc: "Develop fully custom features or CMS from scratch using Django, JS, and responsive front-end code.",
    emoji: "🔧",
  },
  {
    icon: Database,
    title: "Database",
    desc: "Build fast, reliable databases and connect them to your website with seamless integration.",
    emoji: "🗃️",
  },
  {
    icon: LineChart,
    title: "SEO Optimization",
    desc: "Rank higher on Google, attract real traffic, and grow your business with smart SEO methods.",
    emoji: "📈",
  },
  {
    icon: Palette,
    title: "Logo & Brand Design",
    desc: "Make your brand unforgettable with a custom logo and visuals that stand out professionally.",
    emoji: "🧩",
  },
  {
    icon: Laptop,
    title: "Custom Software",
    desc: "Automate tasks and improve your workflow with tools tailored to your exact business needs.",
    emoji: "💻",
  },
  {
    icon: Wand2,
    title: "Photoshop & Editing",
    desc: "Edit and enhance images with pro-level retouching, effects, and creative visual work.",
    emoji: "🖌️",
  },
];

export function ServicesSection() {
  const { elementRef: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`flex-1 flex flex-col justify-center items-center min-h-screen py-16 overflow-x-hidden transition-all duration-700 ease-out ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center gap-8">
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100"
          >
            My Services
          </h2>
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
        </div>
        <div className="grid w-full gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center ">
          {services.map((service, i) => {
            const { elementRef, isVisible } =
              useScrollAnimation<HTMLDivElement>({
                threshold: 0.2,
                delay: i * 50, // Faster stagger
                triggerOnce: false, // Animate on scroll up/down
              });
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={elementRef}
                className={`group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md flex flex-col justify-center items-center text-center transition-all duration-700 ease-out hover:shadow-lg aspect-square w-full h-full ${
                  isVisible
                    ? "opacity-100 blur-0 scale-100 translate-y-0"
                    : "opacity-0 blur-lg scale-95 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 50 + 100}ms` }}
              >
                <span className="mb-3 mt-1 rounded-full bg-gray-100 dark:bg-gray-800 p-3 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-gray-800 dark:text-gray-100" />
                </span>
                <h3 className="font-semibold text-xs md:text-sm mb-1 text-gray-900 dark:text-gray-100 tracking-tight truncate w-full">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-[10px] md:text-xs leading-tight w-full">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
