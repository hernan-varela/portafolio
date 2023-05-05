import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import DeveloperHome from "../../components/Animation/DeveloperHome";
import 'animate.css'

const Home = () => {
  return (
    <div className={`${styles.contFather} animate__animated animate__bounceInDown`}>
      <div className={styles.container}>
        <div className={styles.imgDeveloper}>
          <DeveloperHome />
        </div>

        <div className={styles.textTypWri}>
          <h1>Hello world !!</h1>
          <h1 className={styles.animatedText}>
            <span>My name is Hernan N. Varela. </span>
          </h1>

          <div className={styles.textIam}>
            <span className={styles.span}>I am </span>
            <Typewriter
              options={{
                strings: [
                  " full stack Javascript  web developer jr  ",
                  " study computer science engineering",
                  "cell phone repair technician"
                ],
                autoStart: true,
                loop: true,
                delay: 30,
              }}
            />
          </div>
          < Link className= {styles.btnAboutMe} to={"/AboutMe"} >About Me</Link>
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
