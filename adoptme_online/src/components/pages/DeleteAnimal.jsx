import {React, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function DeleteAnimal() {

    const {id_animal} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/excluirAnimal/${id_animal}`, {
            method:'DELETE',
            mode:'cors',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
        }).then(
            resp => resp.json()
        ).then(
            (data)=>{
                navigate('/listAnimal',{state:'ANIMAL EXCLUÍDO COM SUCESSO!'});
            }
        ).catch(
            err => console.log(err)
        );
    })

    return (
        <div>
            {/* <h1>TESTE DE EXCLUSÃO DE LIVRO!!!!</h1> */}
        </div>
    )
}

    export default DeleteAnimal
