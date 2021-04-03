import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100%;
    height: 540px;
    padding: 40px 165px 119px 170px;
    background-color: #052635d5;

    @media(max-width: 800px) {
       padding: 45px 165px 119px 140px;
       width: 362%;
       height: 640px;
    }
`

export const TitlePage = styled.h1`
    margin: 0 auto;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #ffffff;
`

export const InfoContainer = styled.div`
   width: 380px;
   height: 340px;
   margin-top: 5%;

    @media(max-width: 800px) {
        width: 390px;
        margin-top: 10%;
    }
`

export const Subtitle = styled.h2`
    margin: 10px 77px 2px 0;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;

    @media(max-width: 800px) {
       font-size: 22px;
       margin: 20px 77px 2px 0;
    }
`

export const Intitution = styled.h3`
    margin: 4px 77px 12px 0;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;
`

export const Duration = styled.p`
    margin: 4px 77px 12px 0;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;
`

export const Period = styled.p`
    margin: 4px 77px 12px 0;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;
`

export const Description = styled.p`
    margin: 12px 0 0 0;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6rem;
    letter-spacing: -0.10px;
    color: #ffffff;

    @media(max-width: 800px) {
        font-size: 18px;
        margin: 15px 0 0 0;
    }
`



