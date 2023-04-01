import React from "react";
import style from './CreatorCard.module.css'
const CreatorCard = (props) => {
    return (
        <div className={style.creator}>
            <img src = {props.creator.image} className = {style.image}/>
            <p className={style.speach}>{props.creator.speach}</p>
            <p className={style.name}>{props.creator.name}</p>
        </div>
    )
}

export default CreatorCard