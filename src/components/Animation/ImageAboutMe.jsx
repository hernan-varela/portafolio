import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import image from "../../assets/loties/aboutMeLottie.json";

function ImageAboutMe(props) {
  const lottieRef = useRef();
  useEffect(() => {
    lottieRef.current.setSpeed(0.7);
    console.log(lottieRef);
  }, []);

  return <Lottie lottieRef={lottieRef} animationData={image} />;
}

export default ImageAboutMe;
