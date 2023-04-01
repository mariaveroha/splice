import React from "react";
import style from './Final.module.css'
import final from '../../images/final_background.svg'
const Final = () => {
    return (
        <div className={style.final}>
            <img src={final} className={style.back} />
            <div className={style.content}>
                <div className={style.text}>Try Splice today</div>
            </div>
        </div>
    )
}

export default Final