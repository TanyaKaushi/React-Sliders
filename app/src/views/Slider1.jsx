import React from "react";
import "../style/Slider1Style.css";

const Slider1 = () => {
  return (
    <div className="slider1">
      <div className="wrapper">
        <div className="container">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label for="c1" className="card">
            <div className="row">
              <div className="num">1</div>
              <div className="description">
                <h4>Understanding the Basics of Artificial Intelligence</h4>
                <p>
                  Define AI, discuss its applications, and introduce key
                  concepts like machine learning and neural networks.
                </p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c2" />
          <label for="c2" className="card">
            <div className="row">
              <div className="num">2</div>
              <div className="description">
                <h4>AI in Everyday Life</h4>
                <p>
                  Explore practical applications of AI such as virtual
                  assistants, recommendation systems, and autonomous vehicles.
                </p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c3" />
          <label for="c3" className="card">
            <div className="row">
              <div className="num">3</div>
              <div className="description">
                <h4>Ethical Considerations in AI Development</h4>
                <p>
                  Discuss ethical dilemmas like bias in algorithms, privacy
                  concerns, and the societal impact of AI technologies
                </p>
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c4" />
          <label for="c4" className="card">
            <div className="row">
              <div className="num">4</div>
              <div className="description">
                <h4>The Future of AI</h4>
                <p>
                  Predict upcoming trends in AI development, advancements in AI
                  research, and potential impacts on various industries
                </p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
