import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'


export default function Login(){
    return(
        <div className="login-div">
            <div className="login-form">
                <div className="welcome">
                    <h1>Bem-vindo</h1>
                </div>
                <div className="horizontal-line-login" />

                <div class="input">
                    <input type="text" placeholder="Email" class="input-field"/>
                </div>

                <div class="input second-input">
                    <input type="text" placeholder="Senha" class="input-field"/>
                </div>

                <div className="user-login-btn-div">
                    <Link to="/logged">
                        <button className="user-login-btn">
                            <span>
                                Entrar
                            </span>
                        </button>
                    </Link>
                </div>

                <div className="register-div">
                    Ainda não é um membro?
                    <Link to="/register/first-view" className="register">Cadastre-se</Link>
                </div>
            </div>
        </div>
    );
}