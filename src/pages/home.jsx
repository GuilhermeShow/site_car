import { useEffect, useState } from "react";
import Card from "../components/Card";
import style from "./home.module.css";
import { api } from "../api";
import Banner from "../components/Banner";
import Pesquisa from "../components/Pesquisa";
import Carousel from "../components/Carousel";

const Home = () => {

    const [carro, setCarro] = useState([]);

    useEffect(() => {
        api.get("")
        .then((res) => setCarro(res.data.results))
    })
    return (
       <div>
        <div className={style.pesquisa}>
            <Pesquisa />
     
        </div>
        <Carousel />

         <div className={style.card}>
            {carro.map((cr) => {
               return <div className={style.card1}>
                <Card {...cr} key={cr.id}/>
               </div>
            })}
        </div>
       </div>
    )
}

export default Home;