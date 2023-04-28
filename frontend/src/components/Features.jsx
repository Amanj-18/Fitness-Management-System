import React, { useState } from "react";
import "../styles/features.css";
import middle from "../images/middle.gif";
import food from "../images/food.gif";
import calorie from "../images/calorie.gif";
import rem from "../images/rem.gif";
import on from "../images/on.gif";

const Features = () => {
  const [image, setImage] = useState(middle);
  const [text, setText] = useState("Exercise");
  let arr = [middle, food, on, calorie, rem];
  let mouseenter = (nio, text) => {
    // setobj.no

    setImage(arr[nio - 1]);
    setText(text);
  };
  return (
    <>
      <div className="f-cont flex-all pos-rel">
        <div className="diet-text">{text}</div>

        <div className="pos-rel">
          <div
            className="pos-abs text-box flex-all ft"
            onMouseEnter={() => {
              mouseenter(1, "Exercise");
            }}
          >
            Exercise
          </div>
          <div
            className="pos-abs text-box flex-all st"
            onMouseEnter={() => {
              mouseenter(2, "Diet");
            }}
          >
            Diet
          </div>
          <div
            className="pos-abs text-box flex-all tt"
            onMouseEnter={() => {
              mouseenter(3, "Mentorship");
            }}
          >
            Mentorship
          </div>
          <div
            className="pos-abs text-box flex-all fot"
            onMouseEnter={() => {
              mouseenter(4, "Calorie");
            }}
          >
            Calorie
          </div>
          <div
            className="pos-abs text-box flex-all fit"
            onMouseEnter={() => {
              mouseenter(5, "Reminder");
            }}
          >
            Reminder
          </div>

          <img className="mid-img" src={image} />
        </div>
      </div>
    </>
  );
};

export default Features;
