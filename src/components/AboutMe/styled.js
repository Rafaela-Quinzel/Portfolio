import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100vw;
    height: 80vh;
    background-color: #063447;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1024px) {
        height: 85vh;
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
        width: 100%;
        height: 90%;
        margin: 4% auto;
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
    margin-top: 4%;

    @media screen and (min-width: 600px){
      font-size: 1.8rem;
    }

    @media screen and (min-width: 1024px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1080px) {
       margin-top: 1%;
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
        width: 90%;
        height: 40%;
    }

    
    @media screen and (min-width: 1080px) {
        width: 85%;
        height: 50%;
        margin: 4% 0;
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
        font-size: 1.2rem;
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

    @media screen and (min-width: 600px) {
        width: 180px;
        height: 40px;
    }
    
    @media screen and (min-width: 1024px) {
        width: 200px;
        height: 45px;
        margin-top: 8%;
        cursor: pointer;

        &:hover{
            background-color: #911b30; 
            transition: background-color 1s;
        }
    }

    @media screen and (min-width: 1080px) {
        margin: 0 auto;
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