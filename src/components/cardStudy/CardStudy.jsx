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
      <section>
        <span className={styles.text}>{text}</span>
      </section>
      <button className={styles.btn} > view more </button>
    </div>
  );
};

export default CardStudy;
