import React from 'react'

import CustomLink from './CustomLink'

import './styles.css'

import {
    Link,
} from "react-router-dom";

function NavbarLinks(){
    return(
        <div className="navbar-links justify-content-end">
            <CustomLink linkText="Sobre nós" hash="about-us"/>
            <CustomLink linkText="Planos" hash="plans"/>
            <CustomLink linkText="Avaliações" hash="reviews"/>

            <button className="login-btn" >
                <Link to="/AmboxWebsite/login">
                    <span>Entrar</span>
                </Link>
            </button>
        </div>
    );
}

export default NavbarLinks