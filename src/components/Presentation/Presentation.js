import React from "react"
import * as S from "./styled"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import whatsapp from "../../assets/whatsapp.png"


export default function Presentation() {
    return (
        <S.MainContainer>
            <S.ImageUser src="https://i.pinimg.com/564x/bd/ba/bc/bdbabc1fd61a89da0049236157085ae0.jpg" alt="" />

            <S.TextContainer>
                <S.SocialContainer>
                    <S.SocialIcons src={linkedin} />
                    <S.SocialIcons src={github} />
                    <S.SocialIcons src={whatsapp} />
                </S.SocialContainer>
                <S.TitleContainer>Eu sou <br /> Rafaela Quinzel</S.TitleContainer>
                <S.Title>Desenvolvedora Web Full Stack</S.Title>
                <S.Paragraph>Apaixonada por tecnologia e programação</S.Paragraph>

            </S.TextContainer>
        </S.MainContainer>
    )
}