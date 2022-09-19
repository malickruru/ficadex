import React, { useEffect, useRef } from "react";
import { flexRowCenter } from "../../Style/Flex";
import { Specificite } from "../../Utils/Specificite";

function HomeSpecialite(props) {
  const myRef = useRef(null);
  let width, toLeft, toRight;

  useEffect(() => {
    width = parseInt(myRef.current.clientWidth);
    toLeft = width < 768 ? -width : -(width / 4);
    toRight = width < 768 ? width : width / 4;
  }, []);

  const scrollLeft = () => {
    document.getElementById("HomeSpecialite").scrollBy({
      top: 0,
      left: toLeft,
      behavior: "smooth",
    });
    console.log(width);
  };

  const scrollRight = () => {
    document.getElementById("HomeSpecialite").scrollBy({
      top: 0,
      left: toRight,
      behavior: "smooth",
    });
    console.log(toRight);
  };

  const changeBg = (img) => {
    document.getElementById("HomeSpecialite").style.backgroundImage =
      "url(" + img + ")";
  };

  return (
    <>
      <div id="HomeSpecialite" ref={myRef}>
        {Specificite.map((item, idx) => {
          return (
            <div key={idx} onMouseOver={() => changeBg(item.src)}>
              <h3>{item.nom}</h3>
              <p className="HS-height0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
              <div className="HS-width0">
                {" "}
                <span>
                  Découvrir
                </span> <i className="bi bi-arrow-right"></i>{" "}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" arrowMobile" style={flexRowCenter}>
        <div style={flexRowCenter}>
          <i className="bi bi-arrow-left  " onClick={scrollLeft}></i>
        </div>
        <div style={flexRowCenter}>
          <i className="bi bi-arrow-right" onClick={scrollRight}></i>
        </div>
      </div>
    </>
  );
}

export default HomeSpecialite;
