import React from "react";
import Input from '../forms/Input';
import Select from "../forms/Select";
import Button from "../forms/Button";

import style from "./CreateAnimal.module.css";

const CreateAnimal = () => {
    return(
        <section className={style.create_user_container}>
            
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
                placeHolder='Digite a'           
            />
            <Input
                type='date'
                name='data_nasc'
                text='Data de nascimento do pet'
                placeHolder='Crie uma senha com pelo menos 8 caracteres'           
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