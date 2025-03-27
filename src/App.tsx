import { Outlet } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
const App = () => {
	return (
		<>
			<Analytics />
			<Outlet /> {/* This renders the current route (Home, About, etc.) */}
		</>
	)
}

export default App
