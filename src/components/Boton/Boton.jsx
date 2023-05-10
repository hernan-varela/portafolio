import React from "react";
import { Link } from "react-router-dom";
import styles from "./Boton.module.css";

const Boton = ({ text, link }) => {
  return (
   
      <Link className={styles.btn} to={link}> {text} </Link>
    
  );
};

export default Boton;
