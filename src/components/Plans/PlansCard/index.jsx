import React from 'react'

import './styles.css'

import forwardIcon from '../../../assets/images/icons/forward.png'

function PlansCard(props){
    return(
        <div className="plans-card-div">

            <div className="plans-card-title">
                <h1>{props.plan}</h1>
            </div>

            <div className="light-blue-line" />

            <div className="price-div">
                <div className="monthly-payment">
                    <h1>R$ {props.monthly}</h1>
                    <h2>por mês</h2>
                </div>
            </div>

            <div className="plans-benefits">
                <div className="first-benefit">
                    <i class="fas fa-check"></i>
                    <h1>{props.firstBenefit}</h1>
                </div>
                <div className="second-benefit">
                    <i class="fas fa-check"></i>
                    <h1>{props.secondBenefit}</h1>
                </div>
                <div className="third-benefit">
                    <i class="fas fa-check"></i>
                    <h1>{props.thirdBenefit}</h1>
                </div>
            </div>

            <div className="plan-assign-button-div">
                <button className={props.btnClass}>
                    <a href="/login">
                        Assinar esse plano
                        <img className="forward-icon" src={forwardIcon} alt=""/>
                    </a>
                </button>
            </div>

        </div>
    );
}

export default PlansCard;