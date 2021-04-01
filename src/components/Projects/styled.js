import styled from "styled-components"


export const MainContainer = styled.div`
    width: 100%;
    height: 797px;
    background-color: #f2f2f2;
    @media(max-width: 800px) {
       width: 362.1%;
    }
`

export const TitlePage = styled.h1`
    margin: 2% auto 4% auto;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #8D1C31;
`

export const CardProjectOne = styled.div`
    border: 1px solid red;
    border-radius: 10px;
    width: 40vw;
    height: 30vh;
    margin: 4% 2% 0 5%;
    cursor: pointer;
    &:hover{
        background-color: gray;
    }
`

export const CardProjectTwo = styled.div`
    border: 1px solid red;
    border-radius: 10px;
    width: 40vw;
    height: 30vh;
    margin: 0 5% 0 4%;
    float: right;
    cursor: pointer;
    &:hover{
        background-color: gray;
    }
`

export const CardProjectThree = styled.div`
    border: 1px solid red;
    border-radius: 10px;
    width: 40vw;
    height: 30vh;
    margin: 15% 2% 4% 5%;
    cursor: pointer;
    &:hover{
        background-color: gray;
    }
`

export const TitleCard = styled.h2`
  width: 172px;
  height: 52px;
  margin: 0 200px 0 0;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;
  color: #8d1c31;
`

export const ButtonProjects = styled.button`
    width: 250px;
    height: 40px;
    margin: 5px auto 0 42%;
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
        margin: 70px 12px 0 0;
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
`

export const Text = styled.a`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    text-align: center;
    color: #ffffff;
    text-decoration: none;
` 