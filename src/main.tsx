import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
const Home = lazy(() => import('./routes/Home.tsx'))
const NotFound = lazy(() => import('./routes/NotFound.tsx'))

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />, // Wrap everything inside App
		children: [
			{ path: '/', element: <Home /> },
			{ path: '*', element: <NotFound /> }, // Catch-all route
		],
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
