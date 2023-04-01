import React from "react";
import style from './WorkFlow.module.css'
import workflow from '../../images/workflow.svg'
const WorkFlow = () => {
    return (
        <div className={style.workflow}>
            <img src={workflow} className={style.image} />
            <div className={style.info}>
                <p className={style.subTitle}>Connected Experience</p>
                <p className={style.title}>A workflow that actually flows.</p>
                <p className={style.text}>Preview samples in your track’s key and tempo, drag and drop sounds into your DAW, and organize your favorite samples, MIDI and presets in one place.</p>
            </div>
        </div>
    )
}

export default WorkFlow