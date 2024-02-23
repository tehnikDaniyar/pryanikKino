import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Start from './pages/Start/Start'
import Films from './pages/Films/Films'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Kino from './pages/Kino/Kino'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useSelector } from 'react-redux'
import OflinePage from './pages/OfLine/OflinePage'

function App() {
	console.log('APP');
	const isOnline = useSelector(store => store.states.isOnline);

	const routes = () => {
		if (isOnline) {
			return [
				{
					element: <MainPage></MainPage>,
					children: [
						{ path: '/', element: <Start></Start> },
						{ path: '/films/:id', element: <Films></Films> },
						{ path: '/films/collections/:collection', element: <Films></Films> },
						{ path: '/kino/:id', element: <Kino></Kino> },
						{ path: '/search_results/:searchQuery', element: <Films></Films> },
						{ path: '*', element: <ErrorPage></ErrorPage> }
					],
					errorElement: <ErrorPage></ErrorPage>
				}
			]
		} else {
			return [{ element: <MainPage />, children: [{ path: '*', element: <OflinePage /> }] }]
		}
	}

	const router = createBrowserRouter(
		routes()
	)


	return (
		<RouterProvider router={router}>
		</RouterProvider>
	)
}

export default App
