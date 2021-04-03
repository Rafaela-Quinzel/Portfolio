import styled from "styled-components"
import { Link } from "react-scroll"


export const MainContainer = styled.div`
    width: 100%;
    min-width:980px;
    height: 60px;
    padding: 19px 4px 16px 32px;
    background-color: #d97824;
    position: fixed;
    margin: auto;
    z-index: 9;
    box-shadow: 0 5px 5px rgba(12, 12, 12, 0.685);

    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        height: 100px;
    } 
`

export const Name = styled(Link)`
    margin: 0 65rem 0 2rem;
    font-size: 21px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 800px) {
        font-size: 2rem;
        margin: auto 40rem auto 0;
    }
`

export const Anchor = styled(Link)`
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
        font-size: 1.6rem;
        margin: 0 2.4rem 0 0;
    }
`