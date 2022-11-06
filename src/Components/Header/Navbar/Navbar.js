import style from './Navbar.module.css'
import React from 'react'
/*import Item from './Item/item'*/
import Slogan from './Slogan/Slogan'


function Navbar () {
    return (


        <div className={style.container}>
            <Slogan />
            <div>
                <a href={'/home'}>
                    HOME
                </a>
            </div>
            <div>
                <a href={'/about'}>
                    ABOUT
                </a>
            </div>
            <div>
                <a href={'/services'}>
                    SERVICES
                </a>
            </div>
            <div>
                <a href={'/projects'}>
                    PROJECTS
                </a>
            </div>
            <div>
                <a href={'/news'}>
                    NEWS
                </a>
            </div>
            <div>
                <a href={'/contact'}>
                    CONTACT
                </a>
            </div>
                  </div>

    )
}

export default Navbar