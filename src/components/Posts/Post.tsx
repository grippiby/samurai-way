import React from 'react'
import s from './Post.module.css'

type PostPropTypes = {
	message: string
}
export const Post = (props: PostPropTypes) => {
	return (
		<>
			<div className={s.wrapper}>
				<div className={s.avatar_img}></div>
				<div className={s.text}>{props.message}</div>
			</div>
		</>
	)
}
