import { HeaderCidade, HeaderCidadeModal, HeaderContainer, HeaderImagem, HeaderLogo, HeaderMenu, HeaderMenuLinks } from "./Header"
import logo from "../../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { SiGooglemaps } from "react-icons/si"
import { Link } from "react-router-dom"
import style from "./header.module.css"
import { useState } from "react"

export const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [modal, setModal] = useState(false);

    function munuHumburguer() {
        setMenuOpen(!menuOpen)
    }

    function modalCidade() {
        setModal(!modal)
    }

    return (
        <HeaderContainer>
            <HeaderMenu onClick={munuHumburguer}>
                <GiHamburgerMenu size={28} color="#fff"/>
            </HeaderMenu>
            {menuOpen &&  <HeaderMenuLinks>
                <h3 className={style.texto}>Opções de carros</h3>
                <Link className={style.link}>Carros</Link>
                <Link className={style.link}>Lançamentos</Link>
                <Link className={style.link}>Sedans</Link>
                <Link className={style.link}>Hatch</Link>
                <Link className={style.link}>Esportivos</Link>
                <Link className={style.link}>Off Road</Link>
            </HeaderMenuLinks>}
            <Link to="/">
            <HeaderLogo>
                <HeaderImagem src={logo}/>
                <h2>VCars</h2>
            </HeaderLogo>
            </Link>
           
        </HeaderContainer>
    )
}