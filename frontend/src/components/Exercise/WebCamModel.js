import Webcam from "react-webcam";
import * as posenet from "@tensorflow-models/posenet";
import { drawKeypoints, drawSkeleton } from "./utils";
import React, { useEffect, useRef, useState } from "react";

const WebCamModel = () => {
  var county = 0;
  const [isCount, setIsCount] = useState(false);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  useEffect(() => {}, [isCount]);

  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 240, height: 200 },
      scale: 0.8,
    });
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Make Detections
      const pose = await net.estimateSinglePose(video);
      console.log(pose);
      console.log(pose["keypoints"][5]["position"]["x"]);
      console.log(pose["keypoints"][6]["position"]["x"]);
      if (
        pose["keypoints"][5]["position"]["y"] -
          pose["keypoints"][6]["position"]["y"] <=
          20 &&
        pose["keypoints"][5]["position"]["x"] -
          pose["keypoints"][6]["position"]["x"] <=
          360
      ) {
        console.log("true");
        county += 1;
        console.log(county);
      } else {
        console.log("false");
        if (county > 0) {
          county -= 1;
        }
      }
      if (county === 100) {
        setIsCount(true);
        county = 0;
        console.log("perfect");
      }

      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
    }
  };

  const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
    const ctx = canvas.current.getContext("2d");
    canvas.current.width = videoWidth;
    canvas.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.6, ctx);
    drawSkeleton(pose["keypoints"], 0.7, ctx);
  };
  runPosenet();
  return (
    <div>
      {isCount && (
        <div className="success">You have successfully completed the Yoga</div>
      )}
      {!isCount && (
        <div className="cam">
          <Webcam
            ref={webcamRef}
            style={{
              position: "relative",
              left: "40px",
              zIndex: "8",
              width: "240px",
              height: "200px",
            }}
          />
          <canvas
            ref={canvasRef}
            style={{
              position: "relative",
              left: "-210px",
              zIndex: "9",
              width: "240px",
              height: "200px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default WebCamModel;
