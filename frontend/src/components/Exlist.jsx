import React, { useEffect } from "react";
import "../styles/exlist.css";
import first from "../images/firstp.gif";
import second from "../images/secondp.gif";
import third from "../images/thirdp.gif";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";

const Exlist = () => {
  useEffect(() => {
    let yo = -window.screen.height * 2;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".ex-list", {
      scrollTrigger: {
        trigger: ".exlist-cont",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers:true
      },
      y: yo,
    });
    gsap.to(".left-abs", {
      scrollTrigger: {
        trigger: ".exlist-cont",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers:true
      },
      y: yo,
    });
    gsap.to(".circle-cont-ex", {
      scrollTrigger: {
        trigger: ".exlist-cont",
        start: "33% 100%",
        end: "33% 50%",
        scrub: 1,
        // markers:true
      },
      backgroundColor: "#d992ce",
    });
    gsap.to(".circle-cont-ex", {
      scrollTrigger: {
        trigger: ".exlist-cont",
        start: "66% 100%",
        end: "66% 50%",
        scrub: 1,
        // markers:true
      },
      backgroundColor: "white",
    });
  });

  let exercises = [
    {
      image: first,
      title: "Push ups",
      p: "Push-ups are a convenient exercise that you can do anywhere. They don't need equipment or a gym membership. You can also adjust them to meet your own physical ability or to target specific muscles.",
    },
    {
      image: second,
      title: "Sukha Sana",
      p: "What is Sukhasana? Sukhasana, also referred to as easy pose, is a yoga asana performed in a seated position. Easy pose aids in opening the hips and aligning the spine, and its simplicity makes it suitable for yogis of all skill levels, including beginners.",
    },
    {
      image: third,
      title: "Sava Sana",
      p: "Savasana, also known as corpse pose, is a restorative yoga pose that involves lying on your back and letting go of all physical and mental tension. It is typically done at the end of a yoga practice as a way to relax and restore the body and mind.",
    },
  ];

  return (
    <>
      <div className="exlist-cont">
        <div className="exlist-inner-cont">
          <div className="ex-left">
            <div className="left-abs">
              {exercises.map((exercise, index) => {
                return (
                  <div className="left-full" key={index}>
                    <Link to="/sukhasana">
                      <div className="left-title">{exercise.title}</div>
                    </Link>
                    <div className="left-p">{exercise.p}</div>
                    <Link to="/sukhasana">
                      <button className="btn" style={{ position: "relative", left: "200px " }}>Start</button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="ex-right flex-all">
            <div className="circle-cont-ex">
              <div className="ex-list">
                {exercises.map((exercise, index) => {
                  return (
                    <div className="list flex-all" key={index}>
                      <img src={exercise.image} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exlist;
