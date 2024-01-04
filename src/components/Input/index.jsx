import style from "./input.module.css"

const Input = ({label, type, placeholder, value, onChange}) => {
    return (
        <div className={style.container}>
            <label
            className={style.label}
            >{label}</label>
            <input
            className={style.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}

export default Input