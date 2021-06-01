import React from "react"
import * as S from "./styled"



function Education() {

    return (
        <S.MainContainer>
            <S.TitlePage>Educação</S.TitlePage>

            <S.InfoContainer>
                <S.CourseContainer
                    // ata-aos="fade-zoom-in" data-aos-duration="1500"
                    // data-aos="fade-right"
                    // data-aos-offset="300"
                    // data-aos-easing="ease-in-sine"
                >
                    <S.Subtitle>Curso Web Full Stack</S.Subtitle>
                    <S.Intitution>
                        <S.LogoIntitution
                            src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png"
                            alt="Labenu logo"
                        />
                        Labenu
                    </S.Intitution>
                    <S.Duration>1000h</S.Duration>
                    <S.Period>Set 2020 - Abr 2021</S.Period>
                    <S.Description>
                        &nbsp;&nbsp;A Labenu é uma startup que forma Pessoas Desenvolvedoras Web Full Stack prontas para o mercado de trabalho.
                    <br />
                    &nbsp;&nbsp;São mais de 1000 horas de programação que faz com que suas alunas e alunos sejam profissionais com conhecimentos adquiridos e postos em prática tanto no Back-end quanto no Front-end.</S.Description>
                </S.CourseContainer>
                <S.CourseContainer
                    // ata-aos="fade-zoom-in" data-aos-duration="1500"
                    // data-aos="fade-left"
                    // data-aos-offset="300"
                    // data-aos-easing="ease-in-sine"
                >
                    <S.Subtitle>Curso Web Design</S.Subtitle>
                    <S.Intitution>
                        <S.LogoIntitution
                            src="https://cdn.worldvectorlogo.com/logos/udemy-1.svg"
                            alt="Labenu Udemy"
                        />
                        Udemy
                    </S.Intitution>
                    <S.Duration>1000h</S.Duration>
                    <S.Period>Set 2020 - Abr 2021</S.Period>
                    <S.Description>
                        &nbsp;&nbsp;Curso do Serfrontend Treinamentos, onde você aprende desenvolver suas habilidades com HTML e CSS, além de ter uma boa base da linguagem de programação Javascript.
                    <br />
                    &nbsp;&nbsp;Conceitos avançados de HTML, incluindo semântica e uma introdução ao SEO (otimização para sites de busca), acessibilidade e responsividade.</S.Description>
                </S.CourseContainer>
            </S.InfoContainer>
        </S.MainContainer>
    )
}
export default Education

