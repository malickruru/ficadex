import { flexRowCenter } from "../Style/Flex";

function Card({ srcImg, productName, func }) {
  return (
    <div className="ProductCard-img">
      <img src={srcImg} />
      <div className="ProductCard-txt">
        <h4>{productName}</h4>
        <h6>Lire la suite</h6>
      </div>
      <button
        className="ProductCard-cancel"
        style={flexRowCenter}
        onClick={func}
      >
        <i className="bi bi-x" style={{ fontSize: "3em" }}></i>
      </button>
    </div>
  );
}

export default Card;
