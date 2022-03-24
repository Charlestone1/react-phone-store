import React from "react";
import Product from "./Product";
import Title from "./Title";
import { useGlobalContext } from "../context";

const ProductList = (props) => {
  const { myStoreProducts, setMyStoreProducts } = useGlobalContext();

  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {myStoreProducts.map((singleProduct) => (
              <Product
                key={singleProduct.id}
                id={singleProduct.id}
                singleProduct={singleProduct}
                title={singleProduct.title}
                price={singleProduct.price}
                inCart={singleProduct.inCart}
                img={singleProduct.img}
                company={singleProduct.company}
                info={singleProduct.info}
                total={singleProduct.total}
                count={singleProduct.count}
              />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
