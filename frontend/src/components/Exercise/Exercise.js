import "./Excercise.css";
import React, { useState } from "react";
import Webcam from "react-webcam";
import WebCamModel from "./WebCamModel";
import { useTime } from "react-timer-hook";
import yoga_pose from "../../images/pose-yoga-1.gif";

function Excercise() {
  const [show, setShow] = useState(false);
  const { seconds, minutes, hours, ampm } = useTime({ format: "12-hour" });

  function handleSession() {
    setShow(!show);
  }

  if (!show) {
    return (
      <>
        <h1 className="text-center">Sukhasana</h1>
        <div className="pose-container">
          <div className="right">
            <Webcam
              style={{
                position: "relative",
                left: "50px",
                zIndex: "2",
                width: "360px",
                height: "220px",
              }}
            />
            <img src={yoga_pose} className="pose" alt="sukhasana" />
          </div>
          <div className="left">
            <div className="time">
              <h3>Session Time</h3>
              <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
              <span>{ampm}</span>
            </div>
            <p className="para">
              What is Sukhasana? Sukhasana, also referred to as easy pose, is a
              yoga asana performed in a seated position. Easy pose aids in
              opening the hips and aligning the spine, and its simplicity makes
              it suitable for yogis of all skill levels, including beginners.
            </p>
            <button className="btn btn-primary" onClick={handleSession}>
              Start Session
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="text-center">Sukhasana</h1>
      <div className="pose-container">
        <div className="right">
          <Webcam
            style={{
              position: "relative",
              left: "50px",
              zIndex: "2",
              width: "360px",
              height: "220px",
            }}
          />
          <img src={yoga_pose} className="pose" alt="sukhasana" />
        </div>
        <div className="left">
          <div className="time">
            <h1>Session Time</h1>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            <span>{ampm}</span>
          </div>
          <p>
            What is Sukhasana? Sukhasana, also referred to as easy pose, is a
            yoga asana performed in a seated position. Easy pose aids in opening
            the hips and aligning the spine, and its simplicity makes it
            suitable for yogis of all skill levels, including beginners.
          </p>
          <div className="skel">
            <WebCamModel />
          </div>
          <button className="btn btn-primary" onClick={handleSession}>
            End Session
          </button>
        </div>
      </div>
    </>
  );
}

export default Excercise;
