import React, { useState } from "react";
import Card from "../../Component/Card";
import Row from "../../Component/Row";
import { flexRowAround } from "../../Style/Flex";

function HomeActu(props) {
  const [displayCard, setDc] = useState([0, 1, 2]);
  const [test, setTest] = useState("0");

  const CarouselInfo = [
    {
      title: "Décès de Mr KONAN",
      txt: "C’est avec une grande tristesse que nous avons appris le décès de notre associé de la Côte d’Ivoire, survenu le 31 juillet 2020, à l’âge de 57 ans.",
      img: "http://ficadex.com/wp-content/uploads/2020/08/Mr-KONAN.jpg",
    },
    {
      title: "Coronavirus : Attestation de garde des enfants à domicile",
      txt: "Téléchargez le modèle d’attestation de garde d’enfant à domicile dans le cadre de la gestion de l’épidémie de Coronavirus",
      img: "https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "CORONAVIRUS : COMMENT GÉRER LA PAYE DES SALARIES ?",
      txt: "Face à l’épidémie de coronavirus, l’employeur doit faire face à différentes situations : salariés contraints de rester chez eux, situation de télétravail, etc ….",
      img: "https://images.pexels.com/photos/3957987/pexels-photo-3957987.jpeg?auto=compress&cs=tinysrgb&w=600",
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

  const UpdateDisplay = (id) => {
    //1.supprimer l'index choisie

    let newArryay = displayCard;
    console.log(id);
    let newNum = id;
    // //2.choisir un nombre entre zero et l'ensemble du tableau
    while (displayCard.includes(newNum)) {
      newNum = Math.floor(Math.random() * CarouselInfo.length);
    }
    if (displayCard.includes(newNum) == false) {
      newArryay.splice(id, 1);

      newArryay.push(newNum);

      // //5.changer le state
      setDc(newArryay);
      setTest(test + toString(newArryay));
      console.log(displayCard);
    }
  };

  return (
    <div className="container">
      <Row AdditionalClass="HomeActu ">
        <h1 style={{ color: " #ffe600" }}>Nos dernières publications </h1>
      </Row>
      <Row>
        {displayCard.map((item) => {
          return (
            <div className="col-sm-4 py-2" key={item} data-aos="fade-up">
              <Card
                srcImg={CarouselInfo[item].img}
                productName={CarouselInfo[item].title}
                func={() => {
                  UpdateDisplay(item);
                }}
              />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default HomeActu;
