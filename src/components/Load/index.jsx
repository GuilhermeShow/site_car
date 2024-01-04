import style from "./load.module.css";

const Load = () => {
    return (
        <div className={style.container}>
            <h3>Carregando...</h3>
            <div className={style.load}></div>
        </div>
    )
}

export default Load;