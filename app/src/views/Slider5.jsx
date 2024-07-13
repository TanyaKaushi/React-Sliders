import React, { useState, useEffect } from "react";
import "../style/Slider5Style.css";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";

const Slider5 = () => {
  const items = [
    {
      img: img7,
      title: "Understanding the Basics of Artificial Intelligence",
      description:
        "Define AI, discuss its applications, and introduce key concepts like machine learning and neural networks.",
    },
    {
      img: img3,
      title: "AI in Everyday Life",
      description:
        "Explore practical applications of AI such as virtual assistants, recommendation systems, and autonomous vehicles.",
    },
    {
      img: img4,
      title: "Ethical Considerations in AI Development",
      description:
        "Discuss ethical dilemmas like bias in algorithms, privacy concerns, and the societal impact of AI technologies",
    },
    {
      img: img6,
      title: "The Future of AI",
      description:
        "Predict upcoming trends in AI development, advancements in AI research, and potential impacts on various industries",
    },
    {
      img: img5,
      title: "AI in Everyday Life",
      description:
        "Explore practical applications of AI such as virtual assistants, recommendation systems, and autonomous vehicles.",
    },
  ];

  const [itemActive, setItemActive] = useState(0);
  const countItem = items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setItemActive((prevActive) => (prevActive + 1) % countItem);
    }, 5000);

    return () => clearInterval(interval);
  }, [countItem]);

  const showSlider = (index) => {
    setItemActive(index);
  };

  return (
    <div>
      <div className="slider">
        <div className="list">
          {items.map((item, index) => (
            <div
              className={`item ${index === itemActive ? "active" : ""}`}
              key={index}
            >
              <img src={item.img} alt={item.title} />
              <div className="content">
                <p></p>
                <h2>{item.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, neque? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum, ex.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <div
            id="prev"
            onClick={() =>
              setItemActive(itemActive === 0 ? countItem - 1 : itemActive - 1)
            }
          ></div>
          <div
            id="next"
            onClick={() => setItemActive((itemActive + 1) % countItem)}
          ></div>
        </div>

        <div className="thumbnail">
          {items.map((item, index) => (
            <div
              className={`item ${index === itemActive ? "active" : ""}`}
              key={index}
              onClick={() => showSlider(index)}
            >
              <img src={item.img} alt={`Thumbnail ${index}`} />
              <div className="content"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider5;
