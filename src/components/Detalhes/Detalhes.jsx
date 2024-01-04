import axios from "axios"
import { useEffect, useState } from "react"
import style from "./detalhe.module.css"
import { useParams } from "react-router-dom"

const DetalhesSobre = () => {

    const {id} = useParams();

    const url = "https://api.mercadolibre.com/items/"+id

    const [sobre, setSobre] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then((res) => setSobre(res.data.attributes))
    },[])

    return (
        <div className={style.container_sobre}>
            <h3>Fixa técnica do veículo</h3>
            <div className={style.sobre}>
                {sobre.map((s) => (
                    <div key={s.id} className={style.sobre_values}>
                        <h4><strong>{s.name}: </strong></h4>
                        <p>{s.value_name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetalhesSobre;