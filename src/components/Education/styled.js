import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: #052635d5;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 1024px) {
        height: 95vh;
        justify-content: center;
    }
`

export const TitlePage = styled.h1`
    margin: 20px auto 10px auto;
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

export const InfoContainer = styled.div`
   width: 85%;
   height: 85%;
   margin: 0 auto 0 5%;
 
   display: flex;
   flex-direction: column;
   justify-content: space-around;

    @media screen and (min-width: 600px) {
        width: 90%;
        margin: 0 auto 0 3%;
    }

    @media screen and (min-width: 1024px) {
        width: 80%;
        height: 60%;
        margin: 5% auto ;

        flex-direction: row;
        align-items: center;
    }
`


export const CourseContainer = styled.div`
   width: 100%;
   height: 46%;
   padding: 4% 2% 0 3%;
   box-sizing: border-box;

   display: flex;
   flex-direction: column;
   border-radius: 10px;

   border: 1px outset whitesmoke;

    @media screen and (min-width: 1024px) {
        height: 100%;
        width: 45%;
        padding: 2% 4% 0 3%;
    }
`

export const Subtitle = styled.h2`
    font-size: 0.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;

    @media screen and (min-width: 600px) {
        font-size: 1rem;
    }

    @media screen and (min-width: 1024px) {
       font-size: 22px;
       margin: 20px 77px 2px 0;
    }
`

export const Intitution = styled.h3`
    font-size: 0.8rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;

    @media screen and (min-width: 600px) {
        font-size: 0.95rem;
    }
`

export const LogoIntitution = styled.img`
  width: 15px;
  margin: 8px 4px 0 0;

    @media screen and (min-width: 600px) {
        width: 20px;
    }
`

export const Duration = styled.p`
    margin-top: 5px;
    font-size: 0.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;

    @media screen and (min-width: 600px) {
        margin-top: 10px;
        font-size: 0.8rem;
    }
`

export const Period = styled.p`
    font-size: 0.5rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;

    @media screen and (min-width: 600px) {
        margin-top: 5px;
        font-size: 0.8rem;
    }
`

export const Description = styled.p`
    font-size: 0.6rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6rem;
    letter-spacing: -0.10px;
    color: #ffffff;

    @media screen and (min-width: 600px) {
        margin-top: 5px;
        font-size: 0.8rem;
    }

    @media screen and (min-width: 1024px) {
        margin-top: 15px;
        font-size: 0.875rem;
    }

`



