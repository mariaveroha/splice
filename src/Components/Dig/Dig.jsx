import React from "react";
import style from './Dig.module.css'
import dig from '../../images/search_dig.svg'
const Dig = () => {
    return (
        <div className={style.dig}>
        <img src={dig} className={style.image} />
        <div className={style.info}>
            <p className={style.subTitle}>Technology</p>
            <p className={style.title}>Crate dig without the dust.</p>
            <p className={style.text}>Our intelligent search tools help you discover sounds you would normally have to dig to find. Tech breaks the sweat, not you.</p>
            <button className={style.button}>Discover CoSo</button>
        </div>
    </div>
    )
}

export default Dig