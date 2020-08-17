import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

import {Navbar} from 'react-bootstrap'

import AmboxLogo from '../../Logo/index.jsx'
import NavbarLinks from '../../NavbarLinks/index.jsx'


export default function SecondView(){
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
                        <h1>Adicionar Endereço</h1>
                    </div>
                    <div className="horizontal-line" />

                    <div class="input">
                        <input type="text" placeholder="Endereço" class="input-field"/>
                    </div>

                    <div class="input register-second-input">
                        <input type="text" placeholder="Número" class="input-field"/>
                    </div>

                    <div class="input register-third-input">
                        <input type="text" placeholder="Complemento" class="input-field"/>
                    </div>

                    <div className="reg-btn-div">
                        <Link to='/AmboxWebsite/register/third-view'>
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