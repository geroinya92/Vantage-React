import style from './Main.module.css'
import React from 'react'
import VantagePosts from "./VantagePosts/VantagePosts";
import PostingContainer from "./Posting/PostingContainer";

function Main() {

    return (
        <div className={style.Wrapper}>
            <div className={style.container}>
                <PostingContainer />
                <VantagePosts />
            </div>
        </div>
    )
}

export default Main