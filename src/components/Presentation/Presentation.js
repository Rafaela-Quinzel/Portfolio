import React from "react"
import * as S from "./styled"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import whatsapp from "../../assets/whatsapp.png"
import photo from "../../assets/photo.jpg"
import email from "../../assets/email.svg"


export default function Presentation() {

    return (
        <S.MainContainer className="presentation">
            <S.ImageContainer>
                <S.ImageUser
                    src={photo}
                    alt="foto usuário"
                    title="Rafaela Quinzel"
                />
            </S.ImageContainer>

            <S.TextContainer>
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
                        target="_blank"
                    >
                        <S.SocialIcons
                            src={github}
                            title="Ver perfil no Github"
                        />
                    </S.SocialLink>
                    <S.SocialLink
                        href="https://api.whatsapp.com/send?phone=5551983017926"
                        target="_blank"
                    >
                        <S.SocialIcons
                            src={whatsapp}
                            title="Enviar mensagem"
                        />
                    </S.SocialLink>
                    <S.SocialLink
                        href="mailto:rafaelaquinzel@gmail.com"
                        target="_blank"
                    >
                        <S.SocialIcons
                            src={email}
                            title="Enviar mensagem"
                        />
                    </S.SocialLink>
                </S.SocialContainer>
                
                <S.TitleContainer>Eu sou <br /> Rafaela Quinzel</S.TitleContainer>
                <S.Title>Desenvolvedora Web Full Stack</S.Title>
                <S.Paragraph>Apaixonada por tecnologia e programação</S.Paragraph>
            </S.TextContainer>
        </S.MainContainer>
    )
}


