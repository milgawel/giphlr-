import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import MasonryTemplate from "templates/MasonryTemplate";

const Wrapper = styled.div`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 65px;
  animation: display 1.5s;

  @media (max-width: 420px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @keyframes display {
    0% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CardsView = ({ children }) => (
  <Wrapper>
    <MasonryTemplate>
      {children.map((item) => (
        <Card
          id={item.id}
          key={item.id}
          title={item.title}
          imgUrl={item.images.fixed_width.webp}
          // imgUrl={item.images.original.webp}
          // imgUrl={item.images.original.mp4}
          // imgUrl={item.images.preview_webp.url}
        />
      ))}
    </MasonryTemplate>
  </Wrapper>
);

export default CardsView;
