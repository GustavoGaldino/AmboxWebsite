import React from 'react'

import './styles.css'

function PlansCard(props){
    return(
        <div className="plans-card-div">
            <div className="plans-card-title">
                <h1>{props.plan}</h1>
            </div>
            <div className="light-blue-line" />
            <div className="price-div">
                <img src={props.img} alt="" className="plan-img"/>
            </div>
        </div>
    );
}

export default PlansCard;