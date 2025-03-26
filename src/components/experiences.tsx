import { useEffect, useState } from 'react'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const experiences = [
	{
		role: 'Senior Frontend Engineer',
		company: 'Railofy',
		duration: 'October 2021 - March 2025',
		location: 'Remote',
		points: [
			'Architected scalable applications and enforced frontend development standards.',
			'Developed high-performance Next.js & React.js apps, reducing load times by 50%.',
			'Built & optimized CRM and supply chain apps, improving workflow efficiency by 30%.',
			'Designed & implemented hybrid mobile apps using Cordova, reaching 10,000+ downloads.',
			'Integrated third-party services like PhonePe Switch, IRCTC, AWS Cognito, and Firebase.',
			'Dockerized & deployed web applications using AWS ECS.',
			'Mentored front-end engineers in React.js, responsive design, and coding best practices.',
			'Led the migration of legacy systems to modern frontend frameworks, enhancing scalability.',
			'Collaborated with backend engineers to create seamless API integrations.',
			'Implemented internationalization (i18n) strategies for multi-language support.',
		],
	},
	{
		role: 'Frontend Developer Intern',
		company: 'Railofy',
		duration: 'April 2021 - September 2021',
		location: 'Remote',
		points: [
			'Optimized code, reducing system downtime and improving user satisfaction.',
			'Enhanced Core Web Vitals, reducing page load times by 40%.',
		],
	},
	{
		role: 'React Developer Intern',
		company: 'Ostabay',
		duration: 'July 2020 - December 2020',
		location: 'Bangalore, India',
		points: [
			'Designed & implemented custom UI components and forms in React.js.',
			'Created reusable UI components used across multiple projects, improving efficiency.',
		],
	},
]

const Experience = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const section = document.getElementById('experience')
			if (section) {
				const top = section.getBoundingClientRect().top
				if (top < window.innerHeight * 0.75) {
					setIsVisible(true)
				}
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<section id="experience" className="bg-[#242424] text-white">
			<div className="container mx-auto px-6">
				<h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
				<div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className={`bg-[#2d2d2d] p-6 rounded-lg shadow-md border border-gray-700 transition-all transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'} duration-700`}
						>
							<div className="flex items-center justify-between">
								<h3 className="text-lg md:text-2xl font-semibold flex items-center gap-2">
									<FaBriefcase className="text-blue-400" />
									<em>{exp.role}</em> - <span className="text-blue-300">{exp.company}</span>
								</h3>
							</div>
							<div className="flex items-center gap-4 text-gray-400 mt-2">
								<div className="flex items-center gap-1">
									<FaCalendarAlt /> {exp.duration}
								</div>
								<div className="flex items-center gap-1">
									<FaMapMarkerAlt /> {exp.location}
								</div>
							</div>
							<ul className="list-disc list-inside mt-4 space-y-2 text-gray-300">
								{exp.points.map((point, idx) => (
									<li
										key={idx}
										className="transition-opacity duration-300 opacity-80 hover:opacity-100"
									>
										<em>{point}</em>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Experience
