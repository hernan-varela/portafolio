import React from 'react';
import Lottie from "lottie-react"
import developerHome from "../../assets/loties/developerHome.json"

function DeveloperHome(props) {
    return (
        <Lottie
            animationData={developerHome}
        />
    );
}

export default DeveloperHome;