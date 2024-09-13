import style from './SelectUser.module.css'

function Select( {name, text}){
    return(
        <>
        <div className={style.form_control}>
                <label htmlFor={name}> {text}</label>
                <select name={name} id={name}>
                    <option selected>...</option>
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outro</option>
                </select>
        </div>
        </>
    )
}

export default Select;