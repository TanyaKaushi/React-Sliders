import React, { useEffect } from "react";
import $ from "jquery";
import "../style/Slider3Style.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";

const Slider3 = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".slider-img").on("click", function () {
        $(".slider-img").removeClass("active");
        $(this).addClass("active");
      });
    });
  }, []);

  return (
    <div>
      <section className="slider-container">
        <div className="slider-images">
          <div className="slider-img">
            <img src={img1} alt="Mike" />
            <h1>Design</h1>
            <div className="details">
              <h2>The Future of AI</h2>
              <p>Predict upcoming trends in AI development, advancements in AI research, and potential impacts on various industries</p>
            </div>
          </div>

          <div className="slider-img">
            <img src={img2} alt="Mike" />
            <h1>Ethical</h1>
            <div className="details">
              <h2>Understanding the Basics of Artificial Intelligence</h2>
              <p>Define AI, discuss its applications, and introduce key concepts like machine learning and neural networks.</p>
            </div>
          </div>

          <div className="slider-img">
            <img src={img5} alt="Mike" />
            <h1 style={{marginLeft: "20px"}}>Data</h1>
            <div className="details">
              <h2>Ethical Considerations in AI Development</h2>
              <p>Discuss ethical dilemmas like bias in algorithms, privacy concerns, and the societal impact of AI technologies</p>
            </div>
          </div>

          <div className="slider-img active">
            <img src={img3} alt="Mike" />
            <h1>Basics</h1>
            <div className="details">
              <h2>Understanding the Basics of Artificial Intelligence</h2>
              <p>Define AI, discuss its applications, and introduce key concepts like machine learning and neural networks.</p>
            </div>
          </div>

          <div className="slider-img">
            <img src={img6} alt="Mike" />
            <h1 style={{marginLeft: "-20px"}}>Everyday</h1>
            <div className="details">
              <h2>AI in Everyday Life</h2>
              <p>Explore practical applications of AI such as virtual assistants, recommendation systems, and autonomous vehicles.</p>
            </div>
          </div>

          <div className="slider-img">
            <img src={img7} alt="Mike" />
            <h1 style={{marginLeft: "30px"}}>Dev</h1>
            <div className="details">
              <h2>Ethical Considerations in AI Development</h2>
              <p>Discuss ethical dilemmas like bias in algorithms, privacy concerns, and the societal impact of AI technologies</p>
            </div>
          </div>

          <div className="slider-img">
            <img src={img4} alt="Mike" />
            <h1 style={{marginLeft: "30px"}}>Life</h1>
            <div className="details">
              <h2>AI in Everyday Life</h2>
              <p>Explore practical applications of AI such as virtual assistants, recommendation systems, and autonomous vehicles.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider3;
