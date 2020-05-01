import React, { Component } from 'react';
import styled from 'styled-components';
import Input from 'components/Input';
import PropTypes from 'prop-types';

const PanelWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 90px;
  display: flex;
  transition: all 0.4s ease;
  flex-direction: column;
  animation: ${({ active }) => (active ? 'animateMovement' : 'null')} 0.7s;
  animation-delay: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  z-index: 99;
  overflow: hidden;

  @keyframes animateMovement {
    0% {
      top: 50%;
      left: 50%;
      height: 90px;
    }

    100% {
      top: 27.5px;
      left: 185px;
      height: 45px;
    }
  }
`;

const StyledButton = styled.input`
  height: 40px;
  width: 240px;
  border-radius: 5px;
  border: none;
  background-color: #d562f5;
  box-shadow: 0px 0px 10px 3px #29d1ff;
  cursor: pointer;
  visibility: ${({ active }) => (active ? 'hidden' : 'visible')};
  opacity: ${({ active }) => (active ? 0 : 1)};
  pointer-events: ${({ active }) => (active ? 'none' : 'auto')};
  transition: all 0.4s ease;

  &:hover {
    background-color: #e791ff;
  }
`;

class SearchPanel extends Component {
  state = {
    input: '',
  };

  handleInputChange = (e) => {
    const newInput = e.target.value;
    this.setState({
      input: newInput,
    });
  };

  render() {
    const { handleInputSubmit, searched } = this.props;
    const { input } = this.state;
    return (
      <PanelWrapper active={searched}>
        <form
          onSubmit={(e) => {
            handleInputSubmit(e, input);
            this.setState({ input: '' });
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleInputSubmit(e, input);
              this.setState({ input: '' });
            }
          }}
        >
          <Input
            handleChangeFunction={this.handleInputChange}
            inputValue={input}
            active={searched}
          />

          <StyledButton
            type="submit"
            value="Wyszukaj zdjęcia"
            active={searched}
          />
        </form>
      </PanelWrapper>
    );
  }
}

SearchPanel.propTypes = {
  handleInputSubmit: PropTypes.func.isRequired,
  searched: PropTypes.bool.isRequired,
};

export default SearchPanel;
