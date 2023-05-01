import React from 'react'
import { Post } from '../Post'

export const MyPosts = () => {
	return (
		<>
			<div>hello and ADDED Posts</div>
			<div>
				<textarea></textarea>
				<button>Send!</button>
			</div>
			<div className="posts">
				<Post message="hello from react" />
				<Post message="hello from Ubuntu" />
			</div>
		</>
	)
}
