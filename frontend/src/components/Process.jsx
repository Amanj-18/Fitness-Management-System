import React, { useEffect } from "react";
import "../styles/process.css";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoIosGitNetwork } from "react-icons/io";
import { VscServerProcess } from "react-icons/vsc";
import { BiTimeFive } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { BsSunrise } from "react-icons/bs";

const Process = () => {
  useEffect(() => {
    let func = () => {
      let process = document.getElementsByClassName("process-bg")[0];
      let dots = document.getElementsByClassName("dots");
      let logo = document.getElementsByClassName("process-logo");
      let title = document.getElementsByClassName("pro-title");
      let bool = true;
      window.addEventListener("scroll", () => {
        let top = process.getBoundingClientRect().y;
        console.log(top);
        if (top <= window.screen.height / 3) {
          if (bool) {
            Array.from(dots).forEach((dot, index) => {
              dot.classList.add("dota" + index);
            });
            setTimeout(() => {
              Array.from(logo).forEach((dot, index) => {
                dot.style.animation = `expand .4s ease ${index * 0.3}s 1 both`;
              });
              setTimeout(() => {
                Array.from(title).forEach((dot, index) => {
                  dot.style.animation = `titleexpand .3s ease ${
                    index * 0.3
                  }s 1 both`;
                });
              }, 1800);
              bool = false;
            }, 2000);

            setTimeout(() => {
              bool = false;
            }, 3500);
          }
        }
      });
    };
    func();
  });

  let po = () => {
    let dots = document.getElementsByClassName("dots");
    let logo = document.getElementsByClassName("process-logo");

    Array.from(dots).forEach((dot, index) => {
      dot.classList.toggle("dota" + index);
    });
    Array.from(logo).forEach((dot, index) => {
      dot.style.transform = "scale(0)";
    });
  };
  const process = [
    {
      title: "Wake up",
      p: "The one who wakes up early in the morning and sleps",
      logo: <BsSunrise />,
    },
    {
      title: "Drink",
      p: "Ideation is a very necessary step to optimize the process. An idea must be well-versed with the research",
      logo: <HiOutlineLightBulb />,
    },
    {
      title: "Strategy",
      p: "Strategic planning is a crucial step to deliver the projects on time. Never underestimate the strategy makers.",
      logo: <IoIosGitNetwork />,
    },
    {
      title: "Process",
      p: "Processing the project with detailed research, ideas, and pre-planning is always a cherry on the cake.",
      logo: <VscServerProcess />,
    },
    {
      title: "Time",
      p: "We value your time. Playing with client’s deadlines is not our area. Timeline delivery is our First priority.",
      logo: <BiTimeFive />,
    },
    {
      title: "Goal",
      p: "Our goal-oriented vision always gives us fruitful results. Connect with us to achieve your design goals.",
      logo: <BsCheckCircle />,
    },
  ];
  return (
    <>
      <div className="process-bg">
        <div className="process-bakchod">
          <div className="process-title">A perfect routine</div>
          <div className="process-p">
            Fitness is not about being better than someone else. It's about
            being better than you used to be.
          </div>
          <div className=" process-cont">
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dash-cont">
              <div className="dash"></div>
            </div>
            {process.map((process, index) => {
              return (
                <div className={`process-div ${"pro" + index}`} key={index}>
                  <div className="process-logo flex-all">{process.logo}</div>
                  <div className="pro-title">{process.title}</div>
                  <div className="pro-p">{process.p}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
