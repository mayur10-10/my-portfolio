import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineClose } from 'react-icons/md'
import ContactButton from './contact'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const paths = [
		// { text: 'Projects', route: '/projects' },
		{ text: 'Skills', route: '/#skills', offset: 30 },
		{ text: 'Experience', route: '/#experience', offset: 70 },
	]

	const location = useLocation()

	useEffect(() => {
		if (location.hash) {
			const element = document.getElementById(location.hash.substring(1)) // Remove `#`
			if (element) {
				const elementPosition = element.getBoundingClientRect().top + window.scrollY
				const offset = paths.find((o) =>
					location.hash.toLowerCase().includes(o.text.toLowerCase())
				)?.offset
				window.scrollTo({
					top: elementPosition - (offset || 30),
					behavior: 'smooth',
				})
			}
		}
	}, [location])

	return (
		<nav className="bg-[#242424] text-[#b3b3b3] shadow-sm shadow-black/30 sticky top-0 z-50">
			<div className="container mx-auto flex justify-between items-center px-6 sm:px-8 md:px-30 py-4">
				<Link
					to="/"
					className="text-xl sm:text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 animate-pulse duration-[4000ms] !text-[#b3b3b3]"
				>
					Mayur Shrivastava
				</Link>

				<ul className="hidden md:flex space-x-6 text-md md:text-lg">
					{paths.map((item) => (
						<li key={item.text}>
							<Link to={`${item.route}`} className="!text-[#b3b3b3]  transition-all">
								{item.text}
							</Link>
						</li>
					))}
					<li>
						<ContactButton>
							<div className="!text-[#b3b3b3]  transition-all cursor-pointer">Contact</div>
						</ContactButton>
					</li>
				</ul>

				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden focus:outline-none cursor-pointer"
				>
					{isOpen ? <MdOutlineClose size={20} /> : <RxHamburgerMenu size={20} />}
				</button>
			</div>

			{isOpen && (
				<div className="md:hidden bg-[#242424] py-4">
					<ul className="flex flex-col text-center space-y-4 text-lg">
						{paths.map((item) => (
							<li key={item.text}>
								<Link
									to={item.route}
									className="block py-2 hover:text-white !text-[#b3b3b3]"
									onClick={() => setIsOpen(false)}
								>
									{item.text}
								</Link>
							</li>
						))}
						<li>
							<ContactButton>
								<div className="!text-[#b3b3b3]  transition-all cursor-pointer">Contact</div>
							</ContactButton>
						</li>
					</ul>
				</div>
			)}
		</nav>
	)
}

export default Navbar
