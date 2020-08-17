import React from 'react'

import './styles.css'

export default function Login(){
    return(
        <div className="login-div">
            <div className="login-form">
                <div className="welcome">
                    <h1>Bem-vindo</h1>
                </div>
                <div className="horizontal-line" />

                <div class="input">
                    <input type="text" placeholder="Email" class="input-field"/>
                </div>

                <div class="input second-input">
                    <input type="text" placeholder="Senha" class="input-field"/>
                </div>

                <div className="user-login-btn-div">
                    <button>
                        <a href="">
                            Entrar
                        </a>
                    </button>
                </div>

                <div className="register-div">
                    Ainda não é um membro?
                    <a href="" className="register">Cadastre-se</a>
                </div>
            </div>
        </div>
    );
}