import React from "react"
import * as S from "./styled"



function Education() {

    return (
        <S.MainContainer>
            <S.TitlePage>Educação</S.TitlePage>
            <S.InfoContainer
                ata-aos="fade-zoom-in" data-aos-duration="1500"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
            >
                <S.Subtitle>Curso Web Full Stack</S.Subtitle>
                <S.Intitution>
                    Labenu
                    <img
                        src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png"
                        width="24px"
                        alt="Labenu logo"
                    />
                </S.Intitution>
                <S.Duration>1000h</S.Duration>
                <S.Period>Set 2020 - Abr 2021</S.Period>
                <S.Description>
                    A Labenu é uma startup que forma Pessoas Desenvolvedoras Web Full Stack prontas para o mercado de trabalho.
                    <br/>
                    São mais de 1000 horas de programação que faz com que suas alunas e alunos sejam profissionais com conhecimentos adquiridos e postos em prática tanto no Back-end quanto no Front-end.</S.Description>
            </S.InfoContainer>
        </S.MainContainer>
    )
}
export default Education

