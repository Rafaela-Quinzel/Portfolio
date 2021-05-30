import styled from "styled-components"
import { Link } from "react-scroll"


export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 65px;
    background-color: #d97824;
    position: fixed;
    z-index: 1;
    box-shadow: 0 5px 5px rgba(12, 12, 12, 0.685);

    @media screen and (min-width: 1024px) {
    
    }
    
`

export const NavContainer = styled.div`
   display: none;

    @media screen and (min-width: 1024px) {
      display: flex;
      align-items: center;
      background: none;
      max-width: 450px;
      height: 50px;
      float: right;
      margin: 0 2% 0 15%;
    }

    @media screen and (min-width: 1080px) {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: none;
      max-width: 500px;
      height: 50px;
    }
`

export const Wrapper = styled.div`
   display: grid;
   align-items: center;
   z-index: 1;
   width: 100%;
   height: 25vh;
   margin: 260px 0 0 0;
   position: absolute;
   background-color: gray;

 @media sreen and (min-width: 1024px) {
    display: flex;
 }
`

export const Name = styled(Link)`
    font-size: 1.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #ffffff;
    text-decoration: none;
    margin-left: 20px;
    

    @media screen and (min-with: 1024px) {
        margin: 0 65rem 0 2rem;
        font-size: 21px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        color: #ffffff;
        text-decoration: none;
        cursor: pointer;
    }

`

export const Anchor = styled(Link)`
    margin: 1rem;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;

    @media screen and (min-width: 800px) {
        margin: 1rem;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.22px;
        text-align: center;
        color: #ffffff;
        cursor: pointer;
        text-decoration: none;
    }
`

export const ButtonOpenMenu = styled.button`
   display: block;
   float: right;
   margin-right: 1em;
   background: transparent;
   border: none;
   font-size: 14px;
   color: white;
   margin-right: 30px;

    @media screen and (min-width: 1024px) {
      display: none;
    }
`

export const ButtonCloseMenu = styled.button`
   display: block;
   float: right;
   margin-right: 30px;
   background: transparent;
   border: none;
   font-size: 28px;
   color: white;

    @media screen and (min-width: 1024px) {
      display: none;
    }
`

