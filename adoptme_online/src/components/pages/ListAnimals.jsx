import React from "react";
import Input from '../forms/Input';

import style from './ListAnimals.module.css'

const ListAnimals = () => {
    return(
        <section className={style.list_animals_container}>
            <h1>LISTAR PETS</h1>

            <Input
                type='text'
                name='txt_pesquisa'
                text='Pesquisa'
                placeHolder='Escreva sobre o pet que você deseja adotar ou compartilhar'   
            />
        </section>
    )
}

export default ListAnimals