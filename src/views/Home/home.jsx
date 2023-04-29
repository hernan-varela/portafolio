import React, { useEffect, useRef, useState } from "react";
import backgroundImage from "../../assets/images/fondoPortafolio.jpg";
import styles from "../Home/home.module.css";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-web";
import webDevImg from "../../assets/loties/img_lootie_devweb.json";
import Footer from "../../components/footer/Footer";

const Home = () => {
    const container = useRef(null);

    useEffect(() => {
        const anim = Lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: webDevImg,
        });
        return () => anim.destroy();
    }, []);

    const [word, setWord] = useState("");

    const onComplete = () => {
        setWord("Hello, World!");
    };

    return (
        <div
            className={styles.contenedor}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >


            <div className={styles.imgAndText}>
                <div className={styles.typewriterContainer}>
                    <h3>Hi there !! 👋🏻</h3>
                    <h4>I'm Hernan N. Varela</h4>

                    <div className={styles.contIam}>
                        <h4>I AM </h4>
                        <Typewriter
                            options={{
                                strings: [" a computer engineering student", " a full stack jr web developer"],
                                autoStart: true,
                                loop: true,

                                pauseFor: 1000 // el tiempo que quieres que se pause la animación después de escribir la palabra
                            }}
                        />
                    </div>



                </div>
                <div className={styles.animationContainer} ref={container}></div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
