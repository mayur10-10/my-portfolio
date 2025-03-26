/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImMail } from 'react-icons/im'
import { QUIET_NODE_LINKEDIN_LINK, QUIET_NODE_EMAIL_LINK } from '../utils/constants'
import { AiFillLinkedin } from 'react-icons/ai'

const Intro = () => {
	return (
		<section className="overflow-hidden scrollbar-hidden" id="intro">
			{/* container */}
			<div className="h-full flex flex-col items-center justify-around relative">
				{/* headers */}
				<div
					className="flex flex-col text-center 
					mt-16
	                sm:mt-20
    	            md:mt-28
                    gap-6
                    sm:gap-12"
				>
					{/* Greetings */}
					<div className="drop-shadow-xl">
						<h1
							className="text-primary font-extrabold flex gap-1 justify-center
                    text-3xl
                    sm:text-4xl"
						>
							Hi,
							<span className="cursor-pointer select-none">👋</span> It&apos;s Mayur{' '}
						</h1>
					</div>

					{/* Description */}
					<div
						className="text-lg sm:text-xl font-bold drop-shadow-xl
						mb-6
						sm:mb-8
						md:mb-10
					"
					>
						<div>Senior Frontend Engineer.</div>
						<div>3.5+ Years Experience in Next.js, React.js, Redux</div>
						<div>Scalable Web & Hybrid Apps | Performance Optimization</div>
					</div>
				</div>
				<a href="Mayur's_Resume.pdf" download="Mayur's_Resume.pdf">
					<button className="mb-6 sm:mb-8 md:mb-10 px-6 py-3 bg-[#333] text-[#b3b3b3] font-semibold text-md md:text-lg rounded-lg shadow-md hover:bg-[#444] hover:text-white hover:shadow-lg transition-all duration-300 ease-in-out flex items-center gap-2 border border-[#555]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4v12m0 0l-3-3m3 3l3-3m-3 3V4M4 20h16"
							/>
						</svg>
						Download Resume
					</button>
				</a>
				<div className="flex flex-col">
					{/* Social Medias */}
					<div className="text-5xl flex flex-wrap justify-center gap-9 xxsm:gap-12 sm:gap-16 lg:gap-20 py-3 text-teal-600">
						<a
							href={QUIET_NODE_LINKEDIN_LINK as string}
							target="_blank"
							className="cursor-pointer hover:text-[#0A66C2]"
							title="LinkedIn"
						>
							<AiFillLinkedin />
						</a>
						{/* <a
							href={QUIET_NODE_GITHUB_LINK}
							target="_blank"
							className="cursor-pointer hover:text-black"
							title="GitHub"
						>
							<AiFillGithub />
						</a> */}

						<a
							href={QUIET_NODE_EMAIL_LINK}
							target="_blank"
							className="cursor-pointer hover:text-red-600 flex items-center"
							title="Gmail"
						>
							<ImMail size={40} />
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Intro
