import React from "react";
import style from './Footer.module.css'
import facebook from '../../images/facebook.svg'
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.columns}>
                <div>
                    <p className={style.title}>Skills</p>
                    <p className= {style.item}>Features</p>
                    <p className= {style.item}>Catalog</p>

                    <p className={style.titleSecond}>Studio</p>
                    <p className= {style.item}>Features</p>
                    <p className= {style.item}>About Splice Studio</p>
                    <p className= {style.item}>Managing Your Production Library</p>
                    <p className= {style.item}>Collaborating with Baewatch</p>
                </div>
                <div>
                    <p className={style.title}>Community</p>
                    <p className= {style.item}>Ableton Live Projects</p>
                    <p className= {style.item}>FL Studio Projects</p>
                    <p className= {style.item}>Logic Pro X Projects</p>
                    <p className= {style.item}>Garageband Projects</p>
                    <p className= {style.item}>Remix Contests</p>
                    <p className= {style.item}>Tiesto's Secrets</p>
                </div>
                <div>
                    <p className={style.title}>Sounds</p>
                    <p className= {style.item}>Features</p>
                    <p className= {style.item}>Catalog</p>
                    <p className= {style.item}>How Jauz Uses Sounds</p>
                    <p className= {style.item}>deadmau5's Chimaera</p>
                    <p className= {style.item}>KSHMR Vol. 2</p>
                </div>
                <div>
                    <p className={style.title}> Plugins</p>
                    <p className= {style.item}>Top VSTs</p>
                    <p className= {style.item}>Serum</p>
                    <p className= {style.item}>Rent to Own</p>
                    <p className= {style.item}>Free Plugins</p>
                    <p className= {style.item}>Top Manufacturers</p>
                </div>
                <div>
                    <p className={style.title}>Beatmaker</p>
                    <p className= {style.item}>Create Your Own Beat</p>
                    <p className= {style.item}>Wakapella</p>
                    <p className= {style.item}>Just Blaze</p>
                </div>
                <div>
                    <p className={style.title}>Blog</p>
                    <p className= {style.item}>Latest Posts</p>
                    <p className= {style.item}>Using Soundtoys Decapitator</p>
                    <p className= {style.item}>Mastering 101</p>
                    <p className= {style.item}>Producing Future Beats</p>
                    <p className= {style.item}>Belonging @ Splice</p>
                </div>
            </div>
            <div className={style.info}>
                <p className={style.point}>© 2022 Splice.com All Rights Reserved</p>
                <p className={style.point}>Terms of Use</p>
                <p className={style.point}>Privacy Policy</p>
                <p className={style.point}>Jobs</p>
                <p className={style.point}>Contact</p>
                <p className={style.point}>Help</p>
                <img src={facebook} className={style.facebook} />
            </div>
        </div>
    )
}

export default Footer