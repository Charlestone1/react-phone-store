import React from "react";
import { Link, useLocation } from "react-router-dom";
import ButtonContainer from "./Button";

const Default = () => {
  const { pathname } = useLocation();
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>
            the requested URL
            <span className="text-danger text-lowercase">{pathname}</span> was
            not found
          </h3>

          <h3>
            go to {"  "}
            <Link to="/">
              <ButtonContainer>home page</ButtonContainer>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Default;
