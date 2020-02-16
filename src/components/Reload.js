import React, { Component } from 'react'
import styled from '@emotion/styled'

const Reloader = styled.div`
display: flex;
justify-content: center;
margin: 3rem;
button {
    padding: 10px 20px;
    border: 1px solid black;
    font-size: 1.25rem;
    background: white;
    border-radius: 5px;
    &:hover {
        background: black;
        color: white;
    }
}
`

export default class Reload extends Component {
    handleClick = (event) => {
        window.location.reload();
    }

    render() {
        return (
            <Reloader>
                <button onClick={this.handleClick}>
                     More
                </button>
            </Reloader>
        )
    }
}
