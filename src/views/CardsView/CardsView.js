import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card';
import MasonryTemplate from 'templates/MasonryTemplate';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 65px;
  animation: display 1.5s;
  position: relative;
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

const ContentSwitchContainer = styled.div`
  height: 30px;
  width: 200px;
  background-color: red;
  margin-bottom: 20px;
  display: flex;
  position: relative;
  z-index: 9999;
`;

const SwitchButton = styled.button`
  width: 50%;
  height: 30px;
  background-color: ${({ active }) => (active ? 'cyan' : 'darkgrey')};
  cursor: pointer;
  border: none;
  transition: background-color 0.4s ease;
`;

class CardsView extends React.Component {
  state = {
    gifsContent: true,
  };

  handleButtonChange = () => {
    this.setState((prevState) => ({
      gifsContent: !prevState.gifsContent,
    }));
  };

  render() {
    const { children, photosTypeHandlingFunction } = this.props;
    const { gifsContent } = this.state;

    return (
      <Wrapper>
        <ContentSwitchContainer>
          <SwitchButton
            active={gifsContent}
            onClick={(e) => {
              if (!gifsContent) {
                this.handleButtonChange();
                photosTypeHandlingFunction(e);
              }
            }}
          >
            GIFs
          </SwitchButton>
          <SwitchButton
            active={!gifsContent}
            onClick={(e) => {
              if (gifsContent) {
                this.handleButtonChange();
                photosTypeHandlingFunction(e);
              }
            }}
          >
            Stickers
          </SwitchButton>
        </ContentSwitchContainer>
        <MasonryTemplate>
          {children.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              title={item.title}
              imgUrl={item.images.fixed_width.webp}
              itemHeight={item.images.fixed_width.height}

              // imgUrl={item.images.original.webp}
              // imgUrl={item.images.original.mp4}
              // imgUrl={item.images.preview_webp.url}
            />
          ))}
        </MasonryTemplate>
      </Wrapper>
    );
  }
}

CardsView.propTypes = {
  children: PropTypes.arrayOf(Object).isRequired,
  photosTypeHandlingFunction: PropTypes.func.isRequired,
};

export default CardsView;
