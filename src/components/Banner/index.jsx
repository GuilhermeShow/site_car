import style from "./banner.module.css";
import corolla from "../../assets/corolla.png"
import cronos from "../../assets/cronnos.png"
import hb20 from "../../assets/hb20.png"
import {BsArrowLeftCircleFill} from "react-icons/bs"
import { useRef } from "react";


const Banner = () => {

    const carrosel = useRef(null)

    function direita(e) {
        e.preventDefault();
        carrosel.current.scrollLeft += carrosel.current.offsetWidth;
    }

    function esquerda(e) {
        e.preventDefault();
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
    }

    const banner = [
        {id:1, img: corolla},
        {id:2, img: cronos},
        {id:3, img: hb20}
    ]

    return (
        <div className={style.container} ref={carrosel}>
               

            {banner.map((b) => {
                return <div key={b.id} className={style.container_img} >
                   <button className={style.btn_esquerda} onClick={esquerda}>
                <BsArrowLeftCircleFill size={60} color="#fff"/>
                </button>
                 
                    <img src={b.img} alt="imagem banner" />
                    <button className={style.btn_direita} onClick={direita}>
                <BsArrowLeftCircleFill size={60} color="#fff"/>
                </button>
                 
                </div>
            })}

         
        </div>
    )
}

export default Banner;