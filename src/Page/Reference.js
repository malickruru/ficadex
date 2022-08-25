import React from "react";
import Footer from "../Component/Footer";
import Row from "../Component/Row";
import { flexColumn } from "../Style/Flex";
import { Entreprise } from "../Utils/Entreprise";

function Reference(props) {
  return (
    <>
      <div className="container">
        <Row AdditionalClass={"py-5"}>
          <h1 className="py-3">
            Voici quelques uns de nos clients qui nous font confiance :
          </h1>
          {Entreprise.map((item, idx) => {
            return (
              <div key={idx} className="col-sm-3 p-4" style={flexColumn}>
                <img src={item.img} />
                <h4 className="text-center">{item.nom}</h4>
              </div>
            );
          })}
        </Row>
        <Row>
          <h5>Et aussi :</h5>
          <ul>
            <li>
              Société Nationale D_​ci_​pi_​sblc_​ENCADREMENT et de Promotion
              Industrielle (SONEPI)
            </li>
            <li>Fonds de Promotion Economique (FPE)</li>
            <li>Diverses Organisations Non Gouvernementales (ONG)</li>
            <li>Fondation Secteur Privé (FSP) au Sénégal</li>
          </ul>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Reference;
