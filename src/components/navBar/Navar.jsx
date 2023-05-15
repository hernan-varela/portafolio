import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import iconImg from "../../assets/images/sticker.png";
import iconImgHover from "../../assets/images/stickerHoverNav.png";
import logo from "../../assets/images/logo_white_large.png";
import styles from "../navBar/NavBar.module.css";

const NavBar = () => {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  return (
    <>
      <div className={styles.contNavBar}>
        <Link
          className={styles.toHome}
          to={"/"}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <img
            className={styles.imgIcon}
            src={isHover ? iconImgHover : iconImg}
            alt="icon"
            srcSet=""
          />
          <img className={styles.logo} src={logo} alt="icon" srcSet="" />
        </Link>

        <div className={styles.listNav}>
          <Link
            className={`${styles.Link} ${location.pathname === "/" && styles.active}`}
            to={"/"}
          >
           Home
          </Link>

          <Link
            className={`${styles.Link} ${
              location.pathname === "/AboutMe" && styles.active
            }`}
            to={"/AboutMe"}
          >
            About me
          </Link>
          <Link
            className={`${styles.Link} ${
              location.pathname === "/education" && styles.active
            }`}
            to={"/education"}
          >
            Education
          </Link>
          <Link
            className={`${styles.Link} ${
              location.pathname === "/skils" && styles.active
            }`}
            to={"/skils"}
          >
            Skils
          </Link>
          <Link
            className={`${styles.Link} ${
              location.pathname === "/proyect" && styles.active
            }`}
            to={"/proyect"}
          >
            Proyect
          </Link>
          <Link
            className={`${styles.Link} ${
              location.pathname === "/contact" && styles.active
            }`}
            to={"/contact"}
          >
            Contact
          </Link>
          <Link
            className={`${styles.Link} ${
              location.pathname === "/resume" && styles.active
            }`}
            to={"/resume"}
          >
            Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
