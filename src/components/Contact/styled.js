import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100%;
    height: 397px;
    padding: 45px 378px 52px 379px;
    background-color: #8d1c31;
    align-self: center;
    margin-top: 10%;

    @media(max-width: 800px) {
       width: 362%;
    }
`

export const TitleContainer = styled.h1`
    width: 290px;
    height: 52px;
    margin: 0 auto 35px auto;
    font-size: 42px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.25px;
    text-align: center;
    color: #ffffff;
`

export const TextContainer = styled.div`
    width: 523px;
    height: 110px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.24px;
    text-align: center;
    color: #ffffff;
    margin: 10px auto 51px auto;
  
    @media(max-width: 800px) {
        width: 430px;
        height: 110px;
    }
`

export const Text = styled.p`
    margin: 10px auto 20px auto;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.8rem;
    letter-spacing: -0.24px;
    text-align: center;
    color: #ffffff;
`

export const TextContact = styled.p`
    margin: 10px auto 5px auto;
    font-size: 18px;
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
   justify-content: center;
   margin: 10px auto 0 auto;
   width: 20px;
   
`

export const SocialIcons = styled.img`
   width: 30px;
   height: 27px;
   margin: 20px auto 5px 20px;
   cursor: pointer;
`

export const SocialLink = styled.a`
    @media(max-width: 800px) {
        margin: 20px auto 5px 20px;
    }
`