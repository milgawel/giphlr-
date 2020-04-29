import React, { Component } from "react";
import styled from "styled-components";
import Input from "components/Input";

const PanelWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 220px;
  display: flex;
  transition: all 0.4s ease;
  flex-direction: column;
  animation: ${({ active }) => (active ? "animateMovement" : "null")} 0.7s;
  animation-delay: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  z-index: 999;
  @keyframes animateMovement {
    0% {
      top: 50%;
      left: 50%;
    }
    100% {
      top: 50px;
      left: 240px;
      position: absolute;
    }
    100% {
      top: 50px;
      left: 185px;
      position: fixed;
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
  visibility: ${({ active }) => (active ? "hidden" : "visible")};
  opacity: ${({ active }) => (active ? 0 : 1)};
  pointer-events: ${({ active }) => (active ? "none" : "auto")};
  transition: all 0.4s ease;

  &:hover {
    background-color: #e791ff;
  }
`;

class SearchPanel extends Component {
  state = {
    input: "",
  };

  handleInputChange = (e) => {
    const newInput = e.target.value;
    this.setState({
      input: newInput,
    });
  };

  render() {
    const { handleInputSubmit, searched } = this.props;
    return (
      <PanelWrapper active={searched}>
        <form
          onSubmit={(e) => {
            handleInputSubmit(e, this.state.input);
            this.setState({ input: "" });
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleInputSubmit(e, this.state.input);
              this.setState({ input: "" });
            }
          }}
        >
          <Input
            handleChangeFunction={this.handleInputChange}
            inputValue={this.state.input}
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

export default SearchPanel;
