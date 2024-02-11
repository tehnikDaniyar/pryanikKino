import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Start from './pages/Start/Start'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
	console.log('APP')

	const router = createBrowserRouter([
		{
			element: <MainPage></MainPage>,
			children: [
				{ path: '/', element: <Start></Start> }
			]
		}
	])


	return (
		<RouterProvider router={router}>
		</RouterProvider>
	)
}

export default App
