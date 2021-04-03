import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100%;
    height: 480px;
    padding: 46px 317px 80px 281px;
    background-color: #33a6a6;
    display: grid;
    justify-items: center;

    @media(max-width: 800px) {
       width: 362%;
       height: 500px;
    }
`

export const InfoContainer = styled.div`
    width: 130%;
    display: flex;
    justify-content: center;

    @media(max-width: 800px) {
       width: 164%;
    }
`

export const FrontContainer = styled.div`
    display: grid;
    width: 50%;
    margin: 1rem 0.5rem 1rem 5rem;
`

export const BackContainer = styled.div`
    display: grid;
    width: 50%;
    margin: 0.5rem 0 1rem 3rem;
`

export const TitlePage = styled.h1`
    margin: 0 auto 42px auto;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #ffffff;
`

export const Subtitle = styled.h2`
    font-size: 55px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;
    margin-bottom: 10px;
`

export const Text = styled.p`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5rem;
    letter-spacing: -0.15px;
    color: #ffffff;

    @media(max-width: 800px) {
        font-size: 18px;
        letter-spacing: -0.10px;
    }
`

export const LanguagesContainer = styled.div`
    display: flex; 
    justify-content: space-evenly;
    align-self: center;
    width: 50%;
    margin: 9% auto 5% auto;

    @media(max-width: 800px) {
        width: 70%;
    }
`

export const Languages = styled.p`
    margin: 20px 0 5px 0;
`