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
      className={`relative flex-1 flex flex-col justify-center items-center min-h-screen py-20 transition-all duration-700 ease-out ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center gap-12 z-10">
        {/* Heading */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100 tracking-tight"
          >
            Services
          </h2>
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
        </div>

        {/* Service Grid */}
        <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const { elementRef, isVisible } =
              useScrollAnimation<HTMLDivElement>({
                threshold: 0.2,
                delay: i * 70,
                triggerOnce: false,
              });
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                ref={elementRef}
                className={`group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 flex flex-col justify-start items-center text-center transition-all duration-700 ease-out hover:scale-[1.05] hover:shadow-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 70 + 100}ms` }}
              >
                {/* Icon container with 3D and color swap effect */}
                <span
                  className={`
                    mb-4 mt-1 rounded-full
                    bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700
                    p-4 flex items-center justify-center
                    shadow-inner
                    transition-all duration-300
                    group-hover:from-black group-hover:to-black
                    dark:group-hover:from-gray-100 dark:group-hover:to-white
                  `}
                >
                  <Icon
                    className={`
                      w-8 h-8
                      text-gray-700 dark:text-gray-200
                      transition-all duration-300
                      group-hover:text-gray-100 dark:group-hover:text-gray-900
                      drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]
                      group-hover:drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]
                      group-hover:rotate-[8deg]
                    `}
                  />
                </span>
                <h3 className="font-semibold text-base md:text-lg mb-2 text-gray-900 dark:text-gray-100 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
export default ServicesSection;
