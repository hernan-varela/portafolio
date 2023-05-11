import React, { useState, useEffect, useRef } from "react";
import Lottie from "lottie-react";
import image from "../../assets/loties/react-native-lottie.json";

const ReactIcon = () => {
  const lottieRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    lottieRef.current.setSpeed(0.7);
    lottieRef.current.goToAndStop(54, true); // se queda pausado en ese segundo
    if (isHovered) {
      lottieRef.current.playSegments([2, 39], true); //el arrary recibe el segmento que quiero visualizar
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

export default ReactIcon;
