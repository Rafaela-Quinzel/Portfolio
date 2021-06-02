import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100vw;
    height: 75vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(17, 16, 16, 0.3);
`

export const TitlePage = styled.h1`
    margin: 0 auto 12% auto;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #8D1C31;
`

export const Wrappers = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   width: 80%;
   height: 60%;
   margin: 5px auto 0 5%;

    @media screen and (min-width: 600px) {
       width: 90%;
    }
`

export const CardContainer = styled.div`
    width: 100%;
    height: 85%;
    margin-bottom: 20%;
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
   
    @media screen and (min-width: 1024px) {
        cursor: pointer;
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
    display: none;

    @media(max-width: 800px) {
        display: grid;
        width: 100%;
        height: 100%;
        padding: 4%;
        border-radius: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        text-align: center;
        color: white;
        background-color: rgba(0, 0, 0, 0.6);
    }
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
        display: none;
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
        display: none;
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

    @media screen and (min-width: 1024px){
        display: none;
    }

    
` 

export const ButtonProjects = styled.button`
    width: 50vw;
    height: 5vh;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #063447;
    border: none;
    text-align: center;
    box-shadow: none;
    cursor: pointer;

    @media screen and (min-width: 600px) {
        width: 40vw;
        height: 6vh;
    }

 

    @media screen and (min-width: 1024px) {
        margin: 10% auto 10% 40%;
        width: 290px;
        height: 70px;

        &:hover{
            background-color: #052a3a; 
            transition: background-color 1s;
        }
    }
`

export const TextButton = styled.a`
    font-size: 0.895rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
`


