import React from "react";
import style from './Main.module.css'
import back from '../../images/main_background.svg'
const Main = () => {
    return (
        <>
            <div className={style.background}>
                <img src={back} className={style.back} />
                <div className={style.info} >
                    <p className={style.text}>Step into the producer’s playground</p>
                    <p className={style.text_small}>Explore the world’s best sample library and an unmatched marketplace of plugins and DAWs.</p>
                <button className={style.button}>Try it</button>
                </div>
            </div>

        </>
    )
}

export default Main