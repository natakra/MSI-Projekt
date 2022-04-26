import Image from "../../Farba_Dulux_EasyCare_cos_niebieskiego_2_5_l-742427-493220.jpg";
import RelatedProduct from "./RelatedProduct";
import Ratings from "react-ratings-declarative";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";

const iconPath =
  "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";

function ProductDetail() {
  function changeRating(newRating) {} 

  return (
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount/>
      <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/products">
              Wszystkie produkty
            </Link>
          </li>
          <li className="breadcrumb-item">
            <a className="text-decoration-none link-secondary" href="!#">
              Farby
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Farba Dulux EasyCare - kolor niebieski
          </li>
        </ol>
      </nav>
      <div className="row mb-4">
        <div className="d-none d-lg-block col-lg-1">
          <div className="image-vertical-scroller">
            <div className="d-flex flex-column">
              {Array.from({ length: 10 }, (_, i) => {
                let selected = i !== 1 ? "opacity-6" : "";
                return (
                  <a key={i} href="!#">
                    <img
                      className={"rounded mb-2 ratio " + selected}
                      alt=""
                      src={Image}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={Image}
              />
            </div>
          </div>

          {/* <div className="row mt-2">
            <div className="col-12">
              <div
                className="d-flex flex-nowrap"
                style={{ overflowX: "scroll" }}
              >
                {Array.from({ length: 8 }, (_, i) => {
                  return (
                    <a key={i} href="!#">
                      <img
                        className="cover rounded mb-2 me-2"
                        width="70"
                        height="70"
                        alt=""
                        src={Image}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div> */}
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">Farba Dulux EasyCare - kolor niebieski</h2>
            <h4 className="text-muted mb-4">69,99 zł</h4>

            <div className="row g-3 mb-4">
              <div className="col">
                <button className="btn btn-outline-dark py-2 w-100">
                  Dodaj do koszyka
                </button>
              </div>
              <div className="col">
                <button className="btn btn-dark py-2 w-100">Kup teraz</button>
              </div>
            </div>

            <h4 className="mb-0">Szczegóły</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">Kod</dt>
              <dd className="col-sm-8 mb-3">C0001</dd>

              <dt className="col-sm-4">Kategoria</dt>
              <dd className="col-sm-8 mb-3">Farby</dd>

              <dt className="col-sm-4">Marka</dt>
              <dd className="col-sm-8 mb-3">Dulux</dd>

              <dt className="col-sm-4">Kolor</dt>
              <dd className="col-sm-8 mb-3">Niebieski</dd>

              <dt className="col-sm-4">Pojemność</dt>
              <dd className="col-sm-8 mb-3">2,5 l</dd>

              <dt className="col-sm-4">Status</dt>
              <dd className="col-sm-8 mb-3">Dostępny</dd>

              <dt className="col-sm-4">Ocena</dt>
              <dd className="col-sm-8 mb-3">
                <Ratings
                  rating={4.5}
                  widgetRatedColors="rgb(253, 204, 13)"
                  changeRating={changeRating}
                  widgetSpacings="2px"
                >
                  {Array.from({ length: 5 }, (_, i) => {
                    return (
                      <Ratings.Widget
                        key={i}
                        widgetDimension="20px"
                        svgIconViewBox="0 0 19 20"
                        svgIconPath={iconPath}
                        widgetHoverColor="rgb(253, 204, 13)"
                      />
                    );
                  })}
                </Ratings>
              </dd>
            </dl>

            <h4 className="mb-0">Opis</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
              Jeśli chcesz odświeżyć kolor na ścianie lub robisz gruntowny remont w domu, 
              świetnie sprawdzi się farba Dulux EasyCare coś niebieskiego. 
              To uniwersalne rozwiązanie zarówno do pokoju dziecięcego, jak i do kuchni czy łazienki. 
              Po malowaniu powłoka zakrywa wszystkie niedoskonałości i pozostaje równomierna. 
              Nie musisz mieć doświadczenia w malowaniu, aby błyskawicznie nałożyć ją wałkiem lub pędzlem. 
              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <hr />
          <h4 className="text-muted my-4">Powiązane produkty</h4>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {Array.from({ length: 4 }, (_, i) => {
              return (
                <RelatedProduct key={i} percentOff={i % 2 === 0 ? 10 : null} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
