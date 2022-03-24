import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import { FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import {ButtonContainer} from "./Button"

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={Logo} alt="Logo" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li> 
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="cart-icon">
            <FaCartPlus />
          </span>
          my Cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize; 

  }
`;



export default Navbar;
