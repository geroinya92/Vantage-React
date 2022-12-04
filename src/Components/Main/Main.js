import style from './Main.module.css'
import React from 'react'
import PostingContainer from "./Posting/PostingContainer";
import VantagePostsContainer from "./VantagePosts/VantagePostsContainer";

function Main() {

    return (
        <div className={style.Wrapper}>
            <div className={style.container}>
                <PostingContainer/>
                <VantagePostsContainer/>
            </div>
        </div>
    )
}

export default Main