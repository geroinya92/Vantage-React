import style from './Header.module.css'
import React from 'react'
import Navbar from './Navbar/Navbar'
import logo from './logo.png'
import interior from './interior.png'

function Header () {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <img src={logo} alt="Vantage" />
            </div>


            <Navbar />
            
            <img src={interior} alt="Interior" />


        </div>

    )
}

export default Header