import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100%;
    height: 1250px;
    background-color: #f2f2f2;

    @media(max-width: 800px) {
       width: 78rem;
       height: 1200px;
    }
`

export const TitlePage = styled.h1`
    margin: 4% auto 5% auto;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #8D1C31;

    @media(max-width: 800px) {
        margin: 5% auto 10% auto;
        font-size: 30px;
    }
`

export const CardProjectOne = styled.div`
    box-shadow: inset 0 0 1em #1a1c1daf, 0 0 1em #272a2baf;
    background-image: url("/labexhome.png");
    background-size: 95% 90%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    width: 35vw;
    height: 44vh;
    margin: 4% 2% 0 8%;
    cursor: pointer;

    @media(max-width: 800px) {
        width: 390px;
        height: 42vh;
        padding: 0;
    }
`

export const CardProjectTwo = styled.div`
    box-shadow: inset 0 0 1em #1a1c1daf, 0 0 1em #272a2baf;
    background-image: url("/labeddithome.png");
    background-size: 95% 90%;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 10px;
    width: 35vw;
    height: 44vh;
    margin: 0 8% 0 8%;
    float: right;
    cursor: pointer;

    @media(max-width: 800px) {
        width: 390px;
        height: 42vh;
        padding: 0; 
    }
`

export const CardProjectThree = styled.div`
    background-image: url("/soundlabhome.png");
    background-size: 95% 90%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 0 1em #1a1c1daf, 0 0 1em #272a2baf;
    border-radius: 10px;
    width: 35vw;
    height: 44vh;
    margin: 22% 2% 4% 8%;
    cursor: pointer;

    @media(max-width: 800px) {
        width: 390px;
        height: 42vh;
        padding: 0; 
        margin-top: 24%;
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
    display: none;

    @media(max-width: 800px){
        font-size: 3rem;
        display: block;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.20px;
        color: #33A6A6;
        text-shadow: 1px 1px 1px #8D1C31;
        cursor: default;
    }
`

export const DescriptionProject = styled.p`
    display: none;

    @media(max-width: 800px) {
        display: flex;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.6rem;
        letter-spacing: -0.20px;
        text-align: center;
        cursor: default;
    }
` 

export const ButtonCard = styled.a`
    display: none;

    @media(max-width: 800px) {
        display: block;
        border-radius: 8px;
        padding: 4%;
        margin: 5% auto 4% auto;
        width: 160px;
        height: 45px;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        text-align: center;
        background-color:  #8D1C31;
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

export const ButtonProjects = styled.button`
    width: 250px;
    height: 40px;
    margin: 45px auto 0 42%;
    padding: 5px 30px 7px 31px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #063447;
    border: none;
    text-align: center;
    box-shadow: none;
    cursor: pointer;
    &:hover{
        background-color: #052a3a; 
        transition: background-color 1s;
    }

    @media(max-width: 800px) {
        margin: 10% auto 0 40%;
        width: 280px;
        height: 60px;
    }
`

export const TextButton = styled.a`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;

    @media(max-width: 800px) {
        font-size: 18px;
    }
`


