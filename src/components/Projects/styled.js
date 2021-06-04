import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100vw;
    height: 75vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(17, 16, 16, 0.3);

    @media screen and (min-width: 780px) {
        height: 95vh;
    }

`

export const TitlePage = styled.h1`
    margin: 0 auto 15% auto;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #8D1C31;

    @media screen and (min-width: 600px) {
        margin: 10% auto 8% auto;
    }

    @media screen and (min-width: 1024px) {
        margin: 4% auto 5% auto;
    }

    @media screen and (min-width: 1080px) {
        margin: 10% auto 6% auto;
    }
`

export const Wrappers = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 80%;
   height: 50%;
   margin: 10px auto 5px auto;

    @media screen and (min-width: 600px) {
       width: 85%;
       height: 50%;
    }

    @media screen and (min-width: 1024px) {
        width: 65%;
        height: 70%;
        margin: 5px auto 0 auto;
        justify-content: center;
    }

    @media screen and (min-width: 1080px) {
        width: 55%;
        height: 50%;
    }
`

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 20%;

    @media screen and (min-width: 600px) {
        margin-bottom: 5%;
        height: 90%;
    }

    @media screen and (min-width: 1024px) {
        height: 95%;
    }
`

export const CardProjectOne = styled.div`
    box-shadow: inset 0 0 1em #1a1c1daf, 0 0 1em #272a2baf;
    background-image: url("/labexhome.png");
    background-size: 95% 90%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    width: 100%;
    height: 95%;

    @media screen and (min-width: 600px) {
        height: 100%;
    }
   
    @media screen and (min-width: 1024px) {
        cursor: pointer;
        height: 100%;
    }
    
`

export const CardProjectTwo = styled.div`
    box-shadow: inset 0 0 1em #1a1c1daf, 0 0 1em #272a2baf;
    background-image: url("/labeddithome.png");
    background-size: 95% 90%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    width: 100%;
    height: 95%;
    
    @media screen and (min-width: 1024px) {
        cursor: pointer;
        height: 100%;
    }
`

export const CardProjectThree = styled.div`
    background-image: url("/soundlabhome.png");
    background-size: 95% 90%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 0 1em #1a1c1daf, 0 0 1em #272a2baf;
    border-radius: 10px;
    width: 100%;
    height: 95%;

    @media screen and (min-width: 1024px) {
        cursor: pointer;
        height: 100%;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    color: transparent;
 
    @media(max-width: 800px) {
        display: none;
    }
`

export const Text = styled.div`
    font-weight: normal;
    font-stretch: normal;
    font-style: bold;
    line-height: normal;
    letter-spacing: -0.28px;
    text-align: center;
    color: transparent;
    text-decoration: none;
  
    &:hover{
        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;
        padding: 10% 5% 0 5%;
        border-radius: 10px;
        border: 2px solid white;  
    }

    @media screen and (min-width: 600px) {
       font-size: 1rem;
    }

    @media(max-width: 800px) {
        display: none;
    } 
`

export const TitleProject = styled.h1`
    &:hover{
    color: ${props => props.color};
    }
`

export const AboutProject = styled.p`
    font-size: 22px;
    margin: ${props => props.margin};
`

export const SeeProject = styled.a`
    font-size: 30px;
    text-decoration: none;

    &:hover{
       background-color: #8D1C31;
       border-radius: 10px;
       padding: 2% 5% 2% 5%;
       font-size: 34px;
       text-decoration: none;
    }

    &:active{
        text-decoration: none;
        color: white;
    }

    &:visited{
        text-decoration: none;
        color: white;
    }
`


export const TextContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    padding: 4%;
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
`

export const TitleCard = styled.h1`
    font-size: 2rem;
    display: block;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.20px;
    color: #33A6A6;
    text-shadow: 1px 1px 1px #8D1C31;


    @media screen and (min-width: 1024px){
        font-size: 2.4rem;
    }
`

export const DescriptionProject = styled.p`
    display: flex;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6rem;
    letter-spacing: -0.20px;
    text-align: center;

    @media screen and (min-width: 600px) {
        font-size: 0.9rem;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.2rem;
        margin-top: 2%;
    }
` 

export const ButtonCard = styled.a`
    display: block;
    border-radius: 8px;
    padding: 4%;
    margin: 5% auto 4% auto;
    width: 150px;
    height: 35px;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    text-align: center;
    background-color:  #8D1C31;
    text-decoration: none;

    &:active{
        text-decoration: none;
        color: white;
    }

    &:visited{
        text-decoration: none;
        color: white;
    }

    @media screen and (min-width: 600px) {
        padding: 2% 0 5% 0;
    } 
` 

export const ButtonProjects = styled.a`
    width: 50vw;
    height: 6.5vh;
    margin: 5% auto;
    border-radius: 8px;
    background-color: #063447;
    border: none;
    text-align: center;
    box-shadow: none;
    padding:  4% 2%;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    text-decoration: none;
  
    &:active{
        text-decoration: none;
        color: white;
    }

    &:visited{
        text-decoration: none;
        color: white;
    }


    @media screen and (min-width: 480px) {
        width: 40vw;
        height: 8vh;
        padding:  4% 2%;
    }
    

    @media screen and (min-width: 600px) {
        width: 35vw;
        height: 8vh;
        margin: 5% auto 10% auto;
        padding:  2% 2%;
    }

    @media screen and (min-width: 1024px) {
        margin: 4% auto 4% auto;
        padding: 2% 2%;
        width: 20vw;
        height: 9vh;
        cursor: pointer;
        
        &:hover{
            background-color: #052a3a; 
            transition: background-color 1s;
            
        }
    }

    @media screen and (min-width: 1080px) {
        height: 4vh;
        width: 16vw;
        margin: 4% auto 10% auto;
        padding:  1% 2% 2.4% 2%;
    }
`




