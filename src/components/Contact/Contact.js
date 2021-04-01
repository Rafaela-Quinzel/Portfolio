import React from "react"
import * as S from "./styled"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import whatsapp from "../../assets/whatsapp.png"

function Contact() {

    return (
        <S.MainContainer className="contact">
            <S.TitleContainer>Contrate-me!</S.TitleContainer>
            <S.TextContainer>
                <S.Text>
                    Procuro oportunidade de trabalho onde eu possa aprender, me desenvolver e evoluir na minha carreira profissional.
                </S.Text>
                <S.TextContact>Email para contato: rafaelquinzel@gmail.com</S.TextContact>
                <S.TextContact>Celular: (51) 98301 - 7926</S.TextContact>
            </S.TextContainer>
            <S.SocialContainer>
                <S.SocialLink
                    href='https://linkedin.com/in/rafaela-quinzel-008799132'
                    target="_blank"
                >
                    <S.SocialIcons
                        src={linkedin}
                        title="Ver perfil no Linkedin"
                    />
                </S.SocialLink>
                <S.SocialLink
                    href="https://github.com/Rafaela-Quinzel"
                    target="_blank">
                    <S.SocialIcons
                        src={github}
                        title="Ver perfil no Github"
                    />
                </S.SocialLink>
                <S.SocialLink
                    href="https://api.whatsapp.com/send?phone=5551983017926"
                    target="_blank">
                    <S.SocialIcons
                        src={whatsapp}
                        title="Enviar mensagem"
                    />
                </S.SocialLink>
                <S.SocialLink
                    href="mailto:rafaelaquinzel@gmail.com"
                    target="_blank">
                    <S.SocialIcons
                        src={"https://www.vhv.rs/dpng/d/53-532333_logo-gmail-black-and-white-hd-png-download.png"}
                        title="Enviar mensagem"
                    />
                </S.SocialLink>
            </S.SocialContainer>
        </S.MainContainer>
    )
}
export default Contact