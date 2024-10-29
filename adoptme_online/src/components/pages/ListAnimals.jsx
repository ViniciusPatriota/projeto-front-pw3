import React from 'react'

/* IMPORTA O useState E useEffect PARA GUARDAR OS ESTADOS DE DADOS DOS PROJETOS */
import { useState, useEffect } from "react";

import CardPet from '../../CardPet'
import Container from '../layout/Container'
import ContainerPet from '../layout/ContainerPet';

import style from './ListAnimals.module.css'

import cavernas from '../../assets/gato_1.jpg'

const ListPets = () => {

    /* CRIAÇAO DO STATE DOS DADOS DOS LIVROS */
    const [pets, setPets] = useState([]);

    /* RECUPERA OS DADOS DOS LIVROS DO BACKEND */
    useEffect(()=>{

        fetch('http://localhost:5000/listagemGeneros', {
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
                console.log('PETS: ' + data.data);
                setBooks(data.data);
                console.log('STATE: ' + pets);
            })
            .catch((err)=>{console.log(err)});

    }, []);

    return (

        <Container>

            <section className={style.list_animals_container}>
                
                <h1>PETS LIST</h1>

                <ContainerPet>
                    {
                        pets.map((pet)=>(
                            // console.log(pet.epecie)
                            <CardPet
                                id_pet={pet.id_animal}
                                especie={pet.especie}
                                raca={pet.raca}
                                imagem={cavernas}
                                key={pet.id_livro}
                            />
                        ))
                    }
                </ContainerPet>

            </section>

        </Container>
    )
}

export default ListPets
