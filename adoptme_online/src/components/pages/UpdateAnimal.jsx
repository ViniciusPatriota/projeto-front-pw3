/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react'
import {useParams, useNavigate} from 'react-router-dom'

import style from './UpdateAnimal.module.css'
import Input from '../forms/Input'
import Select from '../forms/Select'
import Button from '../forms/Button'

const UpdateAnimal = () => {

        /* CRIAÇAO DO STATE DOS DADOS DOS LIVROS */
        const [animal, setAnimal] = useState({});

        /* RECUPERA O CÓDIGO ENVIADO PELO BOTÃO */
        const {id_animal} = useParams();

        /* OBJETO DE NAVEGAÇÃO */
        const navigate = useNavigate();

        /* STATE DE DADOS DAS CATEGORIAS VINDAS DO ARQUIVO db.json */
        const [generos, setGeneros] = useState([]);

        /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
        function handlerChangeAnimal(event) {
                setAnimal({...animal, [event.target.name] : event.target.value});
                console.log(animal)
        }

        /* CAPTURA OS DADOS DA SELECT */
        function handleChangeGender(event) {
                setAnimal({...animal, cod_genero: event.target.value});
                console.log(animal);
        }

        /* RECUPERA OS DADOS DE CATEGORIA DO BANCO DADOS */
        useEffect(()=>{
                fetch('http://localhost:5000/listagemGeneros', {
                        method:'GET',
                        headers:{
                                'Content-Type':'application/json',
                                'Access-Control-Allow-Origin':'*',
                                'Access-Control-Allow-Headers':'*'
                        },
                }).then(
                        (resp)=>
                                resp.json()
                ).then(
                        (data)=>{
                        setGeneros(data.data);
                        // console.log('TESTE-DATA:' + data.data);
                        }
                ).catch(
                        (error)=>{
                        console.log(error);
                        }
                )
        }, [])

        /* RECUPERA OS DADOS DO LIVRO DO BACKEND */
        useEffect(()=>{

                fetch(`http://localhost:5000/listagemAnimal/${id_animal}`, {
                method: 'GET',
                mode:'cors',
                headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*'
                },
                })
                .then((resp)=>resp.json())
                .then((data)=>{
                        console.log('ANIIMAL: ' + data.data.id_animal);
                        setAnimal(data.data);
                        console.log('STATE: ' + animal.especie);
                })
                .catch((err)=>{console.log(err)});

        }, []);

        /* ALTERAÇÃO DOS DADOS DE LIVRO */
        function updateAnimal(animal) {
        
                console.log(JSON.stringify(animal))
        
                fetch('http://localhost:5000/alterarAnimal', {
                        method:'PUT',
                        mode:'cors',
                        headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Headers':'*'
                        },
                        body: JSON.stringify(animal)
                })
                .then(
                        (resp)=>resp.json()
                )
                .then(
                        (data)=>{
                                console.log(data);
                                navigate('/listAnimal',{state:'INFORMAÇÕES ALTERADAS COM SUCESSO!'});
                        }
                )
                .catch(
                        (err)=>{ console.log(err) }
                )
        }

        /* FUNÇÃO DE SUBMIT */
        function submit(event) {
                event.preventDefault();
                updateAnimal(animal);
        }

        return (
                <section className={style.create_animal_container}>
                        
                        <h1>ALTERAÇÃO DE INFORMAÇÕES</h1>

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
                <Input
                    type="text"
                    name="descricao"
                    placeHolder="Digite a descricão do animal"
                    text="Descrição do animal"
                    onChange={handlerChangeAnimal}
                    value={animal.descricao}
                />
                

                <Select
                    name="genero"
                    text="Selecione o gênero do animal"
                    options={generos}
                    value={animal.genero}
                    onChange={handleChangeGender}
                />

                <Button 
                    rotulo="Cadastrar Animal" 
                    type="submit" 
                />
                        </form>

                </section>
        )
        }

export default UpdateAnimal
