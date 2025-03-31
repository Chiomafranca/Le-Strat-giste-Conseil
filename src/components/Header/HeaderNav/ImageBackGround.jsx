import React, { useRef, useEffect, useState } from "react";
// import videoFile1 from "../../Header/vidoe/vidoe1.mp4";
import NavHeader from "./NavHeader";
import { useLanguage } from "../../SetLanguage/LanguageContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VidoeBackGround.css";
import HeaderContents from "../Container/HeaderContents";
import pic13 from '../../HeaderPages/images/pic13.jpg'

const VidoeBackGround = () => {
  const { language } = useLanguage();
  // const videoRef = useRef(null);
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const video = videoRef.current;

  
  //   const ensurePlayback = () => {
  //     if (video && video.paused) {
  //       video.play().catch((err) => console.error("Playback Error:", err));
  //     }
  //   };

  //   video.addEventListener("ended", ensurePlayback);
  //   video.addEventListener("pause", ensurePlayback);

  //   return () => {
  //     video.removeEventListener("ended", ensurePlayback);
  //     video.removeEventListener("pause", ensurePlayback);
  //   };
  // }, []);

  // Scroll-Based Visibility Detection
  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="navbar-container position-absolute w-100 z-3">
        <NavHeader />
      </div>

      {/* Video Background */}
      <div className="video-container position-relative w-100">
        

      <div className="d-flex">
  <img src={pic13} alt="pic13" className="w-100 h-100" style={{ minHeight: "350px" }} />
</div>

        <div
          ref={textRef}
          className={`text-container position-absolute top-50 start-50 text-light fs-1 translate-middle text-center opacity-0 ${
            isVisible ? "opacity-100 transition-opacity" : ""
          }`}
        >
          <h5 className="fade-in-text">
            {language === "fr" ? "Le Stratège Consultants" : "The Strategist Consultants"}
          </h5>
        </div>
      </div>

      {/* Content Below Video */}
      <div className="position-relative z-3">
        <HeaderContents />
      </div>

    </>
  );
};

export default VidoeBackGround;
