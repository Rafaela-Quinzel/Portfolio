import styled from "styled-components"


export const MainContainer = styled.div`
   width: 100vw;
   height: 60vh;
   background-color: #8d1c31;

   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (min-width: 780px) {
     height: 80vh;
   }

   @media screen and (min-width: 1024px) { 
      height: 90vh;
   }

   @media screen and (min-width: 1080px) { 
      height: 95vh;
   }
`

export const ImageContainer = styled.div`
   width: 28%;
   height: 32%;
   margin: 0 5% 0 5%;

   @media screen and (min-width: 400px) { 
      margin-top: 5%;
      width: 30%;
      height: 50%;
   }

   @media screen and (min-width: 600px) { 
      margin-top: 5%;
      width: 25%;
      height: 50%;
   }

   @media screen and (min-width: 1024px) {
      width: 40%;
      height: 500px;
      margin: 64px 0 0 0;
   }

   @media screen and (min-width: 1080px) {
      width: 35%;
      height: 530px;
      margin: 64px 0 0 0;
   }
`

export const ImageUser = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 10px;

   @media screen and (min-width: 1024px) {
      border-radius: 0;
   }
`

export const TextContainer = styled.div`
   width: 55%;
   height: 35%;
   margin: 40px auto 0 0;

   @media screen and (min-width: 600px){
      width: 60%;
      height: 40%;
   }
   
   @media screen and (min-width: 1024px) {
      width: 50%;
      height: 35%;
      margin: 10% auto 0 4%;
   }

   @media screen and (min-width: 1024px) {
      margin: 5% auto 0 6%;
   }
`

export const SocialContainer = styled.div`
  display: none;

   @media screen and (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      margin: 0 0 0 40px;
      width: 20px;
      float: right;
   }
`

export const SocialIcons = styled.img`
   width: 30px;
   height: 27px;
   margin: 0 0 14px 15px;
   cursor: pointer;

   @media screen and (min-width: 1080px) {
      margin: 0 0 25px 15px;
   }
`

export const SocialLink = styled.a`
`

export const TitleContainer = styled.h1`
   width: 100%;
   font-size: 1.4rem;
   font-weight: bold;
   font-stretch: normal;
   font-style: normal;
   line-height: normal;
   letter-spacing: -0.29px;
   color: #d97824;

   @media screen and (min-width: 600px){
      font-size: 2rem;
   }

   @media screen and (min-width: 1024px) {
      width: 80%;
      font-size: 2.8rem;
   }
`

export const Title = styled.h1`
   margin: 15px auto 6px 0;
   font-size: 0.875rem;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: normal;
   letter-spacing: -0.32px;
   color: #ffffff;

   @media screen and (min-width: 600px){
      font-size: 1.4rem;
   }   
`

export const Paragraph = styled.p`
   font-size: 0.578rem;
   letter-spacing: -0.10px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: normal;
   letter-spacing: -0.22px;
   color: #ffffff;

   @media screen and (min-width: 600px){
      font-size: 0.9rem;
   }

   @media screen and (min-width: 1024px) {
      font-size: 1rem;
   }
`

