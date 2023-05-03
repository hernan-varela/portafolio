import React from "react";
import styles from "../footer/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles.contFooter}>
      <p>Designed and Developed by Hernan N. Varela</p>

      <div>
        <a
          className={styles.icon}
          href="https://www.linkedin.com/in/HernanNicolasVarela"
        >
          {" "}
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />{" "}
        </a>
        <a className={styles.icon} href="https://github.com/hernan-varela">
          {" "}
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />{" "}
        </a>
      </div>
      <p> Copyright © 2023 SB </p>
    </div>
  );
};

export default Footer;
