import styled from "styled-components"


export const MainContainer = styled.div`
   width: 100%;
   height: 538px;
   padding: 62px 319px 69px 281px;
   background-color: #063447;

    @media(max-width: 800px) {
        padding: 32px 10px 69px 80px;
        width: 362.1%;
    }
`

export const wrappers = styled.div`
/* border: 1px solid red; */

    @media(max-width: 800px) {
        width: 90%;
        height: 100%;
        margin: 2% 10% 2% 0;
    }
`

export const TitleContainer = styled.h1`
    margin: 7px 29px 20px 0;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;

    @media(max-width: 800px) {
        margin: 8px 29px 2px 0;
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
    /* border: 1px solid green; */

    @media(max-width: 800px) {
        width: 890px;
        height: 250px;
        font-size: 18px;
        margin: 10px 70px 26px 0;
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
        font-size: 20px;
        margin: 25px 5px 26px 0;
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
        margin: 30px 12px 0 0;
        width: 250px;
        height: 48px;
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

    @media(max-width: 800px) {
        font-size: 20px;
    }
`