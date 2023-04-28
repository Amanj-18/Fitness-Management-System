import React, { useEffect } from "react";
import "../styles/loader.css";
import { gsap } from "gsap/dist/gsap";
import gym from "../images/gym.mp4";

const Loader = () => {
  useEffect(() => {
    let h = window.innerHeight / 2;
    gsap.to(".up-load-half", {
      height: h,
      duration: 2.5,
      ease: "expo",
      delay: 0.6,
    });
    let h2 = window.innerHeight * 0.69;
    gsap.to(".video-cont-load", {
      height: h2,
      duration: 2,
      ease: "expo",
      delay: 1,
    });
    gsap.to(".left-word", {
      x: 0,
      duration: 2,
      ease: "power3",
      delay: 2.5,
    });
    gsap.to(".right-word", {
      x: 0,
      duration: 2,
      ease: "power3",
      delay: 2.5,
    });
    //none
    gsap.to(".left-word", {
      x: 1300,
      delay: 4.5,
      duration: 1,
    });
    gsap.to(".right-word", {
      x: -1300,
      delay: 4.5,
      duration: 1,
    });
    gsap.to(".video-cont-load", {
      height: 0,
      duration: 1.5,
      ease: "expo",
      delay: 5.5,
    });
    gsap.to(".up-load-half", {
      height: 0,
      duration: 1,
      ease: "power2",
      delay: 7,
    });
  });

  return (
    <>
      <div className="loader-cont pos-rel">
        <div className="pos-absf flex-all load-cont">
          <div className="video-load-cont pos-rel">
            <div className="left-word pos-abs">Enemies of Syntax</div>
            <div className="right-word pos-abs"> &nbsp;Get Fit quick </div>
            <div className="video-cont-load">
              <div className="video-inner-load">
                <video loop autoPlay muted>
                  <source src={gym} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="up-load-half"></div>
      </div>
    </>
  );
};

export default Loader;
