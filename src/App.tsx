import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Content from './components/Content'

function App() {
	return (
		<>
			<div className="container">
				<Header />
				<Navbar />
				<Content />
			</div>
		</>
	)
}

export default App
