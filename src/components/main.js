import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import("./main.css");

const Main = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block m-auto w-20px"
            style={{height: "500px"}}
            src={require("../assets/slider1.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block m-auto w-20px"
            style={{ height: "500px" }}
            src={require("../assets/slider2.png")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block m-auto w-20px"
            style={{ height: "500px" }}
            src={require("../assets/slider3.png")}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="d-grid gap-2">
        <Button variant="outline-secondary" href="/catalog">
          КУПИТЬ СЕЙЧАС 
        </Button>{" "}
      </div>
   
    </>
  );
};

export default Main;
