import React, { Fragment, useState } from "react"
import * as S from "./styled"


export default function Navbar() {
    const [open, setOpen] = useState(false)

    function openMenu() {
        setOpen(true)
    }

    function closeMenu() {
        setOpen(false)
    }


    return (
        <S.MainContainer>
            <S.Name
                to="presentation"
                smooth={true}
                duration={1500}
            >
                Rafaela
            </S.Name>

            <S.NavContainer>
                <S.Anchor
                    to="about-me"
                    smooth={true}
                    duration={1500}
                >
                    Sobre mim
                </S.Anchor>
                <S.Anchor
                    to="my-projects"
                    smooth={true}
                    duration={1500}
                >
                    Projetos
                </S.Anchor>
                <S.Anchor
                    to="contact"
                    smooth={true}
                    duration={1500}
                >
                    Contato
                </S.Anchor>
            </S.NavContainer>
            {open ? (
                <Fragment>
                    <S.ButtonCloseMenu onClick={closeMenu}>
                        <i className="fas fa-times"></i>
                    </S.ButtonCloseMenu>
                    
                    <S.Wrapper>
                        <S.Anchor
                            to="about-me"
                            smooth={true}
                            duration={1500}
                            onClick={closeMenu}
                        >
                            Sobre mim
                        </S.Anchor>
                        <S.Anchor
                            to="my-projects"
                            smooth={true}
                            duration={1500}
                            onClick={closeMenu}
                        >
                            Projetos
                        </S.Anchor>
                        <S.Anchor
                            to="contact"
                            smooth={true}
                            duration={1500}
                            onClick={closeMenu}
                        >
                            Contato
                        </S.Anchor>
                    </S.Wrapper>
                </Fragment>
            ) : (
                <S.ButtonOpenMenu onClick={openMenu}>
                    <i className="fas fa-bars fa-2x"></i>
                </S.ButtonOpenMenu>
            )}
        </S.MainContainer>
    )
}