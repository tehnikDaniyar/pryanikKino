import './App.css'
import Categories from './components/Categories'
import { Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Films from './pages/Films/Films'
import Kino from './pages/Kino/Kino'

function App() {
	console.log('APP')


	return (
		<div className="wrapper">
			<Header></Header>
			<div className="content">
				<Categories></Categories>



				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='films' element={<Films></Films>}></Route>
					<Route path='films/kino' element={<Kino></Kino>}></Route>
				</Routes>

			</div>
			<img className='poster' src="./src/assets/img/poster.webp" alt="cat" />
		</div>
	)
}

export default App
