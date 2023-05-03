import React, { useEffect, useMemo } from "react";
import backgroundImage from "../../assets/images/fondoPortafolio.jpg";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";



const Home = () => {
    
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.imgAndText}>
        <div className={styles.typewriterContainer}>
          <h3>Hi there !! 👋🏻</h3>
          <h4>I'm Hernan N. Varela</h4>

          <div className={styles.iamContainer}>
            <h4>I AM </h4>
            <Typewriter
              options={{
                strings: [
                  " a computer engineering student",
                  " a full stack jr web developer",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 1000,
              }}
            />
          </div>
        </div>
             
      </div>
    
    </div>
  );
};

export default Home;
