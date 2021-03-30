import styled from "styled-components"

export const MainContainer = styled.div`
    width: 100%;
    min-width:980px;
    height: 60px;
    padding: 19px 4px 16px 32px;
    background-color: #33a6a6;
    position: fixed;
    margin: auto;
    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        height: 100px;
    } 
`

export const Name = styled.a`
    margin: 0 35rem 0 0;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;
    text-decoration: none;
    @media (max-width: 800px) {
        font-size: 2.5rem;
        margin: auto 40rem auto 0;
    }
`

export const Anchor = styled.a`
    margin: 1rem;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;
    @media (max-width: 800px) {
        font-size: 1.5rem;
        margin: 0 2rem 0 0;
    }
`