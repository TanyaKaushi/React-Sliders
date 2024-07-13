import React, { useState, useEffect } from "react";
import "../style/Slider4Style.css";
import strawberry from "../assets/fruit_strawberry.png";
import Avocado from "../assets/fruit_avocado.png";
import Orange from "../assets/fruit_orange.png";

const Slider4 = () => {
  const [active, setActive] = useState(0);
  const [leftMockup, setLeftMockup] = useState(0);
  const items = [
    { name: "Strawberry", img: strawberry, color: "#EA3D41" },
    { name: "Avocado", img: Avocado, color: "#2D5643" },
    { name: "Orange", img: Orange, color: "#E7A043" },
  ];
  const count = items.length;
  const leftEachItem = 100 / (count - 1);

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => {
      clearInterval(refreshInterval);
    };
  }, [active, leftMockup]);

  const handleNextClick = () => {
    setActive((prevActive) => (prevActive >= count - 1 ? 0 : prevActive + 1));
    setLeftMockup((prevLeftMockup) => prevLeftMockup + leftEachItem);
  };

  const handlePrevClick = () => {
    setActive((prevActive) => (prevActive <= 0 ? count - 1 : prevActive - 1));
    setLeftMockup((prevLeftMockup) => prevLeftMockup - leftEachItem);
  };

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    if (carousel) {
      if (active === 0) {
        carousel.classList.remove("right");
      } else {
        carousel.classList.add("right");
      }
    }
  }, [active]);

  useEffect(() => {
    const mockup = document.querySelector(".mockup");
    if (mockup) {
      mockup.style.setProperty("--left", leftMockup + "%");
    }
  }, [leftMockup]);

  return (
    <div>
      <div className="carousel">
        <div className="list">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${active === index ? "active" : ""} ${
                active !== index ? "hidden" : ""
              }`}
            >
              <div className="content" style={{ color: item.color }}>
                {item.name}
              </div>
              <img src={item.img} className="fruit" alt={item.name} />
            </div>
          ))}
        </div>
        <div className="leaves"></div>
        <div className="mockup"></div>
        <div className="shadow"></div>
        <div className="arrow">
          <button id="prev" onClick={handlePrevClick}></button>
          <button id="next" onClick={handleNextClick}></button>
        </div>
      </div>
    </div>
  );
};

export default Slider4;
