import React from "react";
import style from "./Resume.module.css";
import "animate.css";
import QR from "../../assets/images/QR-C.V.png";

const Resume = () => {
  return (
    <div
      className={`${style.contFather} animate__animated animate__backInLeft`}
    >

      <div className={style.container}>

        <img className={style.qr} src={QR} alt="image not found" />

        <h3>OR</h3>
        <div>

          <a
            className={style.btn}
            href="https://drive.google.com/uc?export=download&id=1mK9QgzrbvRf-zlhPcaBpSzZJwHpJv_qS"
          >
            {" "}
            Download
          </a>

          <a
            className={style.btn}
            href="https://drive.google.com/file/d/1mK9QgzrbvRf-zlhPcaBpSzZJwHpJv_qS/view?usp=share_link"
          >
            {" "}
            View
          </a>

        </div>
      </div>
    </div>
  );
};

export default Resume;
