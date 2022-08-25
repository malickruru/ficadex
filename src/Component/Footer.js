import React from "react";
import { flexColumn } from "../Style/Flex";
import Row from "./Row";

function Footer(props) {
  return (
    <div className="container-fluid">
      <Row
        styles={{ backgroundColor: "#222222", color: "#fff", padding: "30px" }}
      >
        <div className="col-sm-6 px-5">
          <h6>FICADEX</h6>
          <br />
          <span>TOUR CIT</span>
          <br />
          <span>3, Rue de l'Arrivée</span>
          <br />
          <span>75749 PARIS Cedex 15</span>
          <br />
          <span>Tél : 04 92 60 77 10</span>
          <br />
          <span>contact@ficadex.com</span>
        </div>
        <div className="col-sm-6" style={flexColumn}>
          <img src="./image/ficadex_groupe.png" />
        </div>
      </Row>
      <Row
        styles={{
          backgroundColor: "#1f1f1f",

          color: "#fff",
        }}
      >
        <p className="text-center">Designed by D.S.C. Conseil</p>
      </Row>
    </div>
  );
}

export default Footer;
