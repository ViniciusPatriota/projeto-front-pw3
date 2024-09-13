import React from "react";
import Input from '../forms/Input';
import Select from "../forms/SelectUser";
import Button from "../forms/Button";

import style from "./CreateUser.module.css";

const CreateUser = () => {
    return(
        <section className={style.create_user_container}>
            
            <h1>CADASTRAR NOVO USUÁRIO</h1>

            <Input
                type='text'
                name='txt_nome'
                text='Nome completo do usuário'
                placeHolder='Digite seu nome completo aqui'           
            />
            <Input
                type='text'
                name='txt_email'
                text='Email do usuário'
                placeHolder='Digite seu email de preferência'           
            />
            <Input
                type='password'
                name='txt_senha'
                text='Senha do usuário'
                placeHolder='Digite uma senha que siga as regras ao lado'           
            />
            <Input
                type='password'
                name='txt_senha'
                text='Senha do usuário'
                placeHolder='Repita a senha'           
            />
            <Input
                type='date'
                name='data_nasc'
                text='Data de nascimento do usuário'
                placeHolder='Digite sua data de nascimento'           
            />
            <Select
                name='gênero'
                text='Selecione o gênero no qual se identifica'
            />
            <Button
                rotulo='Cadastrar Usuário'
            />
        
        </section>
    )
}

export default CreateUser