import styled from "styled-components"

export const MainContainer = styled.div`
   width: 100%;
   height: 530px;
   display: flex;
   @media(max-width: 800px) { 
      width: 362%;
      height: 625px;
      background-color: #8d1c31;
   }
`

export const ImageContainer = styled.div`
   width: 520px;
   height: 525px;
   @media(max-width: 800px) {
      width: 400px;
      height: 335px;
      margin: 15% 0 2% 10%;
   }
`

export const ImageUser = styled.img`
   width: 520px;
   height: 530px;
   @media(max-width: 800px) {
      width: 350px;
      height: 335px;
      border-radius: 20px;
   }
`

export const TextContainer = styled.div`
   width: 68vw;
   height: 530px;
   padding: 123px 52px 162px 155px;
   background-color: #8d1c31;
   @media(max-width: 800px) {
      width: 300%;
      height: 625px;
      padding: 120px 0 100px 50px;
   }
`

export const TitleContainer = styled.h1`
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
   @media(max-width: 800px) {
      margin: 50px 15px 6px 0;
   }
`

export const Title = styled.h1`
   /* width: 356px;
   height: 29px; */
   margin: 6px 189px 12px 0;
   font-size: 24px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: normal;
   letter-spacing: -0.32px;
   color: #ffffff;
   @media(max-width: 800px) {
      margin: 50px auto 6px 0;
      font-size: 30px;
   }
`

export const Paragraph = styled.p`
   width: 338px;
   height: 19px;
   margin: 12px 207px 20px 0;
   font-size: 16px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: normal;
   letter-spacing: -0.22px;
   color: #ffffff;
   @media(max-width: 800px) {
      font-size: 18px;
   }
`

export const SocialContainer = styled.div`
   margin: 0 0 0 40px;
   width: 20px;
   float: right;
   @media(max-width: 800px) {
      display: none;
   }
`

export const SocialIcons = styled.img`
   width: 30px;
   height: 27px;
   margin: 0 0 14px 15px;
   cursor: pointer;
   /* object-fit: contain; */
`