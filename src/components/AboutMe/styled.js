import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100vw;
    height: 60vh;
    background-color: #063447;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1024px) {
        width: 100%;
        height: 538px;
        padding: 62px 319px 69px 281px;
    }
`

export const Wrappers = styled.div`
    width: 85%;
    height: 90%;
    margin: 0 5% 2% 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1024px) {
        width: 90%;
        height: 100%;
        margin: 2% 10% 2% 0;
    }
`

export const TitleContainer = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;

    @media screen and (min-width: 600px){
      font-size: 1.8rem;
    }

    @media screen and (min-width: 1024px) {
        margin: 7px 29px 20px 0;
        font-size: 42px;
    }
`

export const TextContainer = styled.div`
    width: 95%;
    height: 75%;
    margin: 5% 0 10% 0;
    text-align: center;

    @media screen and (min-width: 600px){
        width: 90%;
        height: 70%;
        margin: 5% 0 0 0;
    }

    @media screen and (min-width: 1024px) {
        width: 890px;
        height: 250px;
        font-size: 18px;
        margin: 10px 70px 26px 0;
    }
`

export const TextAbout = styled.p`
    font-size: 0.9rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height:  1.5;
    letter-spacing: -0.10px;
    color: #ffffff;

    @media screen and (min-width: 600px){
        font-size: 1rem;
        line-height:  1.6;
    }

    @media screen and (min-width: 1024px) {
        font-size: 14px;
    }
`

export const ButtonDowload = styled.button`
    margin: 10% auto 0 % auto;
    width: 130px;
    height: 35px;
    border-radius: 5px;
    background-color: #bf213e;
    border: none;
    text-align: center;
    
    @media screen and (min-width: 1024px) {
        width: 150px;
        height: 40px;
        margin: 80px 12px 0 0;
        padding: 5px 30px 7px 31px;
        cursor: pointer;

        &:hover{
            background-color: #911b30; 
            transition: background-color 1s;
        }
    }
`

export const TextButton = styled.a`
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;

    @media screen and (min-width: 1024px) {
        font-size: 20px;
    }
`