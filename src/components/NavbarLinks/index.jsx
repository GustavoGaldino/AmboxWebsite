import React from 'react'

import CustomLink from '../CustomLink'

import './styles.css'

function NavbarLinks(){
    return(
        <div className="navbar-links justify-content-end">
            <CustomLink linkText="Sobre nós" href="#about-us"/>
            <CustomLink linkText="Planos" href="#plans"/>
            <CustomLink linkText="Avaliações" href="#reviews"/>
            <button className="login-btn" >
                <a href="">
                    <span>Entrar  </span>
                </a>
            </button>
        </div>
    );
}

export default NavbarLinks