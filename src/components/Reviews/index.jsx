import React from 'react'

import './styles.css'

import ReviewCard from './ReviewCard/index.jsx'

import gustavoImg from '../../assets/images/reviews-images/gustavo.jpg'
import letíciaImg from '../../assets/images/reviews-images/leticia.jpg'
import igorImg from '../../assets/images/reviews-images/igor.jpg'

function Reviews(){
    return(
        <div className="reviews-div" id="reviews">
            <div className="reviews-title-div">
                <div className="purple-line">

                </div>
                <h2>
                    O QUE OS NOSSOS ASSINANTES FALAM DE NÓS
                </h2>
            </div>
            <div className="review-first-card">
                <ReviewCard
                    username="Gustavo Galdino"
                    img={gustavoImg}
                    localization ="Recife - PE"
                />
            </div>
            <div className="review-second-card">
                <ReviewCard
                    username="Letícia Prado"
                    img={letíciaImg}
                    localization ="Recife - PE"
                />
            </div>
            <div className="review-third-card">
                <ReviewCard
                    username="Igor Lins"
                    img={igorImg}
                    localization ="Recife - PE"
                />
            </div>
        </div>
    ); 
}

export default Reviews