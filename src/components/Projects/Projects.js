import React from "react"
import * as S from "./styled"


function Projects() {
    return (
        <S.MainContainer className="my-projects">
            <S.TitlePage>Meus Projetos</S.TitlePage>
            <S.CardProjectLeft
                ata-aos="fade-zoom-in" data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <S.TitleCard>Projeto 01</S.TitleCard>
            </S.CardProjectLeft>
            <S.CardProjectRight
                ata-aos="fade-zoom-in" data-aos-duration="1500"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <S.TitleCard>Projeto 02</S.TitleCard>
            </S.CardProjectRight>
            <S.CardProject
                ata-aos="fade-zoom-in" data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <S.TitleCard>Projeto 03</S.TitleCard>
            </S.CardProject>
        </S.MainContainer>
    )
}
export default Projects