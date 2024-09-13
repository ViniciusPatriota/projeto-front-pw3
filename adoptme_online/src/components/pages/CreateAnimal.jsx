import React from "react";
import Input from '../forms/Input';
import Select from "../forms/Select";
import Button from "../forms/Button";

import style from "./CreateAnimal.module.css";

const CreateAnimal = () => {
    return(
        <section className={style.create_animal_container}>
            
            <h1>CADASTRAR NOVO PET</h1>

            <Input
                type='text'
                name='txt_especie'
                text='Espécie'
                placeHolder='Digite a espécie do animal aqui'           
            />
            <Input
                type='text'
                name='txt_raca'
                text='Raça'
                placeHolder='Digite a raça do animal'           
            />
            <Input
                type='text'
                name='data_nac'
                text='Idade do pet em meses'
                placeHolder='Digite a idade do pet'           
            />
            <Select
                name='gênero'
                text='Selecione o sexo do animal'
            />
            <Button
                rotulo='Cadastrar Pet'
            />
        
        </section>
    )
}

export default CreateAnimal