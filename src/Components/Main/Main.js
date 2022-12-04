import style from './Main.module.css'
import React from 'react'
import VantagePosts from "./VantagePosts/VantagePosts";
import Posting from "./Posting/Posting";
import PostingContainer from "./Posting/PostingContainer";

function Main(props) {

    return (
        <div className={style.Wrapper}>
            <div className={style.container}>
                <PostingContainer
                    dispatch={props.dispatch}
                    store={props.state}
                />
                <VantagePosts posts={props.state.Main.newsData}/>
            </div>
        </div>
    )
}

export default Main