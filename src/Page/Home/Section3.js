import React, { useEffect } from "react";
import Row from "../../Component/Row";
import { flexRowAround, flexRowCenter } from "../../Style/Flex";
import ScrollProp from "../../Utils/ScrollProp";
import Accordion from "react-bootstrap/Accordion";

function Section3(props) {
  return (
    <div className="container">
      <Row>
        <div className="col-sm-6 s3-left">
          <div data-aos="fade-right" className="p-3">
            <div className="s3-quote" style={flexRowCenter}>
              <i class="bi bi-quote"></i>
            </div>
            <div style={flexRowAround}>
              <div>
                {" "}
                <img
                  className="s3-img "
                  src="http://ficadex.com/wp-content/uploads/2016/03/JColibert-tour-eiffel2-150x150.jpg"
                />
              </div>
              <p className="p-2">
                Le groupe FICADEX a été créé en France, en 1980, par Jacques
                COLIBERT. Un second souffle s’est opéré depuis l’entrée de Marc
                LERICK en 1992. Nos prin­ci­pales acti­vités sont l’expertise
                comp­table, l’audit, le conseil, l’assistance et la formation.
                Nous avons signé des par­te­na­riats avec des acteurs
                écono­miques dans de nom­breux pays en Europe, en Afrique et
                dans le reste du monde.
              </p>
            </div>
            <h6 className="text-center">Jacques COLIBERT</h6>
          </div>
        </div>
        <div className="col-sm-6 py-3" data-aos="fade-left">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>FICADEX à votre service</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <strong>FICADEX</strong> est à votre service pour vous aider
                    dans votre expertise comptable et sociale.
                  </li>
                  <li>
                    <strong>FICADEX</strong> est votre partenaire privilégié
                    pour vous implanter à l’étranger grâce à ses nombreux
                    bureaux.
                  </li>
                  <li>
                    <strong>FICADEX</strong> vous assure une disponibilité et
                    une qualité d’expertise reconnue.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Spécificité FICADEX</Accordion.Header>
              <Accordion.Body>
                <p>
                  <strong>FICADEX</strong> s’est spécialisé dans les domaines
                  suivants :
                </p>
                <ul>
                  <li>Missions sociales</li>
                  <li>
                    Secteur Production et Distribution Cinématographique et
                    Audiovisuelle
                  </li>
                  <li>Huissiers de justice</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Row>
    </div>
  );
}

export default Section3;
