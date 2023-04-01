import React from "react";
import style from './Header.module.css'
import logo from '../../images/logo.svg'
const Header = () => {
    return (
        <>
            <div className={style.header}>
                <div className={style.navbar}>
                    <div className={style.items}>
                        <img src={logo} className={style.logo} />
                        <p className={style.navbar_item}>Sounds</p>
                        <p className={style.navbar_item}>Skills</p>
                        <p className={style.navbar_item}>Plugins</p>
                        <p className={style.navbar_item}>Studio</p>
                        <p className={style.navbar_item}>Community</p>
                        <p className={style.navbar_item}>Blog</p>
                        <p className={style.navbar_item}>Pricing</p>
                    </div>

                    <div>
                        <button className={style.login}>Log in</button>
                        <button className={style.signup}>Sign up</button>
                    </div>
                </div>

            </div>
            <div className={style.advert}>
<p className={style.text}>🤘 Get free Sounds when you start a trial & 4 months off a Sounds+ annual plan.</p>
<p className={style.click}>Click here</p>
            </div>
        </>

    )
}

export default Header