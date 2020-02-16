import React, { Component } from 'react';
import styled from '@emotion/styled';
import Loading from './Loading';

const StyledJokes = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
p {
    background: #dcdde1;   
    width: 15%;
    border-radius: 10px;
    display: inline-block;
    margin: 2rem;
    padding: 3rem;
    cursor: pointer;
    filter: drop-shadow(10px 10px 0px #ced6e0);
    &:hover {
        filter: drop-shadow(0px 0px 0px #fff);
    }
    @media (max-width: 774px) {
        width: 80%;
      }
}
`


export default class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loading: null,
    };

    this.fetchJokes = this.fetchJokes.bind(this);
  }

  componentDidMount() {
    this.fetchJokes();
  }

  fetchJokes() {
    this.setState({loading: true});
    fetch('https://api.icndb.com/jokes/random/32/?limitTo=[nerdy]')
      .then(response => response.json())
      .then(jokes => this.setState({ jokes: jokes.value, loading: false }));
  }
  render() {
    return (
      <StyledJokes>
        {this.state.loading && <Loading/>}
        {this.state.jokes.map((item, i) => (
          <p key={i}>{item.joke}</p>
        ))}
      </StyledJokes>
    );
  }
}
