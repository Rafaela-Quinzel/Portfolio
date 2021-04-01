import React from "react"
import * as S from "./styled"


function Projects() {

    return (
        <S.MainContainer className="my-projects">
            <S.TitlePage>Meus Projetos</S.TitlePage>
            <S.CardProjectOne
                ata-aos="fade-zoom-in" data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <S.TitleCard>Projeto 01</S.TitleCard>
                <S.Text>Ver projeto</S.Text>
            </S.CardProjectOne>
            <S.CardProjectTwo
                ata-aos="fade-zoom-in" data-aos-duration="1500"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <S.TitleCard>Projeto 02</S.TitleCard>
                <S.Text>Ver projeto</S.Text>
            </S.CardProjectTwo>
            <S.CardProjectThree
                ata-aos="fade-zoom-in" data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <S.TitleCard>Projeto 03</S.TitleCard>
                <S.Text>Ver projeto</S.Text>
            </S.CardProjectThree>
            <S.ButtonProjects title="Ver mais Projetos">
                <S.TextButton
                    href="https://github.com/Rafaela-Quinzel?tab=repositories"
                    target="_blank"
                >
                    VER MAIS PROJETOS
                </S.TextButton>
            </S.ButtonProjects>
        </S.MainContainer>
    )
}
export default Projects