import React from 'react'

import './styles.css'

import starImg from '../../../assets/images/star.png'

function ReviewCard(props){
    return(
        <div className="review-card">

            <div className="card-img">
                <img src={props.img} alt=""/>
            </div>

            <div className="card-user-info">
                <h1>{props.username}</h1>
                <h3>{props.localization}</h3>
            </div>

            <div className="user-stars">
                <img src={starImg} alt="" className="star"/>
                <img src={starImg} alt="" className="star"/>
                <img src={starImg} alt="" className="star"/>
                <img src={starImg} alt="" className="star"/>
                <img src={starImg} alt="" className="star"/>
            </div>

            <div className="review-text">
                <h2>
                    Incrível!
                    <br />
                    Todo mês uma nova surpresa.
                    <br />
                    FIco esperando minha ambox com muita ansiedade.
                </h2>
            </div>

            <div className="purple-div"></div>
            
        </div>
    );
}

export default ReviewCard;