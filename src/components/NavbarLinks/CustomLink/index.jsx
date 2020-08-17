import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

import './styles.css'


function CustomLink(props) {
    return (
        <div className="custom-link-div">
            <Link to={`/AmboxWebsite/#${props.hash}`}>
                {props.linkText}
            </Link>
        </div>
    );
}

export default CustomLink