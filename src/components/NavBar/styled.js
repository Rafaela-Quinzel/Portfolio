import styled from "styled-components"

export const MainContainer = styled.div`
    width: 100vw;
    height: 60px;
    padding: 19px 4px 16px 32px;
    @media (max-width: 800px) {
        font-size: 1rem;
        justify-content: center;
    }
`

export const Name = styled.span`
    width: 75px;
    height: 25px;
    margin: 0 65rem 0 0;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #8d1c31;
`

export const Anchor = styled.a`
    width: 80px;
    height: 19px;
    margin: 1rem;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    text-align: center;
    color: #8d1c31;
    cursor: pointer;
`