import './App.css'

import Categories from './components/Categories'
import Test from './components/Test'

function App() {

	return (
		<div className="wrapper">
			<div className="content">
				<Categories></Categories>
			</div>
			<img className='poster' src="./src/assets/img/poster.webp" alt="cat" />
		</div>
	)
}

export default App
