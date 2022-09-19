import React from "react";
import { flexColumn, flexRowAround, flexRowCenter } from "../Style/Flex";
import Row from "./Row";
import Btn from "./Btn";

function Footer(props) {
  return (
    <div className="container-fluid">
      <Row>
        <div className="col-sm-4" style={flexColumn}>
          <img src="./image/ficadex_groupe.png" />
        </div>

        <div className="col-sm-4 px-5 mobile-center">
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
        <div className="col-sm-4 px-5 " style={flexRowCenter}>
          <Btn rounded={true} customClass={"m-3"}>
            <i className="bi bi-facebook"> </i>
          </Btn>
          <Btn rounded={true} customClass={"m-3"}>
            <i className="bi bi-twitter"> </i>
          </Btn>
          <Btn rounded={true} customClass={"m-3"}>
            <i className="bi bi-instagram"> </i>
          </Btn>
        </div>
      </Row>
    </div>
  );
}

export default Footer;
