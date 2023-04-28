import "../styles/landing.css";
import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import home from "../images/home.png";
import Video from "./Video";
import Features from "./Features";
import Process from "./Process";

const Landing = () => {
  useEffect(() => {
    gsap.to(".sin", {
      y: 0,
      duration: 1,
      ease: "power3",
      stagger: 0.2,
    });

    window.addEventListener("scroll", function () {
      // console.log("Inside Event Scroll");
      let value = window.scrollY;
      let lo = document.getElementsByClassName("divl");
      Array.from(lo).forEach((dot, index) => {
        dot.style.transform = `translateY(-${
          (value / 10) * (index + 0.001)
        }px)`;
      });
      // text.style.top = 50 + value * -0.02 + "%";
      // bird2.style.top = value * -1.5 + "px";
      // bird2.style.left = value * 2 + "px";
      // bird1.style.top = value * -1.5 + "px";
      // bird1.style.left = value * -5 + "px";
      // rocks.style.top = value * 0.08 + "px";
      // forest.style.top = value * 0.25 + "px";
    });
  });

  return (
    <>
      <div className="land-cont">
        <div className="text-cont">
          <div>G</div>
          <div className="divl">e</div>
          <div className="divl">t</div>
          <div className="divl">F</div>
          <div className="divl">i</div>
          <div className="divl">t</div>
        </div>
        <div className="sp">
          <div className="s pos-rel">
            <div className="pos-absf sin"> The Perfect application</div>
          </div>
          <div className="s pos-rel">
            <div className="pos-absf sin"> for your fitness</div>
          </div>
        </div>
      </div>
      <div className="main-img-cont">
        <img src={home} />
      </div>
      <Video />
      <Features />
      <Process />
    </>
  );
};

export default Landing;
