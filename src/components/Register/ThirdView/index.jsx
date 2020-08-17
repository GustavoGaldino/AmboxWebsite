import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

import {Navbar} from 'react-bootstrap'

import AmboxLogo from '../../Logo/index.jsx'
import NavbarLinks from '../../NavbarLinks/index.jsx'


export default function ThirdView(){
    return(
        <div>
            <Navbar bg="light" fixed="top">
                <Navbar.Brand>
                <AmboxLogo />
                </Navbar.Brand>

                <NavbarLinks onHomePage />
            </Navbar>
            <div className="login-div">
                <div className="login-form">
                    <div className="welcome">
                        <h1>Adicionar Cartão</h1>
                    </div>
                    <div className="horizontal-line" />
                    <div class="input register-first-input-tv">
                        <input type="text" placeholder="Número" class="input-field"/>
                    </div>

                    <div class="input register-second-input-tv">
                        <input type="text" placeholder="Validade" class="input-field"/>
                    </div>

                    <div class="input register-third-input-tv">
                        <input type="text" placeholder="CVV" class="input-field"/>
                    </div>

                    <div class="input register-fourth-input">
                        <input type="text" placeholder="Nome no cartão" class="input-field"/>
                    </div>

                    <div className="reg-btn-div-tv">
                        <Link to='/AmboxWebsite/logged'>
                            <button className="register-btn">
                                <span>
                                    Adicionar
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}