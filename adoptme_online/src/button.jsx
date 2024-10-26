import { Link } from 'react-router-dom'
import style from './button.module.css'

const Button = ({label, router, cod_pet}) => {
    return(
        <div className={style.buttonContainer}>
            <Link to={`${router}${cod_pet}`}>
            <button>{label}</button>
            </Link>
        </div>
    )
}

export default Button