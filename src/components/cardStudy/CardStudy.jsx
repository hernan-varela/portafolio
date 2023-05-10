import React from "react";
import styles from "./CardStudy.module.css"

const CardStudy = ({ image, url, text }) => {
  return (
    <div className= {styles.cont}>
      <header className={styles.image}>
        <a href={url}>
          <img src={image} alt="image not found" />{" "}
        </a>
      </header>
      <section className= {styles.contText} >
        <span className={styles.text}>{text}</span>
        <button className={styles.btn} > view more </button>
      </section>
      
    </div>
  );
};

export default CardStudy;
