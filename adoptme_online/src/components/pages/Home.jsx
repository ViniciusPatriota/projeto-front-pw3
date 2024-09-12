import React from 'react'

import style from './Home.module.css'

const Home = ()=>{
    return(
            <section className={style.home_container}>
                <h1>Bem Vindo ao <span>PetShop</span></h1>
                <p>O shopping online para seu pet</p>
                <img src='./caminho.jpg'></img>
            </section>
    )
}

export default Home