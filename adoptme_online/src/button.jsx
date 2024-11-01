import { Link } from 'react-router-dom'
import style from './button.module.css'

const Button = ({label, router, id_animal}) => {
    return(
        <div className={style.buttonContainer}>
            <Link to={`${router}${id_animal}`}>
            <button>{label}</button>
            </Link>
        </div>
    )
}

export default Button