import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Start from './pages/Start/Start'
import Films from './pages/Films/Films'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
	console.log('APP')

	const router = createBrowserRouter([
		{
			element: <MainPage></MainPage>,
			children: [
				{ path: '/', element: <Start></Start> },
				{ path: '/films/:id', element: <Films></Films> },
				{ path: '/films/collections/:collection', element: <Films></Films> },
				{ path: '*', element: <ErrorPage></ErrorPage> }
			],
			errorElement: <MainPage></MainPage>
		}
	])


	return (
		<RouterProvider router={router}>
		</RouterProvider>
	)
}

export default App
