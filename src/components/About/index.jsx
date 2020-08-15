import React from 'react'

import './styles.css'

function AboutUs(){
    return(
        <div className = "about-us-div" id="about-us">

            <div className="firstPurpleLine" />
            <h1 className="ambox-title">
                O QUE É A AMBOX?
            </h1>

            <div className="coffee"></div>
            <div className="energy-drink"></div>
            <div className="smoothie"></div>
            <div className="pepsi"></div>
            
            <div className="right-side-container">

                <center>
                    <div className="secondPurpleLine"></div>
                </center>

                <div className="Sentence">
                    <h2>Somos um clube de assinatura com o objetivo de levar novas experiências para você.</h2>
                </div>
                
                <div className="Sentence">
                    <h2>A cada mês, uma surpresa diferente, uma sensação única.</h2>
                </div>

                <div className="Sentence">
                    <h2>Saia do óbvio, experimente!</h2>
                </div>

                <center>
                    <div className="thirdPurpleLine"></div>
                </center>
            </div>

        </div>
    );
}

export default AboutUs