import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Card";
import style from "./relacionamento.module.css";

const Relacionados = () => {

    const {id} = useParams();

    const [recomentacao, setRecomentacao] = useState();
    const [carrosRecomentados, setCarrosRecomentados] = useState([]);

    useEffect(() => {
        axios.get("https://api.mercadolibre.com/items/"+id)
        .then((res) => setRecomentacao(res.data.title))
    }, [])


    useEffect(() => {
        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=carro+${recomentacao}`)
        .then((res) => setCarrosRecomentados(res.data.results))
        .catch((err) => console.log(err))
    }, [recomentacao])

    return (
        <div className={style.container_relacionamento}>
            <h3>Produtos Relacionados</h3>
            <div className={style.card}>
            {carrosRecomentados.map((car) => {
                return <Card {...car} key={car.id}/>
            })}
                </div>

        </div>
    )
}

export default Relacionados;