import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";

const StyledCard = styled.figure`
  margin-bottom: 30px;
  box-shadow: -2px -2px 5px 1px black;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

const StyledHeader = styled.figcaption`
  width: 100%;
  text-align: center;
  padding: 5px;
  position: absolute;
  transform: ${({ active }) =>
    !active ? "translate(0, -100%)" : "translate(0, 0)"};
  transition: 0.4s ease;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  :first-letter {
    text-transform: uppercase;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  display: ${({ display }) => (display ? "block" : "none")};
`;

const StyledLink = styled.a`
  background-color: cyan;
`;

const choseColor = () => {
  const colorArray = ["#29d1ff", "#e791ff", "#bc42f5", "#e0f542", "#f58142"];
  let position = Math.floor(Math.random() * colorArray.length);
  return colorArray[position];
};

const Placeholder = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : "150px")};
  background-color: ${choseColor()};
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
      ready: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    const { id, title, imgUrl, itemHeight } = this.props;

    return (
      <LazyLoad once height={200} offset={400}>
        <StyledCard
          id={id}
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          {<StyledHeader active={this.state.isHovering}>{title}</StyledHeader>}

          <StyledLink href={imgUrl} target="_blank">
            {this.state.ready ? null : <Placeholder itemHeight={itemHeight} />}
            <StyledImg
              src={imgUrl}
              alt={title}
              onLoad={() => this.setState({ ready: true })}
              display={this.state.ready}
            />
          </StyledLink>
        </StyledCard>
      </LazyLoad>
    );
  }
}

export default Card;
