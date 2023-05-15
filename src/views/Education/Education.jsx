import React from "react";
import style from "./Education.module.css";
import "animate.css";
import logoUnaj from "../../assets/images/logo-transparente.png";
import logoHenry from "../../assets/images/logo-henry-white-lg.png";
import CardStudy from "../../components/cardStudy/CardStudy";
const text =
  "I am a 2nd year student of Computer Engineering at the Arturo Jauretche National University, where I am developing my skills as a programmer and acquiring fundamental knowledge in the area of ​​technology.";
const textUnaj =
  " Soy estudiante de segundo año de Ingeniería en Informática en la Universidad Nacional Arturo Jauretche, donde estoy desarrollando mi habilidades como programador y adquiriendo conocimientosfundamentales en el área de la tecnología. Durante mi tiempo comoestudiante he tenido la oportunidad de trabajar en proyectos deprogramación en equipo, lo que me ha permitido mejorar mishabilidades de comunicación y colaboración.Aunque todavía estoy enproceso de formación, me considero un programador motivado ydedicado que siempre está buscando aprender y mejorar mishabilidades";
const urlUnaj =
  "https://www.unaj.edu.ar/carreras/ingenieria-y-agronomia/ingenieria-informatica/";
const Education = () => {
  return (
    <div
      className={`${ style.contFather } animate__animated animate__backInUp`}
    >
      <div className={ style.container }>
        <CardStudy image={ logoUnaj } text={ text } url={ urlUnaj } />

        <CardStudy image={ logoHenry } />

      </div>
    </div>
  );
};

export default Education;
