import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100vw;
    height: 80vh;
    background-color: #33a6a6;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1024px) {
       width: 100%;
       height: 480px;
    }
`

export const InfoContainer = styled.div`
    width: 85%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5% auto 2% 5%;
`

export const FrontContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const BackContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const TitlePage = styled.h1`
    margin: 30px auto 10px auto;
    font-size: 1.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #ffffff;

    @media screen and (min-width: 600px) {
        font-size: 1.8rem;
    }
`

export const Subtitle = styled.h2`
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;
    margin: 8% 0 2% 0;

    @media screen and (min-width: 600px) {
        font-size: 1.5rem;
        margin: 30px 0 10px 0;
    }
`

export const Text = styled.p`
    font-size: 0.68rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5rem;
    letter-spacing: -0.15px;
    color: #ffffff;

    @media screen and (min-width: 600px) {
        font-size: 1rem;
    }
`

export const LanguagesContainer = styled.div`
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    width: 85%;
    margin: 60px auto 0 5%;
`

export const Icons = styled.img`
   width: 35px;
`