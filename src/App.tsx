import { Outlet } from 'react-router-dom'

const App = () => {
	return (
		<>
			<Outlet /> {/* This renders the current route (Home, About, etc.) */}
		</>
	)
}

export default App
