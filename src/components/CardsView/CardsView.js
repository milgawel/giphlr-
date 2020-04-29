import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import MasonryLayout from "templates/MasonryLayout";

const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
  animation: display 1.5s;
  @media (max-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
  }

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
    <MasonryLayout>
      {children.map((item) => (
        <Card
          id={item.id}
          key={item.id}
          title={item.title}
          // imgUrl={item.images.fixed_width_small.webp}
          imgUrl={item.images.original.webp}
          // imgUrl={item.images.preview_webp.url}
          // itemHeight={item.images.original.height}
        />
      ))}
    </MasonryLayout>
  </Wrapper>
);

export default CardsView;
