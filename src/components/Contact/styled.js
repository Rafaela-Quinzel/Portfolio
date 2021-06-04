import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100vw;
    height: 60vh;
    background-color: #8d1c31;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 780px) {
      height: 65vh;
    }

    @media screen and (min-width: 1080px) {
      height: 70vh;
    }
`

export const TitleContainer = styled.h1`
    margin: 10% auto 5% auto;
    font-size: 1.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.25px;
    text-align: center;
    color: #ffffff;

    @media screen and (min-width: 1024px) {
        margin: 5% auto 5% auto;
    }
`

export const TextContainer = styled.div`
    width: 85%;
    height: 40%;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;
    text-align: center;
    color: #ffffff;
    margin: 2% auto 51px auto;
    text-align: center;

    @media screen and (min-width: 1024px) {
        width: 70%;
        margin: 0 auto 51px auto;
    }

    @media screen and (min-width: 1080px) {
      width: 50%;
    }
`

export const Text = styled.p`
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8rem;
    letter-spacing: -0.24px;
    text-align: center;
    color: #ffffff;
`

export const TextContact = styled.p`
    margin: 4% auto 5px auto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;
    text-align: center;
    color: #ffffff;
`

export const SocialContainer = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin: 10px auto 0 auto;
   width: 55%;

    @media screen and (min-width: 600px) {
       margin: 10px auto 5% auto;
    }

    @media screen and (min-width: 1024px) {
        width: 40%;
    }
`

export const SocialIcons = styled.img`
   width: 20px;

    @media screen and (min-width: 600px) {
       width: 30px;
    }

    @media screen and (min-width: 1024px) {
      cursor: pointer;
    }
`

export const SocialLink = styled.a`
`