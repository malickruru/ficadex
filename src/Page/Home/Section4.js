import React from "react";
import Row from "../../Component/Row";
import { Carousel } from "react-responsive-carousel";
import { flexColumn, flexColumnLeft, flexLeft } from "../../Style/Flex";

function Section4(props) {
  const info = [
    "TOP 5 de l'actualité de la semaine (25-05/28-05-2021)",
    "De nouveaux outils pour fiabiliser les déclarations faites aux caisses de retraite complémentaire",
    "Assurance-vie : absence d'information sur le taux d'intérêt garanti et délai de renonciation prorogé",
    "TOP 5 de l'actualité de la semaine (25-05/28-05-2021)",
  ];

  const CarouselInfo = [
    {
      title: "Décès de Mr KONAN",
      txt: "C’est avec une grande tristesse que nous avons appris le décès de notre associé de la Côte d’Ivoire, survenu le 31 juillet 2020, à l’âge de 57 ans.",
      img: "http://ficadex.com/wp-content/uploads/2020/08/Mr-KONAN.jpg",
    },
    {
      title: "Coronavirus : Attestation de garde des enfants à domicile",
      txt: "Téléchargez le modèle d’attestation de garde d’enfant à domicile dans le cadre de la gestion de l’épidémie de Coronavirus",
      img: "http://ficadex.com/wp-content/uploads/2020/03/Coronavirus.jpg",
    },
    {
      title: "CORONAVIRUS : COMMENT GÉRER LA PAYE DES SALARIES ?",
      txt: "Face à l’épidémie de coronavirus, l’employeur doit faire face à différentes situations : salariés contraints de rester chez eux, situation de télétravail, etc ….",
      img: "http://ficadex.com/wp-content/uploads/2020/03/Coronavirus.jpg",
    },
    {
      title:
        "Recourir à l’activité partielle en cas de baisse d’activité liée au coronavirus",
      txt: "Certaines entreprises doivent faire face à une baisse d’activité liée à l’épidémie de  coronavirus. Dans ce contexte, le recours à l’activité partielle permet aux entreprises en difficulté de réduire ou suspendre temporairement l’activité de leurs salariés.",
      img: "http://ficadex.com/wp-content/uploads/2020/03/Coronavirus.jpg",
    },
    {
      title: "Monsieur Abdessalam EL HAROUCHY membre du CCIG",
      txt: "Monsieur Abdessalam EL HAROUCHY, associé du Groupe Ficadex, membre au Comité Consultatif Indépendant de Gestion (CCIG).",
      img: "http://ficadex.com/wp-content/uploads/2020/01/A-EL-HAROUCHY_CCIG.jpg",
    },
  ];

  return (
    <Row AdditionalClass={"py-5"} id="section4">
      <div className="col-sm-6" style={flexColumn} data-aos="fade-right">
        <h2>Actualités Ficadex</h2>
        <Carousel
          autoPlay
          interval={4000}
          infiniteLoop
          showThumbs={false}
          animationHandler="fade"
          swipeable={false}
          showStatus={false}
          width={500}
        >
          {CarouselInfo.map((item, idx) => {
            return (
              <div key={idx} className="s4-slide">
                <img src={item.img} />
                <div className="overlay" style={flexColumn}>
                  <h5>{item.title}</h5>
                  <p>{item.txt}</p>
                  <button>lire</button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="col-sm-6" data-aos="fade-left">
        <h2>Ficadex vous informe</h2>
        <ul>
          {info.map((item, idx) => {
            return (
              <li className="s4-li py-2" key={idx}>
                <a href="#">{item}</a> <br />
                {"> Publié le 30/05/2021"}
              </li>
            );
          })}
        </ul>
      </div>
    </Row>
  );
}

export default Section4;
