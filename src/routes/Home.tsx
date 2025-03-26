import Navbar from '../components/navbar.tsx'
import { About, Intro, Stats, SocialMedia, Experience } from '../components/index.ts'

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="px-4 sm:px-8 md:px-30">
				<Intro />
				<About />
				<Stats />
				<Experience />
				{/* <Projects /> */}
				<SocialMedia />
			</div>
		</>
	)
}

export default Home
