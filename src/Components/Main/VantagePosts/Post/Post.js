import React from 'react'
import style from './Post.module.css'

function Post(props) {
    return (
        <div className={style.Container}>
            <h3> Post # {props.id}</h3>
            <p>{props.text}</p>
            <p>Likes: {props.likesCount}</p>
        </div>
    )
}

export default Post