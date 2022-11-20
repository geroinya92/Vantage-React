import React from 'react'
import Post from "./Post/Post";
import style from './VantagePosts.module.css'

function VantagePosts(props) {


    let postItem =
        props.posts.map(nw => <Post id={nw.id} text={nw.text} likesCount={nw.likesCount}/>)

    return (
        <div className={style.container}>
            <h1>What's new?</h1>
            {postItem}
        </div>
    )
}

export default VantagePosts