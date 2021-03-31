import React from "react"
import * as S from "./styled"


export default function Navbar() {
    return (
        <S.MainContainer>
            <S.Name
                to="presentation"
                smooth={true}
                duration={1500}
            >
                Rafaela
            </S.Name>
            <S.Anchor
                to="about-me"
                smooth={true}
                duration={1500}
            >
                Sobre mim
                </S.Anchor>
            <S.Anchor
                to="my-projects"
                smooth={true}
                duration={1500}
            >
                Projetos
                </S.Anchor>
            <S.Anchor
                to="contact"
                smooth={true}
                duration={1500}
            >
                Contato
                </S.Anchor>
        </S.MainContainer>
    )
}