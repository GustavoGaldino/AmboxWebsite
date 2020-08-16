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
                    monthly="50"
                    firstBenefit="4 bebidas não alcóolicas"
                    secondBenefit="4 bebidas não alcóolicas"
                    thirdBenefit="4 bebidas não alcóolicas"
                    btnClass="plan-assign-btn-transparent"
                />
            </div>

            <div className="second-card">
                <PlansCard
                    plan="PRO"
                    img={amboxImg}
                    monthly="50"
                    firstBenefit="4 bebidas não alcóolicas"
                    secondBenefit="4 bebidas não alcóolicas"
                    thirdBenefit="4 bebidas não alcóolicas"
                    btnClass="plan-assign-btn"
                />
            </div>

            <div className="third-card">
                <PlansCard
                    plan="PRO"
                    img={amboxImg}
                    monthly="50"
                    firstBenefit="4 bebidas não alcóolicas"
                    secondBenefit="4 bebidas não alcóolicas"
                    thirdBenefit="4 bebidas não alcóolicas"
                    btnClass="plan-assign-btn-transparent"
                />
            </div>
                

        </div>
    );
}

export default Plans;