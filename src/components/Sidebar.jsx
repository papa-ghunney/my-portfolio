import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles.css";
const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--clr-dark);
  display: grid;
  align-items: center;
  top: 0;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: var(--clr-accent);
  margin-right: 0.2em;
  font-size: 2rem;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 400px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-h2);
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: var(--clr-accent);
    transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const SidebarRoute = styled(Link)`
  background: var(--clr-light);
  white-space: nowrap;
  padding: 16px 64px;
  color: var(--clr-dark);
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    background: var(--clr-accent);
    color: #010606;
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
          <CloseIcon onClick={toggle} />
        </Icon>
        <SidebarMenu>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/about">About</SidebarLink>
          <SidebarLink to="/services">Services</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/">Contact </SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
