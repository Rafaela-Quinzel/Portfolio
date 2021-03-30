import React, { useEffect} from "react"
import AboutMe from "../../components/AboutMe/AboutMe"
import NavBar from "../../components/NavBar/NavBar"
import Presentation from "../../components/Presentation/Presentation"
import Knowledge from "../../components/Knowledge/Knowledge"
import Education from "../../components/Education/Education"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"

function Mainpage() {

    const smoothScroll = () => {
        window.document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (event) {
                event.preventDefault()
        
                window.document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                })
            })
        })
    }

    useEffect(() => {
        smoothScroll()
    },[])

    return(
        <div>
            <NavBar/>
            <Presentation/>
            <AboutMe/>
            <Knowledge/>
            <Education/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )

}
export default Mainpage