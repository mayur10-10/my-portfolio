import React, { useEffect, useState, useRef } from 'react'
import { FaReact, FaAws, FaDocker } from 'react-icons/fa'
import {
	SiRedux,
	SiNextdotjs,
	SiFirebase,
	SiTailwindcss,
	SiJavascript,
	SiTypescript,
	SiMui,
} from 'react-icons/si'

const skills = [
	{ name: 'React.js', icon: <FaReact className="text-blue-400" />, link: 'https://react.dev/' },
	{
		name: 'Next.js',
		icon: <SiNextdotjs className="text-white" />,
		link: 'https://nextjs.org/docs',
	},
	{
		name: 'JavaScript',
		icon: <SiJavascript className="text-yellow-400" />,
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	},
	{
		name: 'TypeScript',
		icon: <SiTypescript className="text-blue-500" />,
		link: 'https://www.typescriptlang.org/docs/',
	},
	{ name: 'Redux', icon: <SiRedux className="text-purple-500" />, link: 'https://redux.js.org/' },
	{
		name: 'Tailwind CSS',
		icon: <SiTailwindcss className="text-teal-400" />,
		link: 'https://tailwindcss.com/docs',
	},
	{
		name: 'Material-UI',
		icon: <SiMui className="text-blue-300" />,
		link: 'https://mui.com/material-ui/getting-started/overview/',
	},
	{
		name: 'AWS',
		icon: <FaAws className="text-orange-500" />,
		link: 'https://aws.amazon.com/documentation/',
	},
	{
		name: 'Firebase',
		icon: <SiFirebase className="text-yellow-500" />,
		link: 'https://firebase.google.com/docs',
	},
	{
		name: 'Docker',
		icon: <FaDocker className="text-blue-400" />,
		link: 'https://docs.docker.com/',
	},
	// {
	// 	name: 'Mobile Development',
	// 	icon: <FaMobileAlt className="text-pink-400" />,
	// 	link: 'https://developer.android.com/',
	// },
]

const Skills = () => {
	const [visible, setVisible] = useState(false)
	const sectionRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setVisible(entry.isIntersecting)
			},
			{ threshold: 0.3 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	return (
		<section ref={sectionRef} id="skills" className="bg-[#242424] text-white py-16 px-6">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold mb-10">Skills & Technologies</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
					{skills.map((skill, index) => (
						<a
							key={index}
							href={skill.link}
							target="_blank"
							rel="noopener noreferrer"
							className={`bg-gray-800 p-6 rounded-xl shadow-lg shadow-black/50 flex flex-col items-center justify-center transform transition-all duration-700 ease-out hover:scale-105 ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8'}`}
							style={{ transitionDelay: visible ? `${index * 100}ms` : '0ms' }}
						>
							<div className="text-5xl mb-3">{skill.icon}</div>
							<p className="text-lg font-semibold">{skill.name}</p>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills
