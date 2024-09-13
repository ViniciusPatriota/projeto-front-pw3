import React from 'react'

import style from './Home.module.css'

const Home = ()=>{
    return(
            <section className={style.home_container}>
                <h1>Bem Vindo ao <span>AdopteHere</span></h1>
                <p>Faça sua adoção aqui</p>
                <img src='./caminho.jpg'></img>
            </section>
    )
}

export default Home