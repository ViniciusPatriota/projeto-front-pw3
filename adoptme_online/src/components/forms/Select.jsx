import style from './Select.module.css'

function Select( {name, text}){
    return(
        <>
        <div className={style.form_control}>
                <label htmlFor={name}> {text}</label>
                <select name={name} id={name}>
                    <option selected>...</option>
                    <option>Macho</option>
                    <option>Fêmea</option>
                    <option>Nâo sei dizer</option>
                </select>
        </div>
        </>
    )
}

export default Select;