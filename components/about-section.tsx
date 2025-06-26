"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { StickyNote } from "./sticky-note"
import { Twitter, Linkedin, Dribbble, Instagram } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

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
]

const skills = [
	"Web Development",
	"UX/UI",
	"SEO",
	"CMS (WordPress)",
	"Fullstack (Laravel, Django, ASP.NET)",
]

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

export function AboutSection() {
	const {
		elementRef: sectionRef,
		isVisible: sectionVisible,
	} = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
	const {
		elementRef: profileRef,
		isVisible: profileVisible,
	} = useScrollAnimation<HTMLDivElement>({ threshold: 0.3, delay: 200 })
	const {
		elementRef: contentRef,
		isVisible: contentVisible,
	} = useScrollAnimation<HTMLDivElement>({ threshold: 0.2, delay: 400 })

	return (
		<section
			id="about"
			ref={sectionRef}
			className={`min-h-screen flex flex-col justify-center py-20 transition-all duration-1000 ease-out ${
				sectionVisible ? "opacity-100" : "opacity-0"
			}`}
			aria-labelledby="about-title"
		>
			<div
				className={`text-center mb-16 transition-all duration-800 ease-out ${
					sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				}`}
			>
				<div className="flex items-center justify-center gap-6 mb-12">
					<div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
					<h2
						id="about-title"
						className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100"
					>
						About
					</h2>
					<div className="w-16 h-px bg-gray-300 dark:bg-gray-600" />
				</div>

				{/* Profile Section - Left Aligned */}
				<div
					className={`flex flex-col lg:flex-row items-start gap-12 mb-16 transition-all duration-1000 ease-out ${
						profileVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
					}`}
				>
					{/* Left Side - Profile Image with Sticky Notes */}
					<div ref={profileRef} className="relative flex-shrink-0 mx-auto ">
						<div className="relative">
							<Image
								src="/placeholder.svg?height=200&width=200"
								alt="Nabil Lemriki - Fullstack Developer"
								width={200}
								height={200}
								className="rounded-full grayscale hover:grayscale-0 transition-all duration-500 shadow-xl border-4 border-white dark:border-gray-800"
								priority
							/>

							{/* Sketched arrow pointing to photo */}
							<div className="absolute -top-8 -right-12 transform rotate-12">
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

							<div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg border-2 border-gray-100 dark:border-gray-700">
								<span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
									@nabil_lemriki
								</span>
							</div>
						</div>

						{/* Sticky Notes around profile */}
						{stickyNotes.map((note) => (
							<StickyNote key={note.id} {...note} />
						))}
					</div>

					{/* Right Side - Links, Skills, Experience */}
					<div
						ref={contentRef}
						className={`flex-1 text-left lg:pl-8 transition-all duration-1000 delay-200 ease-out ${
							contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
						}`}
					>
						{/* Social Links */}
						<div className="mb-5">
							<h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
								Links
							</h3>
							<div className="flex gap-4">
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
								].map(({ Icon, href, label, color }) => (
									<a
										key={label}
										href={href}
										className={`p-2 rounded-full transition-colors duration-200 text-gray-600 dark:text-gray-400 ${color} hover:scale-110`}
										aria-label={label}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Icon className="w-5 h-5" />
									</a>
								))}
							</div>
						</div>

						{/* Skills */}
						<div className="mb-8">
							<h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
								Skills
							</h3>
							<div className="flex flex-wrap gap-2">
								{skills
									.slice(0, 6)
									.map((skill) => (
										<Badge
											key={skill}
											variant="outline"
											className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-sm border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
										>
											{skill}
										</Badge>
									))}
							</div>
						</div>

						{/* Experience Preview */}
						<div>
							<h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-100">
								Experience
							</h3>
							<div className="space-y-3">
								<div>
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
								<div>
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

							<div className="mt-4">
								<button className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 flex items-center gap-1">
									📄 Download Resume
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Intro Text */}
				<div className="max-w-2xl mx-auto mb-12">
					<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
						5+ years of experience building smart, scalable websites, with a love for
						SEO, UX/UI, and crafting custom tools for clients.
					</p>
				</div>
			</div>
		</section>
	)
}
