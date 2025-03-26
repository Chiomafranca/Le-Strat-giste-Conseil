import React from "react";
import videoFile from "../../Header/vidoe/vidoe1.mp4";
import NavHeader from './NavHeader' 
import "./VidoeBackGround.css"; 
import HeaderContent from "../HeaderContent/HeaderContent";

const VidoeBackGround = () => {
    return (
        <>
            <div className="video-background-container">
                <video className="full-width-video" autoPlay muted loop>
                    <source src={videoFile} type="video/mp4" />
                </video>
                <div className="nav-header">
                    <NavHeader />
                </div>
            </div>

            <HeaderContent />
        </>
    );
}

export default VidoeBackGround;
