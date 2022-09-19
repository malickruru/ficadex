import React from "react";
import Row from "../../Component/Row";

function HomeBanner() {
  return (
    <Row
      AdditionalClass={"HomeBanner"}
      styles={{
        backgroundImage: "url('./image/Section1/img1.jpeg')",
      }}
    >
      <div className="overlay"></div>
      <div className="text ">
        <h1>Le groupe ficadex</h1>
        <p className="desktop-only">
          Le groupe FICADEX a été créé en France, en 1980, par Jacques COLIBERT.
          Nos prin­ci­pales acti­vités sont l’expertise comp­table, l’audit, le
          conseil, l’assistance et la formation.
        </p>
      </div>
    </Row>
  );
}

export default HomeBanner;
