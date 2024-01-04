import style from "./botao.module.css"

const Button = ({children}) => {
    return (
        <button className={style.botao}>
            {children}
        </button>
    )
}

export default Button;