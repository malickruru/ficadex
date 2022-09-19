import React, { useEffect } from "react";
import Row from "../../Component/Row";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Section1(props) {
  useEffect(() => {
    handleChange(0);
  }, []);

  const reset = () => {
    document.querySelectorAll(".th").forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translate(80px, 6em)";
    });
    document.querySelectorAll(".tp").forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translate(80px, 20em)";
    });
  };

  const handleChange = (selectedIndex) => {
    reset();
    document.querySelector(".th-" + selectedIndex).style.opacity = "1";
    document.querySelector(".th-" + selectedIndex).style.transform =
      "translate(60px, 6em)";
    document.querySelector(".tp-" + selectedIndex).style.opacity = "1";
    document.querySelector(".tp-" + selectedIndex).style.transform =
      "translate(60px, 20em)";
  };

  return (
    <Row id={"section1"}>
      <Carousel
        autoPlay
        interval={4000}
        infiniteLoop
        showThumbs={false}
        animationHandler="fade"
        swipeable={false}
        onChange={handleChange}
        showStatus={false}
      >
        <div className="s1_slider">
          <img src="./image/Section1/img1.jpeg" />
          <div className="overlay"></div>
          <h1 className="th th-0">La puissance d'un groupe</h1>
          <p className="tp tp-0">
            FICADEX vous accompagne partout et vous permet de vous développer
            grâce à ses bureaux en France, en Europe, au Moyen Orient et en
            Afrique.
          </p>
        </div>
        <div className="s1_slider">
          <img src="./image/Section1/img2.webp" />
          <div className="overlay"></div>
          <h1 className="th th-1">Une présence international</h1>
          <p className="tp tp-1">
            FICADEX vous accompagne partout et vous permet de vous développer
            grâce à ses bureaux en France, en Europe, au Moyen Orient et en
            Afrique.
          </p>
        </div>
        <div className="s1_slider">
          <img src="./image/Section1/img3.webp" />
          <div className="overlay"></div>
          <h1 className="th th-2">Indépendance et qualité d'expertise</h1>
          <p className="tp tp-2">
            FICADEX vous accompagne partout et vous permet de vous développer
            grâce à ses bureaux en France, en Europe, au Moyen Orient et en
            Afrique.
          </p>
        </div>
      </Carousel>
    </Row>
  );
}

export default Section1;
