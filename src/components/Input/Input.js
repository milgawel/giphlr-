import React from "react";
import styled from "styled-components";
import searchIcon from "assets/search_icon.png";

const StyledInput = styled.input`
  height: 40px;
  width: 240px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 8%;
  background-position: 5% 50%;
  padding: 0 0 0 20%;
  border: none;
  box-shadow: 0px 0px 10px 3px
    ${({ isActive }) => (isActive ? "none" : "#d562f5")};
  background-color: #29d1ff;
  transition: box-shadow 5s ease;
  outline: none;
  &:hover {
    background-color: #82e4ff;
  }
`;

const Input = ({ handleChangeFunction, inputValue, active }) => (
  <StyledInput
    type="text"
    onChange={handleChangeFunction}
    value={inputValue}
    placeholder="Zacznijmy kolejną podróż"
    isActive={active}
  />
);

export default Input;
