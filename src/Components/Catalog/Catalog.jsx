import React from "react";
import style from './Catalog.module.css'
import catalog from '../../images/catalog.svg'
const Catalog = () => {
    return (
        <div className={style.catalog}>
            <div className={style.info}>
                <p className={style.subTitle}>Sounds</p>
                <p className={style.title}>A catalog so deep, it’s dangerous.</p>
                <p className={style.text}>Expertly created and curated samples in any style imaginable. Start swimming in sound.</p>
                <button className={style.button}>Explore Sounds</button>
            </div>
            <img src={catalog} className = {style.image} />
        </div>
    )
}

export default Catalog