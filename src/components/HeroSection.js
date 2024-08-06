import React, { useEffect, useRef, useState } from "react";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import backgroundImageNew1 from "../assets/herobackground.png";

export default function HeroSection({ isDarkMode }) {
  const titleRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [top, setTop] = useState(450);
  const { scrollY } = useScroll({
    target: titleRef,
    scale: ["end end", "start start"],
  });

  const [belowTextVisibility, setbelowTextVisibility] = useState(true);
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);

    let element = document.getElementById("nav-body");

    if (latest > 175) {
      if (isDarkMode) {
        element.style.background = "black";
      } else {
        element.style.background = "white";
      }
    } else {
      element.style.background = "transparent";
    }
    if (latest === 0) {
      setHeight(0);
    }

    if (latest > 280) {
      setbelowTextVisibility(false);
    } else {
      setbelowTextVisibility(true);
    }
    if (latest > 720) {
      setbelowTextVisibility(true);
    }
    if (latest > 34 && latest < 190) {
      setHeight(latest);
    }
    if (300 - latest > 200) {
      setTop(400 - latest);
      let title = document.getElementById("company-title");
      let nav_logo = document.getElementById("nav_logo");
      // if(300-latest < 204)
      // title.style.color='white'
    }
    let title = document.querySelector("#company-title");
    let fixedTitle = document.querySelector("#company-title-fixed");
    let nav_logo = document.querySelector("#nav_logo");

    if (latest > 279.2) {
      fixedTitle.style.display = "block";
      title.style.display = "none";
      nav_logo.style.opacity = 0;
    } else {
      fixedTitle.style.display = "none";
      title.style.display = "block";
      nav_logo.style.opacity = 1;
    }
  });

  useEffect(() => {
    console.log("changedheight", height);
    let element = document.getElementById("nav-body");
    if (height > 170 || window.pageYOffset > 200) {
      if (isDarkMode) {
        element.style.background = "black";
      } else {
        element.style.background = "white";
      }
    } else {
      element.style.background = "transparent";
    }
  }, [isDarkMode]);
  return (
    <div
      className="hero-container"
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${backgroundImageNew1})`,
        backgroundColor: isDarkMode ? "black" : "white",
        height: 780,
      }}
    >
      <div
        style={{ width: `${100 - height}%`, left: "-6%" }}
        className="absolute"
      >
        <svg
          style={{}}
          width="100%"
          height="100%"
          viewBox="0 0 1180 546"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_66_2863)">
            <path
              d="M399 478L17.5 -5.5L103.5 -18.5L1112 478L743 463.5L399 478Z"
              fill="url(#paint0_linear_66_2863)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_66_2863"
              x="-50.5"
              y="-86.5"
              width="1230.5"
              height="632.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="34"
                result="effect1_foregroundBlur_66_2863"
              />
            </filter>
            <linearGradient
              id="paint0_linear_66_2863"
              x1="755.5"
              y1="5.99999"
              x2="755.5"
              y2="478"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4A4A4A" />
              <stop offset="1" stop-color="#4A4A4A" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <motion.div className="logo flex-col flex items-center text-center w-9/12 m-auto ">
        <div style={{ height: 600 - height }}></div>
        <p
          className={`company-title cursor-pointer px-6 flex flex-col items-center content-center  ${
            isDarkMode ? "text-white" : "text-black bg-white"
          } nav-section company-title-fixed`}
          id="company-title-fixed"
          ref={titleRef}
          style={{
            display: "flex",
            fontSize: 34,
            top: 27,
            position: "fixed",
            display: "none",
            fontWeight: "100",
            fontFamily: "Rymaneco",
            textShadow: "rgb(19, 2, 2) -1px 1px 3px",
          }}
        >
          <img
            style={{ width: "50px", left: "-25px", position: "absolute" }}
            src={require(isDarkMode
              ? "../assets/logowhite.png"
              : "../assets/logoblack.png")}
            alt=""
          />
          <span>DayDeck</span>
        </p>
        <h1
          className={`company-title  flex flex-row relative ${
            isDarkMode ? "text-white" : "text-black"
          }  nav-section`}
          id="company-title"
          ref={titleRef}
          style={{
            fontSize: 190 - height + 34,
            top: top,
            fontWeight: "100",
            fontFamily: "Rymaneco",
          }}
        >
          DayDeck
          <sub
            className=""
            style={{
              fontSize: "10px",
              position: "absolute",
              width: "200px",
              right: `${-height / 10 + "%"}`,
              top: "90%",
            }}
          >
            your impACT ally
          </sub>
        </h1>
        {belowTextVisibility && (
          <p
            className={`text-3xl font-[400] font-satoshi sub-title ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        )}
        {!belowTextVisibility && (
          <p
            className={`text-lg fixed text-center font-Satoshi top-14 w-[50%] font-regular sub-title ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        )}

        <div style={{ height: 500 + height }}></div>
      </motion.div>
    </div>
  );
}
