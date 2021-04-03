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
                <S.ImageContainer>
                    <S.Text>
                        <S.TitleProject>Labe X</S.TitleProject>
                        <br />
                        <S.AboutProject margin="20px">
                            Trata-se de uma aplicação com funcionalidades básicas de um site para viagens espaciais.
                        </S.AboutProject>
                        <br />
                        <S.SeeProject
                            href="https://github.com/Rafaela-Quinzel/LabeX"
                            target="_blank"
                        >
                            VER PROJETO
                        </S.SeeProject>
                    </S.Text>
                </S.ImageContainer>
                <S.TextContainer>
                    <S.TitleCard>Labe X</S.TitleCard>
                    <S.DescriptionProject>
                        Trata-se de uma aplicação com funcionalidades básicas de um site para viagens espaciais.
                        <br />
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

            <S.CardProjectTwo
                ata-aos="fade-zoom-in" data-aos-duration="1500"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <S.ImageContainer>
                    <S.Text>
                        <S.TitleProject>LabEddit</S.TitleProject>
                        <br />
                        <S.AboutProject margin="20px">
                            Projeto Front-end baseado na rede social Reddit.
                            Esse projeto foi desenvolvido com Create React App.
                        </S.AboutProject>
                        <br />
                        <S.SeeProject
                            href="https://github.com/Rafaela-Quinzel/LabEddit"
                            target="_blank"
                        >
                            VER PROJETO
                        </S.SeeProject>
                    </S.Text>
                </S.ImageContainer>

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

            <S.CardProjectThree
                ata-aos="fade-zoom-in" data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <S.ImageContainer>
                    <S.Text>
                        <S.TitleProject>Projeto SoundLab</S.TitleProject>
                        <br />
                        <S.AboutProject margin="20px">
                            Projeto Front-end que trata-se de uma aplicação com funcionalidades básicas de um site para streaming de músicas.
                        </S.AboutProject>
                        <br />
                        <S.SeeProject href="https://github.com/Rafaela-Quinzel/Frontend-Project" target="_blank">VER PROJETO</S.SeeProject></S.Text>
                </S.ImageContainer>
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