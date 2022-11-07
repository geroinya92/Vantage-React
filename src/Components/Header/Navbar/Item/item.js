import style from './Item.module.css'
import React from 'react'

function Item(props) {
    return (
        <div className={style.container}>
            {props.name}
        </div>
    )
}

export default Item