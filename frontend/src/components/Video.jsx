import React, { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "../styles/video.css";
import gym from "../images/gym.mp4";

const Video = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let t1 = gsap.timeline({
      // yes, we can add it to an entire timeline!
      scrollTrigger: {
        trigger: ".land-video-cont",
        // pin: true,   // pin the trigger element while active
        start: "top top",
        endTrigger: ".land-video-cont", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers:true
      },
    });

    // let a = window.screen.height*2.5
    // gsap.to('.land-video-cont',{
    //    // yes, we can add it to an entire timeline!
    //    scrollTrigger: {
    //     trigger: ".land-video-cont",
    //     // pin: true,   // pin the trigger element while active
    //     start: "bottom bottom",
    //     markers:true
    // }
    // ,
    // y:-a

    // })
    let a = 0.5;
    let h = -window.innerHeight * 0.1;

    if (window.innerWidth < 700) {
      a = 1;
      // h = -window.innerHeight*0.1;
    }
    t1.to(".video", {
      scale: a,
    });

    gsap.to(".center-text", {
      scrollTrigger: {
        trigger: ".land-video-cont",
        // pin: true,   // pin the trigger element while active
        start: "top top",
        endTrigger: ".land-video-cont", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // markers:true
      },
      scale: 0.5,
    });
    let v = window.innerHeight;
    // gsap.to(".land-text",{
    //     scrollTrigger: {
    //         trigger: ".land-video-cont",
    //         start: `bottom-=${v}px bottom`,
    //         end: "bottom 96%",
    //         scrub:true,
    //     },
    //     opacity:1,
    //     y:h
    // })

    // ScrollTrigger.create({
    //     trigger: ".land-video-cont",
    //     start: "top top",
    //     endTrigger: ".land-video-cont",
    //     end: "bottom top",
    //     // onToggle: self => console.log("toggled, isActive:", self.isActive),
    //     // onUpdate: self => {
    //     //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    //     // }
    //     pin:true
    //   });
  }, []);
  return (
    <>
      <div className="land-video-cont">
        <div className="navbar-land-cont">
          <div className="navbar-sticky-cont"></div>
        </div>
        <div className="video-inner">
          <div className="pos-rel video-cont">
            <video loop muted autoPlay className="video">
              <source src={gym} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
