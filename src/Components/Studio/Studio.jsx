import React from "react";
import style from './Studio.module.css'
import studio from '../../images/studio.svg'
const Studio = () => {
    return (
        <div className={style.studio}>
            <div className={style.info}>
                <p className={style.subTitle}>Gear</p>
                <p className={style.title}>Build a drool-worthy studio, affordably.</p>
                <p className={style.text}>The industry’s top software, all in one place, on payment plans built to work for you.</p>
                <button className={style.button}>Explore Gear</button>
            </div>
            <img src={studio} className={style.image} />
        </div>
    )
}

export default Studio