import React, { useEffect, useState } from "react";
import Card from "../../Component/Card";
import Row from "../../Component/Row";
import ScrollProp from "../../Utils/ScrollProp";
import { Specificite } from "../../Utils/Specificite";

function Section2(props) {
  let n = 50;
  const [limit, setLimit] = useState(6);

  const ChangeLimit = () => {
    limit === 6 ? setLimit(Specificite.length) : setLimit(6);
  };

  return (
    <>
      <Row AdditionalClass={"py-3"}>
        <h1 className="text-center">Nos spécificités</h1>
      </Row>
      <Row>
        {Specificite.map((item, idx) => {
          n += 25;
          if (idx < limit) {
            return (
              <div
                className="col-sm-4 p-3"
                key={idx}
                data-aos="fade-up"
                data-aos-delay={"" + n}
              >
                <Card srcImg={item.src} productName={item.nom} />
              </div>
            );
          }
        })}
        <p className="click text-center s2-cta" onClick={ChangeLimit}>
          {limit === 6 ? "voir plus " : "cacher"}
        </p>
      </Row>
    </>
  );
}

export default Section2;
