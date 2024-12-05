import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import style from './DetailPet.module.css'
import Button from "../../button";
import gato from '../../assets/gato_1.jpg'

const DetailPet = () => {
    /* RECUPERAR O CODIGO DO LIVRO */
    const  {id_animal} = useParams()
    console.log('CODIGO DO LIVRO: ' + id_animal)

    /* CRIAÇÃO DA STATE DO DADOS DO LIVRO */
    const [animal, setAnimal] = useState({})

    /* RECUPERANDO OS DADOS DE LIVRO PARA A EDIÇAO */
    useEffect(()=>{

        fetch(`http://localhost:5000/listagemAnimal/${id_animal}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setAnimal(data.data);
            console.log('DADOS DO ANIMAL'+ data.data);
        })
        .catch((err)=>{console.log(err)});

        },[]);

    return(
        <div className={style.grid}>
            <div className={style.container_img}>
                <img className={style.img_pet_detail} src={gato} alt='Imagem do animal: Gato' />
            </div>

            <div className={style.info}>
                <span className={style.especie}>{animal.especie}</span>
                <span className={style.raca}>{animal.raca}</span>
                <span className={style.descricao}>
                    {animal.descricao}
                </span>
            
                <div className={style.container_buttons}>
                    <Button 
                        label='EDITAR'
                        router= '/updateAnimal/'
                        id_animal={animal.id_animal}
                    />

                    <Button 
                        label='EXCLUIR'
                        router = '/deleteAnimal/'
                        id_animal={animal.id_animal}
                    />

                </div>
            </div>
        </div>
    )
}

export default DetailPet