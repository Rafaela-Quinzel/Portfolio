import React from "react"
import * as S from "./styled"


function Knowledge() {
    return (
        <S.MainContainer>
            <S.TitlePage>Meus Conhecimentos</S.TitlePage>
            <S.InfoContainer>
                <S.FrontContainer
                    ata-aos="fade-zoom-in" data-aos-duration="1500"
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <S.Subtitle>Front-end</S.Subtitle>
                    <S.Text>Desenvolvimento de aplicações web utilizando HTML, CSS, e JavaScript.</S.Text>
                    <S.Text>Criação de sites responsivos seguindo princípio de Mobile First.</S.Text>
                </S.FrontContainer>
                <S.BackContainer
                    ata-aos="fade-zoom-in" data-aos-duration="1500"
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                >
                    <S.Subtitle>Back-end</S.Subtitle>
                    <S.Text>Aplicações utilizando NodeJS, Typescript e MySQL.</S.Text>
                    <S.Text>Criação de API's para comunicação com front-end seguindo o princípio de Clean Code.</S.Text>
                </S.BackContainer>
            </S.InfoContainer>
        </S.MainContainer>
    )
}
export default Knowledge