import React from 'react'

import './styles.css'
import PlansCard from './PlansCard'

import amboxImg from '../../assets/images/ambox.png'

function Plans(){
    return(
        <div className="plans-div" id="plans">

            
            <div className="plans-title">
                <div className="plans-purple-line"></div>
                <h1>NOSSOS PLANOS</h1>
            </div>

            <div className="first-card">
                <PlansCard
                    plan="PRO"
                    img={amboxImg}
                />
            </div>

            <div className="second-card">

            </div>

            <div className="third-card">

            </div>
                

        </div>
    );
}

export default Plans;