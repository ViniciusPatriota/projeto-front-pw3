import React from "react";
import Input from '../forms/Input';
import Select from "../forms/Select";
import Button from "../forms/Button";

import style from "./CreateUser.module.css";

const CreateBooks = () => {
    return(
        <section className={style.create_book_container}>
            
            <h1>CADASTRAR NOVO USUÁRIO</h1>

            <Input
                type='text'
                name='txt_nome'
                text='Nome do usuário'
                placeHolder='Digite o seu nome completo aqui'           
            />
            <Input
                type='text'
                name='txt_email'
                text='Email do usuário'
                placeHolder='Digite o seu email de preferência'           
            />
            <Input
                type='password'
                name='txt_password'
                text='Senha do usuário'
                placeHolder='Crie uma senha com pelo menos 8 caracteres'           
            />
            <Select
                name='gênero'
                text='Selecione o gênero no qual você se identifica'
            />
            <Button
                rotulo='Cadastrar Usuário'
            />
        
        </section>
    )
}

export default CreateBooks