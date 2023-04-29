import React from "react";
import { Link } from "react-router-dom";
import styles from "../footer/Footer.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div>
            <a href="https://www.linkedin.com/in/HernanNicolasVarela"> <FontAwesomeIcon icon={faLinkedin} /> </a>

            <a href="https://github.com/hernan-varela"> <FontAwesomeIcon icon={faGithub} /> </a>
        </div>
    )
}

export default Footer