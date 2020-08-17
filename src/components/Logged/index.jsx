import React from 'react'

import './styles.css'

import { Navbar } from 'react-bootstrap'
import AmboxLogo from '../../components/Logo/index.jsx'
import LeaveModal from '../../components/LeaveModal/index.jsx'

export default function Logged() {
    return (
        <div>
            <Navbar bg="light" fixed="top">

                <Navbar.Brand>
                    <AmboxLogo />
                </Navbar.Brand>

                <div class="logged-nav-links justify-content-end">
                    <LeaveModal />
                </div>
            </Navbar>
            <div className="logged-div">
                <div className="first-account-card">
                    <div className="first-card-title">
                        <span>Meus Dados</span><i class="far fa-edit edit-icon"></i>
                    </div>

                    <div class="custom-input first-input">
                        <div className="name-div">
                            Nome
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="Letícia Prado" />
                        </div>
                    </div>

                    <div class="custom-input second-input-field">
                        <div className="name-div">
                            Email
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="ambox@gmail.com" />
                        </div>
                    </div>

                    <div class="custom-input third-input">
                        <div className="name-div">
                            Senha
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="********" />
                        </div>
                    </div>

                    <div class="custom-input fourth-input">
                        <div className="name-div">
                            Endereço
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="Rua Machado De Assis" />
                        </div>
                    </div>

                    <div class="custom-input fifth-input-field">
                        <div className="name-div">
                            Número
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="500" />
                        </div>
                    </div>

                    <div class="custom-input sixth-input-field">
                        <div className="name-div">
                            Comp.
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="Apt 402" />
                        </div>
                    </div>

                </div>

                <div className="vertical-line-div">
                    <div className="vertical-line"></div>
                </div>

                <div className="second-account-card">
                    <div className="first-card-title">
                        <span>Forma de Pagamento</span><i class="far fa-edit edit-icon"></i>
                    </div>

                    <div className="payment-div">
                        <div className="payment-name">
                            Cartão de crédito
                        </div>
                    </div>

                    <div class="custom-input second-input-field">
                        <div className="name-div">
                            Número
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="9999 9999 9999 9999" />
                        </div>
                    </div>

                    <div class="custom-input third-input">
                        <div className="name-div">
                            Validade
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="00/00" />
                        </div>
                    </div>

                    <div class="custom-input fourth-input">
                        <div className="name-div">
                            CVV
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="***" />
                        </div>
                    </div>

                    <div class="custom-input fifth-input-field">
                        <div className="name-div">
                            Nome
                        </div>
                        <div className="input-div">
                            <input type="text" placeholder="Letícia Prado" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}