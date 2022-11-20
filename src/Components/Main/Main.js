import style from './Main.module.css'
import React from 'react'
import VantagePosts from "./VantagePosts/VantagePosts";

function Main(props) {


    return (
        <div className={style.Wrapper}>
            <div className={style.container}>
                <VantagePosts posts={props.posts} />
            </div>
        </div>
    )
}

export default Main