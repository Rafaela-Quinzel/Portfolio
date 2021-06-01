import React from "react"
import * as S from "./styled"


function Knowledge() {
    return (
        <S.MainContainer>
            <S.TitlePage>Meus Conhecimentos</S.TitlePage>

            <S.InfoContainer>
                <S.FrontContainer
                // ata-aos="fade-zoom-in" data-aos-duration="1500"
                // data-aos="fade-right"
                // data-aos-offset="300"
                // data-aos-easing="ease-in-sine"
                >
                    <S.Subtitle>Front-end</S.Subtitle>
                    <S.Text>Desenvolvimento de aplicações web utilizando HTML, CSS, e JavaScript.</S.Text>
                    <S.Text>Criação de sites responsivos seguindo princípio de Mobile First.</S.Text>
                </S.FrontContainer>
                <S.BackContainer
                // ata-aos="fade-zoom-in" data-aos-duration="1500"
                // data-aos="fade-left"
                // data-aos-offset="300"
                // data-aos-easing="ease-in-sine"
                >
                    <S.Subtitle>Back-end</S.Subtitle>
                    <S.Text>Aplicações utilizando NodeJS, Typescript e MySQL.</S.Text>
                    <S.Text>Criação de API's para comunicação com front-end seguindo o princípio de Clean Code.</S.Text>
                </S.BackContainer>
            </S.InfoContainer>

            <S.LanguagesContainer>
                <S.Icons
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    width="60"
                    height="60"
                    title="NodeJS"
                />
                <S.Icons
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql"
                    width="60"
                    height="60"
                />
                <S.Icons
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40" />
                <S.Icons
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                />
                <S.Icons
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="35"
                    height="35"
                />
                <S.Icons
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="typescript"
                    width="35"
                    height="35"
                />
            </S.LanguagesContainer>
        </S.MainContainer>
    )
}
export default Knowledge