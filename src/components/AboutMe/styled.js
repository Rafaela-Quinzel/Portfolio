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

export const TextAbout = styled.p`
    width: 600px;
    height: 122px;
    margin: 20px 112px 26px 0;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.16px;
    color: #ffffff;
    @media(max-width: 800px) {
        font-size: 18px;
        margin: 20px 80px 26px 0;
    }
`

export const LanguagesContainer = styled.div`
    display: flex; 
    /* justify-content: center; */
`

export const Languages = styled.p`
    width: 80px;
    height: 18px;
    margin: 5px 0 5px 0;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;
`

export const ButtonDowload = styled.button`
    width: 140px;
    height: 40px;
    margin: 32px 12px 0 0;
    padding: 5px 30px 7px 31px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #bf213e;
    border: none;
    text-align: center;
    cursor: pointer;
    @media(max-width: 800px) {
        margin: 70px 12px 0 0;
    }
`

export const TextButton = styled.p`
    width: 79px;
    height: 18px;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    text-align: center;
    color: #ffffff;
`