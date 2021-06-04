import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100vw;
    height: 5vh;
    background-color: #d97824;

    display: flex;
    align-items: center;

    @media screen and (min-width: 600px) {
        height: 8vh;
    }
`

export const Text = styled.p`
    font-size: 0.576rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;
    color: #ffffff;
    margin-left: 10%;

    @media screen and (min-width: 600px) {
        font-size: 0.8rem; 
    }
`