import React, { useState, useEffect } from "react";
import style from './CreateAnimal.module.css';
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";

const CreateAnimal = () => {
    /* Define o state dos dados para categorias de gênero de animais */
    const [generos, setGeneros] = useState([]);

    /* State para armazenar o objeto JSON do animal */
    const [animal, setAnimal] = useState({
        especie: '',
        raca: '',
        idade_meses: '',
        genero: '',
    });

    /* State para verificar se o formulário está completo */
    const [isFormValid, setIsFormValid] = useState(false);

    /* Handler para capturar os dados dos inputs (Espécie, Raça, Idade) */
    function handlerChangeAnimal(event) {
        setAnimal({ ...animal, [event.target.name]: event.target.value });
    }

    /* Handler para capturar a seleção do gênero */
    function handleGeneroChange(event) {
        setAnimal({ ...animal, genero: event.target.value });
    }

    /* Verificar se o formulário está completo */
    useEffect(() => {
        const { especie, raca, idade_meses, genero } = animal;
        const isValid = especie.trim() && raca.trim() && idade_meses.trim() && !isNaN(idade_meses) && genero;
        setIsFormValid(isValid);
    }, [animal]);

    /* Recupera os dados de categorias de gênero da API */
    useEffect(() => {
        fetch('http://localhost:5000/listagemGeneros', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setGeneros(data.data);
        })
        .catch((error) => {
            console.log('Erro ao carregar gêneros:', error);
        });
    }, []);

    /* Inserção dos dados do animal */
    function createAnimal(animal) {
        fetch('http://localhost:5000/inserirAnimal', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            body: JSON.stringify(animal),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            alert('Animal cadastrado com sucesso!');
            // Navegação ou reset do formulário pode ser feita aqui
        })
        .catch((err) => {
            console.log('Erro ao cadastrar animal:', err);
        });
    }

    /* Função de submit */
    function submit(event) {
        event.preventDefault();

        if (!isFormValid) {
            alert('Preencha todos os campos corretamente antes de enviar.');
            return;
        }

        createAnimal(animal);
    }

    return (
        <section className={style.create_animal_container}>
            <h1>CADASTRAR NOVO PET</h1>

            <form onSubmit={submit}>
                <Input
                    type="text"
                    name="especie"
                    placeHolder="Digite a espécie do animal aqui"
                    text="Espécie"
                    onChange={handlerChangeAnimal}
                    value={animal.especie}
                />

                <Input
                    type="text"
                    name="raca"
                    placeHolder="Digite a raça do animal"
                    text="Raça"
                    onChange={handlerChangeAnimal}
                    value={animal.raca}
                />

                <Input
                    type="text"
                    name="idade_meses"
                    placeHolder="Digite a idade do animal em meses"
                    text="Idade do pet em meses"
                    onChange={handlerChangeAnimal}
                    value={animal.idade_meses}
                />

                <Select
                    name="genero"
                    text="Selecione o gênero do animal"
                    options={generos}
                    value={animal.genero}
                    onChange={handleGeneroChange}
                />

                <Button 
                    rotulo="Cadastrar Pet" 
                    type="submit" 
                    disabled={!isFormValid}  // Desabilita o botão se o formulário não for válido
                />
            </form>
        </section>
    );
};

export default CreateAnimal;
