// import midBg from 'img/mid_bg.png'
import {Link} from "react-router-dom";
import videoFront from 'video/SANDION_Main_front.mp4'
import videoTurn from 'video/SANDION_Main_turn.mp4'
import mainLogo from 'img/main_logo.png'
import { useState,useRef  } from "react";

function Home() {
    const frontRef = useRef(null);
    const turnRef = useRef(null);

    const handleButtonOver = () => {
        console.log('over')
        frontRef.current.pause();
        turnRef.current.play();

        frontRef.current.style.zIndex=0;
        turnRef.current.style.zIndex=1;
    }

    const FrontComponent = () => {
        return (
            <video loop autoPlay muted className="video__main front" ref={frontRef}>
                <source src={videoFront} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        )
    }
    const TurnComponent = () => {
        return (
            <video muted className="video__main turn" ref={turnRef}>
                <source src={videoTurn} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        )
    }


    return (
        <main>
            <button className="btn__mainlogo"><img src={mainLogo} alt="sandion" onMouseOver={()=> handleButtonOver()} /></button>
            <FrontComponent />
            <TurnComponent />
        </main>
    );
}
export default Home;