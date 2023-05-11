import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import image from "../../assets/loties/github-lottie.json";

const GitIcon = () => {
  const lottieRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    lottieRef.current.setSpeed(1);
    lottieRef.current.goToAndStop(1, true); // se queda pausado en ese segundo
    if (isHovered) {
      lottieRef.current.playSegments([6, 61], true); //el arrary recibe el segmento que quiero visualizar
    }
  }, [isHovered]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={image}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default GitIcon;
