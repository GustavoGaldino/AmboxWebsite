import React from 'react'

import './styles.css'

import forwardIcon from '../../assets/images/icons/forward.png'

function Landing(){
    return(
        <div className="landing-div" id="">
            <div className="introduction-text">
                <h2>
                    Receba todo mês
                    <br />
                    na porta de sua casa
                    <br />
                    produtos não alcóolicos
                    <br />
                    e outras surpresas.
                </h2>
                <button className="plans-btn">
                    <a href="/AmboxWebsite#plans">
                        <span>
                            Visualizar Planos
                            <img src={forwardIcon} alt="" className="forward-icon"/>
                        </span>
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Landing