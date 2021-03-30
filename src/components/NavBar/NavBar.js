import React from "react"
import * as S from "./styled"


export default function Navbar() {
    return (
        <S.MainContainer>
            <S.Name>Rafaela</S.Name>
            <S.Anchor>Quem sou</S.Anchor>
            <S.Anchor>Projetos</S.Anchor>
            <S.Anchor>Contato</S.Anchor>
        </S.MainContainer>
    )
}