import HB20 from "../../assets/hb20.png";
import cronos from "../../assets/cronnos.png";
import corolla from "../../assets/corolla.png";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"
import style from "./carousel.module.css";
import { useState } from "react";
import "./carousel.css";

const Carousel = ({imagens}) => {

    const destaques = [
        {veiculo: HB20},
        {veiculo: corolla},
        {veiculo: cronos}
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const [manualChange, setManualChange] = useState(false)

    const goPrev = () => {
        setManualChange(true)
        setActiveIndex((prevIndex) => (prevIndex - 1 + destaques.length) % destaques.length)
    }

    const goNext = () => {
        setManualChange(true)
        setActiveIndex((prevIndex) => (prevIndex + 1) % destaques.length)
    }

    return (
        <div className={style.container}>
            <div className={style.carousel_img}>
                {destaques.map((car, index) => (
                    <div key={index} className={activeIndex === index ? "slide active" : "slide"}>
                        <img className={style.img} src={car.veiculo} alt="" />
                    </div>
                ))}
            </div>
            <div className={style.setas}>
                <div className={style.left} onClick={goPrev}>
                <MdOutlineKeyboardDoubleArrowLeft size={60} color="#fff"/>
                </div>
                <div className={style.rigth} onClick={goNext} length={destaques.le}>
                <MdOutlineKeyboardDoubleArrowRight color="#fff" size={60}/>
                </div>
            </div>
        </div>
    )

}

export default Carousel;