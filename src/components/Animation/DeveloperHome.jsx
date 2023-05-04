import React,{useEffect,useRef} from 'react'
import Lottie from "lottie-react"
import developerHome from "../../assets/loties/developerHome.json"

function DeveloperHome(props) {
    const lottieRef = useRef()
   useEffect(() => {
    lottieRef.current.setSpeed(0.3)
    console.log(lottieRef);
   },[])
    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={developerHome}
        />
    );
}

export default DeveloperHome;