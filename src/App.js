import React, { Component } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Jokes from './components/Jokes';
import Reload from './components/Reload';

const StyledApp = styled.div`
  margin: 0 auto;
  padding: 0rem;
  @media (max-width: 774px) {
    padding: 2rem;
  }
}
  
`;

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <StyledApp>
          <Jokes />
          <Reload/>
        </StyledApp>
      </>
    );
  }
}
