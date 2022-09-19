import React, { useEffect } from "react";
import Colsm2 from "../../Component/BoostrapLayout/Colsm2";
import Btn from "../../Component/Btn";
import Row from "../../Component/Row";
import { flexRight, flexRowCenter } from "../../Style/Flex";
import HomeActu from "./HomeActu";
import HomeBanner from "./HomeBanner";
import HomeSpecialite from "./HomeSpecialite";
import Footer from "../../Component/Footer";

function Home(props) {
  useEffect(() => {
    console.log("ok");
  }, []);

  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgba(46, 46, 56, 1)" }}
      >
        <HomeBanner />
        <HomeActu />
      </div>
      <div className="container">
        <Row AdditionalClass={"py-5"}>
          <div className="col-sm-6 py$-3" data-aos="fade-right">
            <img
              width={"500px"}
              src="https://assets.ey.com/content/dam/ey-sites/ey-com/en_us/topics/diversity/ey-business-people-having-teleconference.jpg.rendition.1800.1200.jpg"
            ></img>
          </div>

          <div className="col-sm-6 p-3 mobile-center" data-aos="fade-left">
            <h3>Ficadex à Votre service</h3>
            <ul>
              <li>
                FICADEX est à votre service pour vous aider dans votre expertise
                comptable et sociale.
              </li>
              <li>
                FICADEX est votre partenaire privilégié pour vous implanter à
                l’étranger grâce à ses nombreux bureaux.
              </li>
              <li>
                FICADEX vous assure une disponibilité et une qualité d’expertise
                reconnue.
              </li>
            </ul>
            <Btn>En savoir +</Btn>
          </div>
        </Row>
        <Row AdditionalClass={"py-5"}>
          <div className="col-sm-6 p-3 mobile-center" data-aos="fade-right">
            <h3>Spécialité Ficadex</h3>
            <ul>
              <p>FICADEX s’est spécialisé dans les domaines suivants :</p>
              <li>Missions sociales</li>
              <li>
                Secteur Production et Distribution Cinématographique et
                Audiovisuelle
              </li>
              <li>Huissiers de justice</li>
            </ul>
            <Btn>En savoir +</Btn>
          </div>
          <div className="col-sm-6 p-3" data-aos="fade-left">
            <img
              width={"500px"}
              src="https://assets.ey.com/content/dam/ey-sites/ey-com/en_us/topics/assurance/2021-our-commitment-to-audit-quality-report/ey-hand-with-crystal-ball-showing-city-commitment-to-audit-quality-hero-3840x2560.jpg.rendition.1800.1200.jpg"
            ></img>
          </div>
        </Row>
      </div>
      <div className="container-fluid p0">
        <HomeSpecialite></HomeSpecialite>
      </div>
      <div
        className="container-fluid"
        style={{ backgroundColor: "rgba(46, 46, 56, 1)" }}
      >
        <div className="container">
          <Row AdditionalClass={"py-5"}>
            <div className="col-sm-6 p-5">
              <h1 className="py-3" style={{ color: "white" }}>
                DECOUVRIR
              </h1>
              <Btn>
                <i className="bi bi-search"></i> Search
              </Btn>
            </div>
            <div className="col-sm-6 p-3"></div>
          </Row>
        </div>
      </div>
      <div className="container">
        <Row AdditionalClass={"py-5"}>
          <div className="col-sm-6 p-5"></div>
          <div className="col-sm-6 p-3 next" style={flexRight}>
            <div>
              <span>Suivant</span>
              <h1>CONTACT</h1>
            </div>
            <i
              className="bi bi-arrow-right"
              style={{ fontSize: "2em", padding: "15px" }}
            ></i>
          </div>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Home;
