import React, { Component } from 'react';
import axios from 'axios';
import format from 'date-fns/format';
import styled from 'styled-components';

const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  color: #fff;
  ${'' /* padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 7px 0 rgba(0,0,0,0.5); */};
`;

const InputWrap = styled.div`
  position: relative;
`;

const CleanSearch = styled.span`
  position: absolute;
  top: 9px;
  right: 6px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Input = styled.input`
  color: #fff;
  border: none;
  padding: 5px 30px 5px 5px;
  width: 300px;
  font-size: 16px;
  line-height: 20px;
  font-family: 'Open Sans', sans-serif;
  outline: none;
  font-weight: 300;
  background: transparent;

  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #fff;
    opacity: 0.5;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #fff;
    opacity: 0.5;
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: #fff;
    opacity: 0.5;
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: #fff;
    opacity: 0.5;
  }
`;

export class Header extends Component {
  state = {
    value: '',
  };

  handleOnChange = ({ target: { value } }) => this.setState({ value });

  handleClear = () => this.setState({ value: '' });
  // 770e97f1d934e290ce7d7b9aa681a860
  handleOnClick = () => {
    this.props.getWeather(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <Wrap>
        <InputWrap>
          <Input
            onChange={this.handleOnChange}
            value={value}
            placeholder="Enter your city"
          />
          <button onClick={this.handleOnClick}>send</button>
          {value && <CleanSearch onClick={this.handleClear}>╳</CleanSearch>}
        </InputWrap>

        {format(new Date(), 'dddd, D MMMM')}
      </Wrap>
    );
  }
}
