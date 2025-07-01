"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Sparkles,
  User,
  Mail,
  Search,
  Sun,
  Moon,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import { SearchDialog } from "@/components/search-dialog";
import { useActiveSection } from "@/hooks/use-active-section";
import { smoothScrollTo } from "@/utils/smooth-scroll";

const navItems = [
  { href: "/", icon: Home, label: "Home", sectionId: "hero" },
  {
    href: "/#services",
    icon: Wrench,
    label: "Services",
    sectionId: "services",
  },
  { href: "/about", icon: User, label: "About", sectionId: "about" },
  {
    href: "/projects",
    icon: Sparkles,
    label: "Projects",
    sectionId: "projects",
  },
  { href: "/contact", icon: Mail, label: "Contact", sectionId: "contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const activeSection = useActiveSection([
    "hero",
    "services",
    "about",
    "experience",
    "projects",
    "contact",
  ]);

  const handleSectionClick = (
    sectionId: string,
    e: React.MouseEvent,
    href: string
  ) => {
    if (sectionId === "hero" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (sectionId === "services" && pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("services");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If not on home, let Link handle navigation to home/#services
  };

  const isActive = (href: string, sectionId: string) => {
    if (pathname !== "/") return pathname === href;
    return activeSection === sectionId;
  };

  return (
    <>
      {/* Desktop (left) nav */}
      <nav
        className="hidden lg:block fixed top-1/2 left-4 transform -translate-y-1/2 z-[100] bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full py-4 px-2 shadow-lg border border-gray-200 dark:border-gray-700"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex flex-col items-center gap-3">
          {navItems.map(({ href, icon: Icon, label, sectionId }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleSectionClick(sectionId, e, href)}
              className={cn(
                "p-3 rounded-full transition-all duration-200 group relative",
                "hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600",
                isActive(href, sectionId)
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 scale-110"
                  : "text-gray-600 dark:text-gray-400"
              )}
              aria-label={label}
              title={label}
            >
              <Icon className="w-4 h-4" />
              <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {label}
              </span>
            </Link>
          ))}

          <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-1" />

          <button
            onClick={() => setSearchOpen(true)}
            className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 text-gray-600 dark:text-gray-400 group relative focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-label="Search projects"
            title="Search projects"
          >
            <Search className="w-4 h-4" />
            <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Search
            </span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 text-gray-600 dark:text-gray-400 group relative focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
            <span className="absolute left-full ml-3 px-2 py-1 bg-gray-800 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {theme === "light" ? "Dark mode" : "Light mode"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet (bottom) nav */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-t flex justify-around items-center py-2 px-1"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {navItems.map(({ href, icon: Icon, label, sectionId }) => (
          <Link
            key={href}
            href={href}
            onClick={(e) => handleSectionClick(sectionId, e, href)}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-full transition-all duration-200 group relative text-xs",
              "hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600",
              isActive(href, sectionId)
                ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                : "text-gray-600 dark:text-gray-400"
            )}
            aria-label={label}
            title={label}
          >
            <Icon className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] leading-none">{label}</span>
          </Link>
        ))}
        <button
          onClick={() => setSearchOpen(true)}
          className="flex flex-col items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 text-gray-600 dark:text-gray-400 group relative focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 text-xs"
          aria-label="Search projects"
          title="Search projects"
        >
          <Search className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-none">Search</span>
        </button>
        <button
          onClick={toggleTheme}
          className="flex flex-col items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 text-gray-600 dark:text-gray-400 group relative focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 text-xs"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <Moon className="w-5 h-5 mb-0.5" />
          ) : (
            <Sun className="w-5 h-5 mb-0.5" />
          )}
          <span className="text-[10px] leading-none">
            {theme === "light" ? "Dark" : "Light"}
          </span>
        </button>
      </nav>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
