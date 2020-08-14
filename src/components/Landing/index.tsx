import React from 'react'

import './styles.css'

import unboxingImg from '../../assets/images/unboxing.png'

function Landing(){
    return(
        <div className="landing-div">
            <img src={unboxingImg} alt="" className="hero-img"/>
        </div>
    );
}

export default Landing