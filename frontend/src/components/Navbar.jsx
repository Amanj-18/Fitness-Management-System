import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
// import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Modal from "./Modal";
import "./Navbar.css";
// import water from "../images/5922-water-loading.gif";
// import meditate from "../images/meditate.gif";
// import meal from "../images/104654-healty-diet.gif";

const Navbar = ({ moveIndex }) => {
  const [show, setShow] = React.useState(false);

  if (!moveIndex) {
    moveIndex = 0;
  }
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let func = () => {
      let navbar = document.getElementsByClassName("navbar")[0];
      window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
          document
            .getElementsByClassName("navbar")[0]
            .classList.add("scrolled-navbar");
        } else {
          document
            .getElementsByClassName("navbar")[0]
            .classList.remove("scrolled-navbar");
        }
      });
    };
    func();
  });

  let navmove = (i) => {
    let back = document.getElementsByClassName("menu-back")[0];
    back.style.left = `${(i + 1) * 120}px`;
  };

  return (
    <>
      <div className="navbar-hide">
        <div
          id="nav-icon3"
          onClick={() => {
            setOpen(!open);
          }}
          className={open ? `open` : null}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar" id="navbar">
        <div className="navbar-left"></div>
        <div className="navbar-right">
          <div
            className="navrel pos-rel"
            style={open ? { height: "265px" } : { height: "0px" }}
          >
            <Link to="/home">
              <div
                className="nav nav1"
                onMouseEnter={() => {
                  navmove(0);
                }}
              >
                Home
              </div>
            </Link>
            <Link to="/diet">
              <div
                className="nav nav1"
                onMouseEnter={() => {
                  navmove(0);
                }}
              >
                Diet
              </div>
            </Link>
            <Link to="/excercise">
              <div
                className="nav nav2"
                onMouseEnter={() => {
                  navmove(1);
                }}
              >
                Exercise
              </div>
            </Link>

            <a
              href="http://localhost:5000/"
              target="_blank"
              rel="noopener noreferrer"
            >
               <div
                className="nav nav3"
                onMouseEnter={() => {
                  navmove(2);
                }}
              >
                Fitness Tracker
              </div>
            </a>

            {/* <Link to="">
             
            </Link> */}

            {/* <Link to="/room">
              <div
                className="nav nav4"
                onMouseEnter={() => {
                  navmove(3);
                }}
              >
                Video Room
              </div>
            </Link> */}
            <div
              className="menu-back"
              style={{ left: moveIndex * 120 + "px" }}
            ></div>
          </div>
          {/* <div className="nav-icons-cont">
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              <div className="flex-all">
                <FaRegBell />
                <span class="badge badge-pill gradient-2">3</span>
              </div>
            </button>
          </div> */}
        </div>
      </div>
      {/* 
      <Modal show={show} onClose={() => setShow(false)}>
        <div>
          <div className="dropdown-content-heading d-flex justify-content-between">
            <span className="">You have New Notifications</span>
            <a href="" className="d-inline-block">
              <span className="badge badge-pill gradient-2">3</span>
            </a>
          </div>
          <div className="dropdown-content-body">
            <ul>
              <li>
                <img
                  src={water}
                  style={{
                    width: "28px",
                    position: "relative",
                    left: "-100px",
                    top: "40px",
                  }}
                />
                <div className="notification-content">
                  <h6 className="notification-heading">
                    Have a glass of water
                  </h6>
                  <span className="notification-text">
                    Last drank since an hour
                  </span>
                </div>
              </li>
              <li>
                <img
                  src={meditate}
                  style={{
                    width: "50px",
                    position: "relative",
                    left: "-100px",
                    top: "40px",
                  }}
                />
                <div className="notification-content">
                  <h6 className="notification-heading">Meditate for a while</h6>
                  <span className="notification-text">
                    Calm youself and relax
                  </span>
                </div>
              </li>
              <li>
                <img
                  src={meal}
                  style={{
                    width: "40px",
                    position: "relative",
                    left: "-100px",
                    top: "40px",
                  }}
                />
                <div className="notification-content">
                  <h6 className="notification-heading">
                    Its time for your meal
                  </h6>
                  <span className="notification-text">Have a healthy meal</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Modal> */}
    </>
  );
};

export default Navbar;
