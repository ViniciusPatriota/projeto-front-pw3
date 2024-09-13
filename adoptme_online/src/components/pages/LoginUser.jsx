import React from "react";
import Input from '../forms/Input';
import Button from "../forms/Button";

import style from "./CreateUser.module.css";

const CreateUser = () => {
    return(
        <section className={style.create_user_container}>
            
            <h1>FAZER LOGIN</h1>
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
            <Button
                rotulo='Login'
            />
        
        </section>
    )
}

export default CreateUser