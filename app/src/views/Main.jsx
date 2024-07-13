import React, { useState } from "react";
import "../style/MainStyle.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { RiMenu2Line } from "react-icons/ri";

const Main = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="main">
        <div className="menu-btn" variant="primary" onClick={handleShow}>
          <RiMenu2Line onClick={handleShow} />
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ marginLeft: "20px" }}>
              Slider Examples
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="slide-nav">
              <div className="link">
                <a href="/">Slide 1</a>
              </div>
              <div className="link">
                <a href="/slider2">Slide 2</a>
              </div>
              <div className="link">
                <a href="/slider3">Slide 3</a>
              </div>
              <div className="link">
                <a href="/slider4">Slide 4</a>
              </div>
              <div className="link">
                <a href="/slider5">Slide 5</a>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Main;
