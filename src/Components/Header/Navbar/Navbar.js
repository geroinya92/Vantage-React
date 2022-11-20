import style from './Navbar.module.css'
import React from 'react'
import Slogan from './Slogan/Slogan'
import {NavLink} from "react-router-dom";
import Item from "./Item/item";

function Navbar() {
    return (
        <div className={style.container}>
            <Slogan className={style.container_slogan}/>
            <div className={style.container_items}>
                <Item name={'home'}/>
                <Item name={'about'}/>
                <Item name={'services'}/>
                <Item name={'projects'}/>
                <Item name={'news'}/>
                <Item name={'contact'}/>
            </div>

        </div>
    )
}

export default Navbar