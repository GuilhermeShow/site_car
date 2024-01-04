import { Link } from "react-router-dom";
import style from "./card.module.css";
import formatDinheiro from "../../utils";

const Card = ({id, title, thumbnail, price}) => {

    return (  
        <div className={style.container}>
            <Link className={style.link} to={id}>
                <div className={style.card}>
                    <img className={style.img} src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="" />
                
                    <p className={style.title}>{title}</p>
                    <p className={style.price}>{formatDinheiro(price, "BRL")}</p>
                </div>
            </Link>
        </div>
    )
}

export default Card;