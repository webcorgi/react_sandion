// import midBg from 'img/mid_bg.png'
import {Link} from "react-router-dom";
import videoFront from 'video/SANDION_Main_front.mp4'
import videoTurn from 'video/SANDION_Main_turn.mp4'
import videoBack from 'video/SANDION_Main_back.mp4'
import mainLogo from 'img/main_logo.png'
import { useState,useRef  } from "react";

function Home() {
    const frontRef = useRef(null);
    const turnRef = useRef(null);
    const backRef = useRef(null);

    const handleButtonOver = () => {
            frontRef.current.pause();
            turnRef.current.play();
            frontRef.current.style.zIndex=0;
            turnRef.current.style.zIndex=1;
    }

    const handleButtonLeave = () => {
        frontRef.current.style.zIndex=1;
        turnRef.current.style.zIndex=0;
        backRef.current.style.zIndex=0;

        frontRef.current.setAttribute('loop', true);
        frontRef.current.setAttribute('autoplay', true);
        frontRef.current.play();

        turnRef.current.style.zIndex=0;
        turnRef.current.pause();
        turnRef.current.currentTime = 0;

        backRef.current.setAttribute('loop', false);
        backRef.current.setAttribute('autoplay', false);
        backRef.current.pause();
    }

    const handleTurnVideoEnd = () => {
        turnRef.current.style.zIndex=0;

        backRef.current.style.zIndex=2;
        backRef.current.setAttribute('loop', true);
        backRef.current.setAttribute('autoplay', true);
        backRef.current.play();
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
            <video muted className="video__main turn" ref={turnRef} onEnded={handleTurnVideoEnd}>
                <source src={videoTurn} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        )
    }
    const BackComponent = () => {
        return (
            <video muted className="video__main back" ref={backRef}>
                <source src={videoBack} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        )
    }


    return (
        <main>
            <button className="btn__mainlogo">
                <img src={mainLogo} alt="sandion"
                    onMouseOver={()=> handleButtonOver()}
                    onMouseLeave={()=> handleButtonLeave()}
                className="mainLogo_img" />
            </button>
            <FrontComponent />
            <TurnComponent />
            <BackComponent />
        </main>
    );
}
export default Home;