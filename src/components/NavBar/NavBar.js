import React from "react"
import * as S from "./styled"


export default function Navbar() {
    return (
        <S.MainContainer>
            <S.Name href="#presentation">Rafaela</S.Name>
            <S.Anchor href="#about-me">Sobre mim</S.Anchor>
            <S.Anchor href="#my-projects">Projetos</S.Anchor>
            <S.Anchor href="#contact">Contato</S.Anchor>
        </S.MainContainer>
    )
}