import styled from "styled-components"


export const MainContainer = styled.div`
   width: 100%;
   height: 538px;
   padding: 62px 319px 69px 281px;
   background-color: #063447;
   @media(max-width: 800px) {
    width: 362.1%;
   }
`

export const wrappers = styled.div`
    @media(max-width: 800px) {
        width: 85%;
        height: 80%;
    }
`

export const TitleContainer = styled.h1`
    width: 238px;
    height: 52px;
    margin: 7px 29px 20px 0;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;
    @media(max-width: 800px) {
        font-size: 45px;
    }
`

export const TextContainer = styled.p`
    width: 780px;
    height: 122px;
    margin: 30px 112px 26px 0;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 80%;
    letter-spacing: -0.16px;
    color: #ffffff;
    text-align: justify;
    @media(max-width: 800px) {
        font-size: 18px;
        margin: 20px 80px 26px 0;
    }
`

export const TextAbout = styled.p`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.10px;
    color: #ffffff;
    line-height: 1.5rem;
    @media(max-width: 800px) {
        font-size: 18px;
        margin: 20px 80px 26px 0;
    }
`

export const ButtonDowload = styled.button`
    width: 150px;
    height: 40px;
    margin: 80px 12px 0 0;
    padding: 5px 30px 7px 31px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #bf213e;
    border: none;
    text-align: center;
    box-shadow: none;
    cursor: pointer;
    &:hover{
        background-color: #911b30; 
        transition: background-color 1s;
    }
    @media(max-width: 800px) {
        margin: 70px 12px 0 0;
    }
`

export const TextButton = styled.a`
    width: 85px;
    height: 20px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
`