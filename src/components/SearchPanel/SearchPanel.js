import React, { Component } from "react";
import styled from "styled-components";
import searchIcon from "assets/search_icon.png";

const PanelWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 220px;
  display: flex;
  visibility: ${({ active }) => (active ? "hidden" : "visible")};
  opacity: ${({ active }) => (active ? 0 : 1)};
  transition: all 0.4s ease;
  flex-direction: column;
`;

const StyledInput = styled.input`
  height: 40px;
  width: 220px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 8%;
  background-position: 5% 50%;
  padding: 0 0 0 15%;
  border: none;
  box-shadow: 0px 0px 10px 3px #d562f5;
  background-color: #29d1ff;
  transition: background-color 0.4s ease;
  &:hover {
    background-color: #82e4ff;
  }
`;

const StyledButton = styled.input`
  height: 40px;
  width: 220px;
  border-radius: 5px;
  border: none;
  background-color: #d562f5;
  box-shadow: 0px 0px 10px 3px #29d1ff;
  cursor: pointer;
  transition: background-color 0.4s ease;
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
            handleInputSubmit(this.state.input, e);
            this.setState({ input: "" });
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleInputSubmit(this.state.input, e);
              this.setState({ input: "" });
            }
          }}
        >
          <StyledInput
            type="text"
            placeholder="Zacznijmy podróż"
            onChange={this.handleInputChange}
            value={this.state.input}
          />
          <StyledButton type="submit" value="Wyszukaj zdjęcia" />
        </form>
      </PanelWrapper>
    );
  }
}

export default SearchPanel;
