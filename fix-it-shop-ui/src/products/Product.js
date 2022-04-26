import Image from "../Farba_Dulux_EasyCare_cos_niebieskiego_2_5_l-742427-493220.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Product(props) {
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
    <div className="col">
      <div className="card shadow-sm">
        <Link to="/products/1" href="!#" replace>
          {percentOff}
          <img
            className="card-img-top bg-dark cover"
            height="200"
            alt=""
            src={Image}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
            Farba Dulux EasyCare
          </h5>
          <p className="card-text text-center text-muted mb-0">{offPrice}</p>
          <div className="d-grid d-block">
            <button className="btn btn-outline-dark mt-3">
              <FontAwesomeIcon icon={["fas", "cart-plus"]} /> Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Product;
