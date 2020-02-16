import React, { Component } from 'react';
import styled from '@emotion/styled';

import "../App.css"

const LoadingWrapper = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 10rem;
`;

export default class Loading extends Component {
  render() {
    return (
      <LoadingWrapper>
        <div className="loader">Loading...</div>
      </LoadingWrapper>
    );
  }
}
