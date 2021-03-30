import React from "react"
import * as S from "./styled"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import whatsapp from "../../assets/whatsapp.png"
import photo from "../../assets/photo.jpg"


export default function Presentation() {
    return (
        <S.MainContainer id="presentation">
            <S.ImageContainer>
                <S.ImageUser src={photo} alt="foto usuário" title="Rafaela Quinzel" />
            </S.ImageContainer>
            <S.TextContainer>
                <S.SocialContainer>
                    <S.SocialIcons src={linkedin} title="Ver perfil no Linkedin" />
                    <S.SocialIcons src={github} title="Ver perfil no Github" />
                    <S.SocialIcons src={whatsapp} title="Enviar mensagem" />
                </S.SocialContainer>
                <S.TitleContainer>Eu sou <br /> Rafaela Quinzel</S.TitleContainer>
                <S.Title>Desenvolvedora Web Full Stack</S.Title>
                <S.Paragraph>Apaixonada por tecnologia e programação</S.Paragraph>
            </S.TextContainer>
        </S.MainContainer>
    )
}