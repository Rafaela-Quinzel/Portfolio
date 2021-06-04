import React from "react"
import * as S from "./styled"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Projects() {


    return (
        <S.MainContainer className="my-projects">
            <S.TitlePage>Meus Projetos</S.TitlePage>

            <S.Wrappers>
                <Carousel
                    className="carousel"
                    showArrows={true}
                    autoFocus={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={5000}
                >
                    <S.CardContainer>
                        <S.CardProjectOne>
                            <S.TextContainer>
                                <S.TitleCard>Labe X</S.TitleCard>
                                <S.DescriptionProject>
                                    Trata-se de uma aplicação com funcionalidades básicas de um site para viagens espaciais.
                                    Esse projeto Front-end foi desenvolvido com Create React App.
                            </S.DescriptionProject>
                                <S.ButtonCard
                                    href="https://github.com/Rafaela-Quinzel/LabeX"
                                    target="_blank"
                                >
                                    VER PROJETO
                            </S.ButtonCard>
                            </S.TextContainer>
                        </S.CardProjectOne>
                    </S.CardContainer>

                    <S.CardContainer>
                        <S.CardProjectTwo>
                            <S.TextContainer>
                                <S.TitleCard>LabEddit</S.TitleCard>
                                <S.DescriptionProject>
                                    Projeto Front-end baseado na rede social Reddit.
                                    Esse projeto foi desenvolvido com Create React App.
                                </S.DescriptionProject>
                                <S.ButtonCard
                                    href="https://github.com/Rafaela-Quinzel/LabEddit"
                                    target="_blank"
                                >
                                    VER PROJETO
                                </S.ButtonCard>
                            </S.TextContainer>
                        </S.CardProjectTwo>
                    </S.CardContainer>
                    <S.CardContainer>
                        <S.CardProjectThree>
                            <S.TextContainer>
                                <S.TitleCard>SoundLab</S.TitleCard>
                                <S.DescriptionProject>
                                    Projeto Front-end que trata-se de uma aplicação com funcionalidades básicas de um site para streaming de músicas.
                                    Esse projeto foi desenvolvido com Create React App.
                    </S.DescriptionProject>
                                <S.ButtonCard
                                    href="https://github.com/Rafaela-Quinzel/Frontend-Project" target="_blank"
                                >
                                    VER PROJETO
                    </S.ButtonCard>
                            </S.TextContainer>
                        </S.CardProjectThree>
                    </S.CardContainer>
                </Carousel>
            </S.Wrappers>

            <S.ButtonProjects
                title="Ver mais Projetos"
                href="https://github.com/Rafaela-Quinzel?tab=repositories"
                target="_blank"
            >
                VER MAIS PROJETOS
            </S.ButtonProjects>
        </S.MainContainer>
    )
}
export default Projects