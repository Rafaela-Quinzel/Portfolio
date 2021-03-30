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
    width: 183px;
    height: 30px;
    margin: 4% auto;
    font-size: 25px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.15px;
    text-align: center;
    color: #45525b;
`

export const CardProjectLeft = styled.div`
    border: 1px solid red;
    border-radius: 10px;
    width: 40vw;
    height: 30vh;
    margin: 4% 2% 0 4%;
`

export const CardProjectRight = styled.div`
    border: 1px solid red;
    border-radius: 10px;
    width: 40vw;
    height: 30vh;
    margin: 0 5% 0 4%;
    float: right;
`

export const CardProject = styled.div`
    border: 1px solid red;
    border-radius: 10px;
    width: 40vw;
    height: 30vh;
    margin: 15% 2% 0 4%;
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