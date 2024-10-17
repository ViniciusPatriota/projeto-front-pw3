import style from './NavBar.module.css'

import { Outlet, Link } from 'react-router-dom';

const NavBar =()=>{
    return(

<>
        <nav className={style.navbar}>
            <ul className={style.list}>
                <Link to='/'>
                <li className={style.item}><img className={style.logo} src='./pata3.png'></img></li>
                </Link>

                <Link to='/'>
                <li className={style.item}>HOME</li>
                </Link>

                <Link to='/createAnimal'>
                <li className={style.item}>CADASTRAR PETS</li>
                </Link>

                <Link to='/listAnimals'>
                <li className={style.item}>LISTAR PETS</li>
                </Link>
                
                {/* <Link to='/logIn'>
                <li className={style.item}>Login</li>
                </Link>

                <Link to='/singUp'>
                <li className={style.item}>Sing Up</li>
                </Link> */}
            </ul>
        </nav>
        <Outlet/>
</>
    )
}

export default NavBar;