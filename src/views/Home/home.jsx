import React, { useEffect, useMemo } from "react";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import DeveloperHome from "../../components/Animation/DeveloperHome"


const Home = () => {
    
  return (
    <div className={styles.container}>
      <div className={styles.imgAndText}>

        
        <div className={styles.typewriterContainer}>
        <DeveloperHome />
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
