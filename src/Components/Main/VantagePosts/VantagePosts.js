import React from 'react'
import Post from "./Post/Post";
import style from './VantagePosts.module.css'
import StoreContext from "../../../StoreContext";

function VantagePosts() {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let postItem =
                    state.Main.newsData.map(nw => <Post id={nw.id} text={nw.text} likesCount={nw.likesCount}/>)
                return (
                    <div className={style.container}>
                        <h1>What's new?</h1>
                        {postItem}
                    </div>
                )
            }}
        </StoreContext.Consumer>
    )
}

export default VantagePosts