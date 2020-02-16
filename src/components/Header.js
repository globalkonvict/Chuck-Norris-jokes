import React, { Component } from 'react'
import styled from '@emotion/styled'

const HeaderWrapper = styled.div`
    width: 100%;
    margin: 0px auto;
    h1 {
        text-align: center;
    }
    font-weight: 300,
`

export default class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <h1>Chuck Norris Jokes</h1>
            </HeaderWrapper>
        )
    }
}
