import React from 'react'
import s from './Content.module.css'
import { MyPosts } from '../Posts/MyPosts/MyPosts'

const Content = () => {
	return (
		<>
			<div className={s.content}>
				контент
				<div>
					<img
						src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/google-chatgpt-sixteen_nine.jpg"
						alt=""
					/>
				</div>
				<MyPosts />
			</div>
		</>
	)
}

export default Content
