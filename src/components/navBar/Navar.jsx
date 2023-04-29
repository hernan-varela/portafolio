import React, { useState,useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import iconImg from "../../assets/images/sticker.png"
import iconImgHover from "../../assets/images/stickerHoverNav.png"
import logo from "../../assets/images/logo_white_large.png"
import styles from "../navBar/NavBar.module.css"
import Lottie from "lottie-web";
import webDevImg from "../../assets/loties/img_lootie_devweb.json";

const NavBar = () => {
    

    const [isHover, setIsHover] = useState(false)

    const handleHover = () => {
        setIsHover(true);
    };

    const handleLeave = () => {
        setIsHover(false);
    };


    return (
        <> 
            <div className={styles.contNavBar}>
                <Link className={styles.toHome} to={"/"} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                    <img className={styles.imgIcon} src={isHover ? iconImgHover : iconImg}  alt="icon" srcset="" />
                    <img className={styles.logo} src={logo} alt="icon" srcset="" />

                </Link>
                <div className={styles.listNav}>
                    <Link className={styles.Link} to={"/education"}>Education</Link>
                    <Link className={styles.Link} to={"/contact"} >Contact</Link>
                    <Link className={styles.Link} to={"/skils"} >Skils</Link>
                    <Link className={styles.Link} to={"/contact"} >Contact</Link>
                    <Link className={styles.Link} to={"/proyect"} >Proyect</Link>
                    <Link className={styles.Link} to={"/resume"} >Resume</Link>

                </div>
            </div>
        </>
    )
}

export default NavBar