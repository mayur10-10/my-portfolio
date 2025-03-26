const About = () => {
	return (
		<section
			className="overflow-hidden scrollbar-hidden bg-primary
                "
		>
			{/* container */}
			<div
				className="flex flex-col items-center text-white
                mt-6
                sm:mt-9
                md:mt-12
                2xl:max-w-[100rem] 2xl:mx-auto"
			>
				{/* header */}
				<div>
					<h2 className="text-3xl sm:text-4xl font-extrabold">About</h2>
				</div>

				{/* body */}
				<div
					className="font-semibold text-center
                 mt-6 text-lg
                md:mt-12 md:text-xl
				px-6 md:px-0
                "
				>
					{/* first sentence */}
					<p className="leading-relaxed max-w-3xl">
						Hi, I'm <span className="text-blue-400 font-semibold">Mayur</span>, a passionate
						frontend developer with a keen eye for building{' '}
						<em>scalable, high-performance React applications</em>. With expertise in{' '}
						<em>React, Next.js, and Redux</em>, I craft sleek, accessible, and intuitive user
						experiences.
					</p>
					<p className="leading-relaxed max-w-3xl mt-4">
						I love optimizing <em>frontend architectures</em>, ensuring <em>maintainability</em>,
						and implementing{' '}
						<em>
							performance optimizations, scalable UI components, and state management best practices
						</em>
						. Currently, I'm exploring <em>React Native</em> and <em>Tailwind CSS</em> to broaden my
						skill set.
					</p>
					<p className="leading-relaxed max-w-3xl mt-4">
						When I'm not coding, I enjoy <em>watching football</em> and{' '}
						<em>exploring new cuisines</em>. I’m always curious about{' '}
						<em>great UI/UX experiences</em> and love refining my craft in{' '}
						<em>frontend development</em>. I'm actively looking for my next role where I can build{' '}
						<em>high-quality, scalable applications</em> with <em>React</em>.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
