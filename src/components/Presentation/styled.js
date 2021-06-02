import styled from "styled-components"


export const MainContainer = styled.div`
   width: 100vw;
   height: 60vh;
   background-color: #8d1c31;

   display: flex;
  // flex-direction: column;
   justify-content: center;
   align-items: center;

  //border: 1px solid green;

   @media screen and (min-width: 1024px) { 
      width: 100%;
      height: 530px;
      display: flex;
   }
`

export const ImageContainer = styled.div`
   width: 28%;
   height: 32%;
   margin: 0 5% 0 5%;
   
   //border: 1px solid black;

   @media screen and (min-width: 600px) { 
      margin-top: 5%;
      width: 30%;
      height: 50%;
   }

   @media screen and (min-width: 1024px) {
      width: 520px;
      height: 555px;
   }
`

export const ImageUser = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 10px;

   @media screen and (min-width: 1024px) {
      /* width: 490px;
      height: 530px;
      width: 340px;
      height: 380px;
      border-radius: 20px; */
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
      width: 72vw;
      height: 530px;
      padding: 123px 52px 162px 155px;
   }
`

export const SocialContainer = styled.div`
  display: none;

   @media screen and (min-width: 1024px) {
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
      margin: 110px 15px 6px 0;
      width: 380px;
      height: 122px;
      margin: 27px 10px 6px 0;
      font-size: 50px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.29px;
      color: #d97824;
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
   
   @media screen and (min-width: 1024px) {
      margin: 6px 189px 12px 10px;
      font-size: 24px;
  
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
      margin: 12px 207px 20px 45px;
      font-size: 16px;
   }
`

