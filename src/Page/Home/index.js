import React, { useEffect } from "react";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import ScrollProp from "../../Utils/ScrollProp";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

function Home(props) {
  useEffect(() => {
    ScrollProp();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Section1 />
      </div>
      <div className="container">
        <Section2 />
      </div>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#910b0b" }}
      >
        <Section3 />
      </div>
      <div className="container">
        <Section4 />
      </div>
      <div className="container-fluid">
        <Section5 />
        <Section6 />
        <Section7 />
      </div>
      <Footer />
    </>
  );
}

export default Home;
