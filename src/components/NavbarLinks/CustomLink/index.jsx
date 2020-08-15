import React from 'react'

import './styles.css'

function CustomLink(props){
    return(
        <div className = "custom-link-div">
            <a href={props.href}>
                {props.linkText}
            </a>
        </div>
    );
}

export default CustomLink