import React from "react";
import Row from "../../Component/Row";
import { flexColumn, flexRowCenter } from "../../Style/Flex";

function Section6(props) {
  return (
    <Row
      styles={{
        backgroundImage:
          "url(http://ficadex.com/wp-content/uploads/2016/03/earth-earth-at-night-night-lights-lighting-space.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="s6-infos col-sm-3" style={flexColumn}>
        <div data-aos="counter1"></div>
        <p>Bureaux dans le monde</p>
      </div>
      <div className="s6-infos col-sm-3" style={flexColumn}>
        <div data-aos="counter2"></div>
        <p>Clients</p>
      </div>
      <div className="s6-infos col-sm-3" style={flexColumn}>
        <div data-aos="counter3"></div>
        <p>Professionnels à votre service</p>
      </div>
      <div className="s6-infos col-sm-3" style={flexColumn}>
        <div data-aos="counter4"></div>
        <p>Années d'expérience</p>
      </div>
    </Row>
  );
}

export default Section6;
