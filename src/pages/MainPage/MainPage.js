import React from "react"
import * as S from "./styled"
import AboutMe from "../../components/AboutMe/AboutMe"
import NavBar from "../../components/NavBar/NavBar"
import Presentation from "../../components/Presentation/Presentation"
import Knowledge from "../../components/Knowledge/Knowledge"
import Education from "../../components/Education/Education"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"


function Mainpage() {

    return(
        <S.MainContainer>
            <NavBar/>
            <Presentation/>
            <AboutMe/>
            <Knowledge/>
            <Education/>
            <Projects/>
            <Contact/>
            <Footer/>
        </S.MainContainer>
    )
}
export default Mainpage