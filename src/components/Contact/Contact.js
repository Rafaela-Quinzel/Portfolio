import React from "react"
import * as S from "./styled"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import whatsapp from "../../assets/whatsapp.png"

function Contact() {
    return (
        <S.MainContainer id="contact">
            <S.TitleContainer>Contrate-me!</S.TitleContainer>
            <S.TextContainer>
                <S.Text>
                    Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver e evoluir na minha carreira profissional.
                </S.Text>
                <S.TextContact>Email para contato: rafaelquinzel@gmail.com</S.TextContact>
                <S.TextContact>Celular: (51) 98301 - 7926</S.TextContact>
            </S.TextContainer>
            <S.SocialContainer>
                <S.SocialIcons src={linkedin} title="Ver perfil no Linkedin" />
                <S.SocialIcons src={github} title="Ver perfil no Github" />
                <S.SocialIcons src={whatsapp} title="Enviar mensagem" />
            </S.SocialContainer>
        </S.MainContainer>
    )
}
export default Contact