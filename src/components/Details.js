import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { useGlobalContext } from "../context";

const Details = () => {
  const { productDetails, setProductDetails, addToCart, openModal } =
    useGlobalContext();
  const { id, title, img, price, company, count, inCart, info, total } =
    productDetails;
  return (
    <div className="container py-5" key={id}>
      {/* Title */}
      <div className="row">
        <div className="col- mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      {/* End of  Title */}
      {/* Product Info Begins */}
      {/* Product image */}
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} alt="Product-Image" className="img-fluid" />
        </div>
        {/* Product text details */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model : {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by:<span className="text-uppercase"> {company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Some info about the product :
          </p>
          <p className="text-muted lead">{info}</p>
          {/* the Buttons  */}
          <div>
            <Link to="/">
              <ButtonContainer>back to products</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={inCart ? true : false}
              onClick={() => {
                addToCart(id);
                openModal(id);
              }}
            >
              {inCart ? "in cart" : "add to Cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
