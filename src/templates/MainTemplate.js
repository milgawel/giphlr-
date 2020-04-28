import React from "react";
import styled from "styled-components";
import GlobalStyle from "theme/GlobalStyle";
import wallpaper from "assets/giphy_main.jpg";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  &:after {
    content: "";
    background: url(${wallpaper});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: fixed;
    z-index: -1;
  }
`;

const MainTemplate = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    {children}
  </Wrapper>
);

export default MainTemplate;
