import React from "react";
import style from "./Skils.module.css";
import ReactIcon from "../../components/Animation/ReactIcon";
import MongoIcon from "../../components/Animation/MongoIcon";
import JavascriptIcon from "../../components/Animation/Javascript";
import GitIcon from "../../components/Animation/GithubIcon";
import Icon from "../../components/Animation/Icon";
import nodeIcon from "../../assets/images/node-js-svg.svg";
import expressIcon from "../../assets/images/express-logo.png";
import ScrumIcon from "../../assets/images/scrumAgile.png";
import cssIcon from "../../assets/images/cssIcono.png";
import htmlIcon from "../../assets/images/html.webp";
import trelloIcon from "../../assets/images/trelloIcon.png";

const Skils = () => {
  return (
    <div
      className={`${style.contFather} animate__animated animate__bounceInDown`}
    >
      <h4>Skils</h4>
      <div className={style.container}>

        

        <div className={style.contSkill}>
          <JavascriptIcon />
          <p>Javascript</p>
        </div>

        <div className={style.contSkill}>
          <Icon image={htmlIcon} />
        </div>
       

        <div className={style.contSkill}>
          <Icon image={cssIcon} />
        </div>

        <div className={style.contSkill}>
          <ReactIcon />
          <p>React</p>
        </div>
       

        <div className={style.contSkill}>
          <MongoIcon />
          <p>Mongo db</p>
        </div>

        <div className={style.contSkill}>
          <Icon image={expressIcon} />
          
        </div>

        <div className={style.contSkill}>
          <Icon image={trelloIcon} />
        </div>

        <div className={style.contSkill}>
          <GitIcon />
          <p>Github</p>
        </div>

        <div className={style.contSkill}>
          <Icon image={nodeIcon} />
          
        </div>

        <div className={style.contSkill}>
          <Icon image={ScrumIcon} />
        </div>

        
      </div>
    </div>
  );
};

export default Skils;
