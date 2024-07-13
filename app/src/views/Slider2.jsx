import React, { useEffect } from "react";
import "../style/Slider2Style.css";

const Slider2 = () => {
  useEffect(() => {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const slide = document.querySelector(".slide");

    const moveNext = () => {
      const items = document.querySelectorAll(".item");
      slide.appendChild(items[0]);
    };

    const movePrev = () => {
      const items = document.querySelectorAll(".item");
      slide.prepend(items[items.length - 1]);
    };

    next.addEventListener("click", moveNext);
    prev.addEventListener("click", movePrev);

    return () => {
      next.removeEventListener("click", moveNext);
      prev.removeEventListener("click", movePrev);
    };
  }, []);

  return (
    <div className="slider2">
      <div className="container">
        <div className="slide">
          <div for="c1" className="item">
            <div className="content">
              <div className="name">
                Understanding the Basics of Artificial Intelligence
              </div>
              <div className="des">
                Define AI, discuss its applications, and introduce key concepts
                like machine learning and neural networks.
              </div>
              <button>See More</button>
            </div>
          </div>

          <div for="c2" className="item">
            <div className="content">
              <div className="name">AI in Everyday Life</div>
              <div className="des">
                Explore practical applications of AI such as virtual assistants,
                recommendation systems, and autonomous vehicles.
              </div>
              <button>See More</button>
            </div>
          </div>

          <div for="c3" className="item">
            <div className="content">
              <div className="name">
                Ethical Considerations in AI Development
              </div>
              <div className="des">
                Discuss ethical dilemmas like bias in algorithms, privacy
                concerns, and the societal impact of AI technologies
              </div>
              <button>See More</button>
            </div>
          </div>

          <div for="c4" className="item">
            <div className="content">
              <div className="name">The Future of AI</div>
              <div className="des">
                Predict upcoming trends in AI development, advancements in AI
                research, and potential impacts on various industries
              </div>
              <button>See More</button>
            </div>
          </div>

          <div for="c5" className="item">
            <div className="content">
              <div className="name">
                Understanding the Basics of Artificial Intelligence
              </div>
              <div className="des">
                Predict upcoming trends in AI development, advancements in AI
                research, and potential impacts on various industries
              </div>
              <button>See More</button>
            </div>
          </div>

          <div for="c6" className="item">
            <div className="content">
              <div className="name">The Future of AI</div>
              <div className="des">
                Discuss ethical dilemmas like bias in algorithms, privacy
                concerns, and the societal impact of AI technologies
              </div>
              <button>See More</button>
            </div>
          </div>
        </div>

        <div className="button">
          <button className="prev">
            <i class="bi bi-chevron-right"></i>
          </button>
          <button className="next">
            <i class="bi bi-chevron-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
