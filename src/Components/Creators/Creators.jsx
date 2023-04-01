import React, { useState } from "react";
import style from './Creators.module.css'
import creator1 from '../../images/creator1.svg'
import creator2 from '../../images/creator2.svg'
import creator3 from '../../images/creator3.svg'
import CreatorCard from "../CreatorCard/CreatorCard";
const Creators = () => {
    const [creator, setCreator] = useState([
        { id: 1, image: creator1, speach: 'I can always find what I’m looking for on Splice, whether it’s the exact sound I want or just a bit of inspiration.', name: 'Andrew Huang' },
        { id: 2, image: creator2, speach: 'Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.', name: 'KSHMR' },
        { id: 3, image: creator3, speach: 'It’s been fun to dive into Splice’s creator community and explore tools that support my own creative process.', name: 'Kesha Lee' }
    ])
    return (
        <div className={style.creators} >
            <p className={style.title}>What creators are saying about Splice</p>
            <div className={style.creatorsBlock}>
                {creator.map((creator, key) =>
                    <CreatorCard creator={creator} key={creator.id} />
                )}
            </div>
        </div>

    )
}

export default Creators