import { useEffect, useState } from "react";
import Input from "../Input";
import style from "./pesquisa.module.css"
import {BiSearchAlt} from "react-icons/bi"
import axios from "axios";

const Pesquisa = () => {

    const [buscar, setBuscar] = useState("");
    const [carros, setCarros] = useState([]);

    
    useEffect(() => {
        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=carros`)
        .then((res) => setCarros(res.data.results))
    },[buscar])
    
    const pesquisar = buscar.toLowerCase()

    const carrosFiltrados = carros.filter((busca) => busca.
    title.toLowerCase().includes(pesquisar))

    return (
        <div className={style.container}>
            <div className={style.container_input}>
                <Input 
                placeholder="Pesquisar"
                type="text"
                value={buscar}
                onChange={(e) => setBuscar(e.target.value)}
                />
                <div className={style.icon}>
                <BiSearchAlt />
                </div>
            </div>
            <div className={style.busca_encontrada}>
               {buscar==="" ? "": carrosFiltrados.map((e) => {
                return <p 
                key={e.id}
                className={style.resultado}
                >{e.title}</p>
               }) }
            </div>
        </div>
    )
}

export default Pesquisa;