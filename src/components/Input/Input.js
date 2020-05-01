import React from 'react';
import styled from 'styled-components';
import searchIcon from 'assets/search_icon.png';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  height: 40px;
  width: 240px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 8%;
  background-position: 5% 50%;
  padding: 0 0 0 16%;
  font-size: 16px;
  border: none;
  box-shadow: 0px 0px 10px 3px
    ${({ isActive }) => (isActive ? 'none' : '#d562f5')};
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
    placeholder="Let's start a new adventure!"
    isActive={active}
  />
);

Input.propTypes = {
  handleChangeFunction: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Input;
