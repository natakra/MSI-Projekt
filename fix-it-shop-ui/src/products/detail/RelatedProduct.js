import Image from "../../Farba_Dulux_EasyCare_goraczka_zlota_2_5_l-742441-504929.jpg";
import { Link } from "react-router-dom";

function RelatedProduct(props) {
  const price = 69.99;
  let percentOff;
  let offPrice = `${price} zł`;

  if (props.percentOff && props.percentOff > 0) {
    percentOff = (
      <div
        className="badge bg-dim py-2 text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
        -{props.percentOff}%
      </div>
    );

    offPrice = (
      <>
        <del>{price} zł</del> {Math.round(price - (props.percentOff * price) / 100)} zł
      </>
    );
  }

  return (
    <Link
      to="/products/1"
      className="col text-decoration-none"
      href="!#"
      replace
    >
      <div className="card shadow-sm">
        {percentOff}
        <img
          className="card-img-top bg-dark cover"
          height="200"
          alt=""
          src={Image}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
          Farba Dulux EasyCare - kolor złoty
          </h5>
          <p className="card-text text-center text-muted">{offPrice}</p>
        </div>
      </div>
    </Link>
  );
}

export default RelatedProduct;
