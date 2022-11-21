import style from './Main.module.css'
import React from 'react'
import VantagePosts from "./VantagePosts/VantagePosts";
import Posting from "./Posting/Posting";

function Main(props) {


    return (
        <div className={style.Wrapper}>
            <div className={style.container}>
                <Posting
                    AddPost={props.AddPost}
                    newPostText={props.newPostText}
                    updateNewPostText={props.updateNewPostText}
                />
                <VantagePosts posts={props.posts} />
            </div>
        </div>
    )
}

export default Main