import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef } from "react";

// Copy the projects array from app/projects/page.tsx
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
    demoUrl: "#",
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

// Add seamless loop animation CSS
const seamlessLoopStyles = `
  .projects-loop-container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }
  .projects-loop-track {
    display: flex;
    gap: 2rem;
    width: max-content;
    animation: projects-loop 30s linear infinite;
  }
  @keyframes projects-loop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .projects-fade-left {
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to right, var(--fade-bg, #fff), transparent 80%);
    z-index: 2;
  }
  .projects-fade-right {
    position: absolute;
    right: 0;
    top: 0;
    width: 48px;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to left, var(--fade-bg, #fff), transparent 80%);
    z-index: 2;
  }
`;

export function ProjectsSection() {
  const { elementRef: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });
  const { elementRef: titleRef, isVisible: titleVisible } =
    useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  useEffect(() => {
    // Set fade overlay color based on theme
    const setFadeBg = () => {
      const root = document.documentElement;
      const isDark = root.classList.contains("dark");
      root.style.setProperty("--fade-bg", isDark ? "#111827" : "#fff");
    };
    setFadeBg();
    const observer = new MutationObserver(setFadeBg);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Duplicate projects for seamless loop
  const loopProjects = projects.concat(projects);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-20 transition-all duration-1000 ease-out ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-labelledby="projects-title"
    >
      <style>{seamlessLoopStyles}</style>
      <div
        ref={titleRef}
        className={`text-center mb-16 transition-all duration-800 ease-out ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
          <h2
            id="projects-title"
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100"
          >
            Projects
          </h2>
          <div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
        </div>
      </div>

      {/* Seamless infinite loop animation */}
      <div className="projects-loop-container mb-16 min-h-[380px] md:min-h-[420px]">
        <div className="projects-fade-left" />
        <div className="projects-fade-right" />
        <div className="projects-loop-track">
          {loopProjects.map((project, index) => (
            <Link
              key={project.id + "-" + index}
              href={`/projects#${project.id}`}
              className="min-w-[340px] max-w-xs md:min-w-[400px] md:max-w-sm focus:outline-none"
              tabIndex={0}
            >
              <Card
                className={`overflow-hidden hover:shadow-xl transition-all duration-500 group border-2 border-gray-200 dark:border-gray-700 p-6 
    bg-gray-900 dark:bg-white text-white dark:text-gray-900
    cursor-pointer min-h-[340px] md:min-h-[380px] flex flex-col justify-between`}
              >
                <div className="flex flex-col gap-6 flex-1">
                  <div className="relative overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} project preview`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge
                      className={`absolute bottom-3 left-3 ${project.tagColor} shadow-lg font-semibold px-3 py-1`}
                    >
                      {project.tag}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-4 text-inherit">
                      {project.title}
                    </h3>
                    <p className="leading-relaxed text-lg mb-4 text-inherit">
                      {project.description}
                    </p>
                    <p className="text-sm opacity-80 text-inherit">
                      Step into the journey of a unique project. Here, I unravel
                      the threads of my thought process and exciting steps taken
                      from inception to execution.
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center relative">
        <Link href="/projects">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group border-2 rounded-full px-8 py-3 text-lg font-semibold relative text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
