import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = ({ start }) => {
  return (
    <div>
      <Carousel fade>
        {start.map((item, index) => (
          <Carousel.Item>
            <img className="d-block w-100" src={item} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>kdcskadksad askaskk askk akswl</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
