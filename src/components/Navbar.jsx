import React from "react";
import { menuData } from "../data/menuData";
import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
const NavContainer = styled.nav`
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
  position: fixed;
  z-index: 100;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavLink = css`
  color: #000d1a;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const NavLogo = styled(Link)`
  ${NavLink}

  img {
    height: 30px;
    width: 40px;
  }
`;

const MenuBars = styled(FaBars)`
  display: block;
  font-size: 2.5rem;
  background-size: contain;
  width: 20px;
  cursor: pointer;
  top: 0;
  right: -5;
  color: var(--clr-accent);
  transform: translate(-20%, -10%);
`;

const Navbar = ({ toggle }) => {
  return (
    <NavContainer>
      <NavLogo to="/">
        <img src={logo} alt="" />
      </NavLogo>
      <MenuBars onClick={toggle} />
    </NavContainer>
  );
};

export default Navbar;
