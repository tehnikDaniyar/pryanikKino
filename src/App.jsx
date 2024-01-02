import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Films from './pages/Films'
import Film from './pages/Film'
import Content from './components/Content'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

	return (
		<>
			<header>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/films">Films</Link>
					<Link to="/film">Film</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/films' element={<Films></Films>}></Route>
				<Route path='/film' element={<Film></Film>}></Route>
			</Routes>
		</>
	)
}

export default App
