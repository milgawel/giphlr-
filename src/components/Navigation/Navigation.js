import React from "react";
import styled from "styled-components";
import logo from "assets/giphy_logo.png";

const NavWrapper = styled.div`
  width: 100vw;
  height: 50px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  padding-left: 20px;
`;

const StyledImg = styled.img`
  margin-top: 5px;
  height: 40px;
`;

const Navigation = () => (
  <NavWrapper>
    <a href="#">
      <StyledImg src={logo} alt="" />
    </a>
    hello
  </NavWrapper>
);

export default Navigation;
