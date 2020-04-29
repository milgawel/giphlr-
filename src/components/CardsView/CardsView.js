import React from "react";
import styled from "styled-components";
import Card from "components/Card";
import MasonryLayout from "templates/MasonryLayout";

const Wrapper = styled.div`
  width: 100%;
  padding: 100px;
  animation: display 1.5s;

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
          // imgUrl={item.images.original.webp}
          imgUrl={item.images.preview_webp.url}
          height={item.images.original.height}
        />
      ))}
    </MasonryLayout>
  </Wrapper>
);

export default CardsView;
