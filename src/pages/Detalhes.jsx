import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import style from "./Detalhes.module.css"
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai"
import Button from "../components/Button"
import DetalhesSobre from "../components/Detalhes/Detalhes"
import axios from "axios"
import Relacionados from "../components/Relacionados"


const Detalhes = () => {

    const {id} = useParams()
    const [carro, setCarro] = useState([]);
    const [fotos, setFotos] = useState([]);

    const carrosel = useRef(null);

    const url = "https://api.mercadolibre.com/items/"+id

    useEffect(() => {
        axios.get(url)
        .then((res) => setCarro(res.data))
        .catch((err) => console.log(err))
    },[])

    useEffect(() => {
        axios.get(url)
        .then((res) => setFotos(res.data.pictures))
        .catch((err) => console.log(err))
    },[])

    function esquerda(e) {
        e.preventDefault();
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth;
    }

    function direita(e) {
        e.preventDefault();
        
        carrosel.current.scrollLeft += carrosel.current.offsetWidth;
    }

    return (
        <div className={style.container}>
          
            <div className={style.containerProduto}>
                <button>
                <AiFillCaretLeft size={90} onClick={esquerda}/>
                </button>

                <div className={style.imagem} ref={carrosel}>
                   {fotos.map((f) => (
                    <div key={f.id} >
                        <img className={style.img} src={f.url} alt="" />
                    </div>
                   ))}
                   
                </div>
                <button>
                <AiFillCaretRight size={90} onClick={direita}/>
                </button>
                <div className={style.descricao}>
                    <h2 className={style.title}>{carro.title}</h2>
                    <h2 className={style.price}>R$ {carro.price}</h2>
                    <div className={style.compra}>
                        <h3>Video Chamada</h3>
                        <p className={style.agende}>Agende um horário para ver o carro em vídeo!</p>
                        <Button>Agende aqui</Button>
                    </div>
               </div>
            </div>
            <div className={style.relacionamento}>
                <Relacionados />
            </div>
            <div className={style.sobre}>
               <DetalhesSobre />
            </div>
        </div>
    )
}

export default Detalhes;