import React, { useState } from "react"
import * as S from "./styled"



export default function AboutMe() {
    
    return (
        <S.MainContainer className="about-me">
            <S.wrappers
            ata-aos="fade-zoom-in" data-aos-duration="1500"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            >
                <S.TitleContainer >
                    Sobre mim
            </S.TitleContainer>
                <S.TextContainer>
                    <S.TextAbout>
                        &nbsp;&nbsp; Sou uma profissional com experiência na área administrativa, financeira e em transição de carreira.
                    </S.TextAbout>
                    <S.TextAbout>
                        &nbsp;&nbsp;No ano de 2020, muitas coisas aconteceram e mudanças foram necessárias.
                        Decidi finalmente embarcar na área de tecnologia, dando início aos meus estudos e primeiros passos na área.
                        Estou me dedicando muito e cada vez mais apaixonada neste mundo de tecnologia.
                    </S.TextAbout>
                    <S.TextAbout>
                        &nbsp;&nbsp;Personalidade dinâmica, comunicativa, responsável, comprometida e pontual. Gosto de trabalhar em equipe e tenho facilidade em aprendizado. Motivada por desafios e trabalhos que possam ampliar meus conhecimentos, minhas capacidades, habilidades e buscar melhor posicionamento no mercado de trabalho.
                    </S.TextAbout>
                </S.TextContainer>
                <S.ButtonDowload
                    title="Dowload currículo"
                    type="submit">
                    <S.TextButton
                        href="/CV_Rafaela_Quinzel.pdf"
                        download="CV_Rafaela_Quinzel.pdf"
                    >
                        CV em PDF
                    </S.TextButton>
                </S.ButtonDowload>
            </S.wrappers>
        </S.MainContainer>
    )
}