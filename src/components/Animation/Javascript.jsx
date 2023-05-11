import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import image from "../../assets/loties/javascript-lottie.json";

const JavascriptIcon = () => {
  const lottieRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    lottieRef.current.setSpeed(1);
    lottieRef.current.goToAndStop(52, true); // se queda pausado en ese segundo
    if (isHovered) {
      lottieRef.current.playSegments([60, 110], true); //el arrary recibe el segmento que quiero visualizar
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

export default JavascriptIcon;
