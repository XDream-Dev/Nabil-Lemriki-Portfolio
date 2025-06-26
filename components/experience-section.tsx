import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
	{
		id: "uranus-media",
		company: "Uranus Media",
		role: "Fullstack Developer + SEO",
		period: "2021–2023",
		description:
			"Built e-commerce sites (beauty-secrets.ma, urabuy.ma). SEO strategies → 1st-page Google rankings (hajir.ma, ijob.ma). UX/UI for landing pages and logos.",
		achievements: [
			"Built e-commerce sites (beauty-secrets.ma, urabuy.ma)",
			"SEO strategies → 1st-page Google rankings (hajir.ma, ijob.ma)",
			"UX/UI for landing pages and logos",
		],
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
		achievements: [
			"Designed membership management system",
			"Developed CRUD logic and custom reports",
			"Stack: ASP.NET, SQL Server",
		],
		logo: "M",
		color: "bg-green-500",
	},
	{
		id: "final-project",
		company: "Final Year Project",
		role: "Full-Stack Developer",
		period: "2020",
		description:
			"Designed internal platform for employee/employer data. UX/UI, authentication, subscriptions, reporting.",
		achievements: [
			"Designed internal platform for employee/employer data",
			"UX/UI, authentication, subscriptions, reporting",
		],
		logo: "P",
		color: "bg-purple-500",
	},
]

export function ExperienceSection() {
	const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 })
	const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })
	const cardsAnimation = experiences.map((_, index) =>
		useScrollAnimation<HTMLDivElement>({
			threshold: 0.2,
			delay: index * 150,
		}),
	)

	return (
		<section
			id="experience"
			ref={sectionRef}
			className={`py-20 transition-all duration-1000 ease-out ${
				sectionVisible ? "opacity-100" : "opacity-0"
			}`}
			aria-labelledby="experience-title"
		>
			<div
				ref={titleRef}
				className={`flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-0 transition-all duration-800 ease-out ${
					titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
				}`}
			>
				<h2
					id="experience-title"
					className="text-2xl xs:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100"
				>
					Experience
				</h2>
				<Button
					variant="outline"
					size="lg"
					className="hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group border-2 rounded-full px-6 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
					aria-label="Download resume PDF"
				>
					<Download className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform duration-200" />
					Download Résumé
				</Button>
			</div>

			<div className="space-y-12 sm:space-y-8">
				{experiences.map((exp, index) => {
					const { elementRef: cardRef, isVisible: cardVisible } = cardsAnimation[index]

					return (
						<div
							key={exp.id}
							ref={cardRef}
							className={`relative flex flex-col sm:block transition-all duration-800 ease-out ${
								cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
							}`}
						>
							{/* Timeline line */}
							{index < experiences.length - 1 && (
								<div className="hidden sm:block absolute left-6 top-20 w-0.5 h-16 bg-gray-200 dark:bg-gray-700" />
							)}
							{/* Mobile timeline line */}
							{index < experiences.length - 1 && (
								<div className="block sm:hidden absolute left-1/2 -translate-x-1/2 top-16 w-0.5 h-12 bg-gray-200 dark:bg-gray-700 z-0" />
							)}

							{/* Timeline bullet */}
							<div className="hidden sm:block absolute left-4 top-8 w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />
							{/* Mobile timeline bullet */}
							<div className="block sm:hidden absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />

							<Card className="relative ml-0 sm:ml-16 mt-10 sm:mt-0 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 bg-white dark:bg-gray-800">
								<CardContent className="p-4 xs:p-6 sm:p-8 ">
									<div className="flex flex-col xs:flex-row items-start xs:items-start gap-4 xs:gap-6">
										<div
											className={`w-12 h-12 xs:w-14 xs:h-14 ${exp.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
										>
											<span className="text-white font-bold text-lg xs:text-xl">
												{exp.logo}
											</span>
										</div>
										<div className="flex-1 min-w-0 text-start xs:text-left">
											<h3 className="font-bold text-lg xs:text-xl text-gray-800 dark:text-gray-100 mb-1 xs:mb-2">
												{exp.company}
											</h3>
											<p className="text-gray-600 dark:text-gray-300 mb-2 xs:mb-3 font-semibold text-base xs:text-lg">
												{exp.role} • {exp.period}
											</p>
											<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3 xs:mb-4 text-sm xs:text-base">
												{exp.description}
											</p>

											{/* Achievement bullets */}
											<ul className="space-y-1 xs:space-y-2">
												{exp.achievements.map((achievement, i) => (
													<li
														key={i}
														className="flex items-start gap-2 xs:gap-3 text-gray-600 dark:text-gray-400 text-sm xs:text-base"
													>
														<span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-1.5 xs:mt-2 flex-shrink-0" />
														<span>{achievement}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					)
				})}
			</div>
		</section>
	)
}
