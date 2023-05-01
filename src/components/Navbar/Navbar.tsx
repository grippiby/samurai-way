import React from 'react'
import s from './Navbar.module.css'

const Navbar = () => {
	return (
		<>
			<div className={s.nav}>
				навигация
				<div className="profile">
					<a>Profile</a>
				</div>
				<div className="messages">
					<a>Messages</a>
				</div>
				<div className="settings">
					<a>Settings</a>
				</div>
			</div>
		</>
	)
}

export default Navbar
