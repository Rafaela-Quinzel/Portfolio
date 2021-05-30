import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100vw;
    height: 450px;
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
    margin: 30px auto 10px 15px;

    /* @media(max-width: 800px) {
       width: 164%;
    } */
`

export const FrontContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
   // margin: 1rem 0.5rem 1rem 5rem;
`

export const BackContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    //margin: 0.5rem 0 1rem 3rem;
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
`

export const Subtitle = styled.h2`
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    color: #ffffff;
    margin: 12px 0;
`

export const Text = styled.p`
    font-size: 0.68rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5rem;
    letter-spacing: -0.15px;
    color: #ffffff;
    

    /* @media(max-width: 800px) {
        font-size: 18px;
        letter-spacing: -0.10px;
    } */
`

export const LanguagesContainer = styled.div`
    display: flex; 
    justify-content: space-evenly;
    align-items: center;
    width: 85%;
    margin: 40px auto 0 5%;
`

export const Icons = styled.img`
   width: 40px;
`