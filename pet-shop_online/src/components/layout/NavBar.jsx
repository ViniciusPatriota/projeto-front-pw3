import style from './NavBar.module.css'

import { Outlet, Link } from 'react-router-dom';

const NavBar =()=>{
    return(

<>
        <nav className={style.navbar}>
            <ul className={style.list}>
                <Link to='/'>
                <li className={style.item}><img className={style.logo} src='./pata_logo.png'></img></li>
                </Link>

                <Link to='/'>
                <li className={style.item}>HOME</li>
                </Link>

                <Link to='/createUser'>
                <li className={style.item}>LOGIN</li>
                </Link>

                <Link to='/listLojas'>
                <li className={style.item}>LISTAR LOJAS</li>
                </Link>
            </ul>
        </nav>
        <Outlet/>
</>
    )
}

export default NavBar;