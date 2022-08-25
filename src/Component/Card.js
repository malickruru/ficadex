import { flexColumn, flexRowCenter } from "../Style/Flex";

function Card({ srcImg, productName }) {
  return (
    <div style={flexColumn} className="ProductCard">
      <div className="ProductCard-img">
        <img src={srcImg} />
        <div className="ProductCard-img-anim" style={flexRowCenter}>
          <h6>En savoir +</h6>
        </div>
      </div>
      <h4 className="text-center">{productName}</h4>
    </div>
  );
}

export default Card;
