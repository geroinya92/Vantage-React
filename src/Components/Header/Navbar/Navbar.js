import style from './Navbar.module.css'
import React from 'react'
import Slogan from './Slogan/Slogan'
import Item from "./Item/item";
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return (
        <div className={style.container}>
            <Slogan className={style.container_slogan}/>
            <div className={style.container_items}>
                <Item name={'home'}/>
                <Item name={'about'}/>
                {/*<Item name={'services'}/>
                <Item name={'projects'}/>*/}
                <Item name={'contact'}/>
                <Item name={'profile'}/>
                <div>
                    {props.isAuth
                        ? (
                            <div className={style.login}>{props.login}</div>
                        ) : (
                            <NavLink to={'/login'}>Login</NavLink>
                        )}


                </div>
            </div>


        </div>
    )
}

export default Navbar