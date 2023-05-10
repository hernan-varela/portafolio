import React from "react";
import style from "./AboutMe.module.css";
import "animate.css";
import ImageAboutMe from "../../components/Animation/ImageAboutMe";
import Boton from "../../components/Boton/Boton";

const AboutMe = () => {
  return (
    <div
      className={`${style.contFather} animate__animated animate__backInRight`}
    >
      <div className={style.container}>
        <div className={style.image}>
          {" "}
          <ImageAboutMe />
        </div>
        <div className={style.contImgText}>
          <span className={style.text}>
            Thanks for taking the time to read about me! Who I am? Full Stack
            Web Developer, Henry Academy Graduate, Computer Engineering Student,
            and currently Cell Phone Repair Technician, looking for my first job
            in the technology area. With skills in HTML, CSS, JavaScript and
            React, among others; Although I have no work experience in the area,
            I am looking forward to starting my career in this exciting field.
            As a cell phone repair technician, I have developed a strong
            commitment to problem solving, creativity, and teamwork. I love
            learning new technologies and I am sure my enthusiasm and teamwork
            skills will be a great addition to your team. If you are interested
            in my profile, I await your message to talk more in detail!
          </span>

          <Boton text={'Skils'} link={"/skils"} />
        </div>
      </div>{" "}
     
    </div>
  );
};

export default AboutMe;
