import React from "react";
import Row from "../../Component/Row";
import { flexRowAround, flexRowCenter } from "../../Style/Flex";

function Section7() {
  return (
    <>
      <Row styles={{ backgroundColor: "#910b0b" }} AdditionalClass="py-5">
        <h1 className="text-center" style={{ color: "#fff" }}>
          Nos Partenaires
        </h1>
      </Row>
      <Row AdditionalClass="py-2" styles={{ backgroundColor: "#910b0b" }}>
        <div className="col-sm-6" style={flexRowCenter}>
          <img src="http://ficadex.com/wp-content/uploads/2016/03/efpmo-logo.png" />
        </div>
        <div className="col-sm-6" style={flexRowCenter}>
          <img src="http://ficadex.com/wp-content/uploads/2016/03/satmos_logo.jpg" />
        </div>
      </Row>
    </>
  );
}

export default Section7;
