import style from './CardPet.module.css';
import Button from './button'

const CardPets = ({ especie, raca, idade, imagem, cod_pet }) => {
    
    return(
        <div className={style.cardPets}>
            <h3 className={style.especie}>{especie}</h3>
            <p className={style.raca}>{raca}</p>
            <p className={style.idade}>{idade}</p>
            <img src={imagem} alt={especie} title={{especie}} />
            <div>
                <Button label='DETALHE' router='/detailPet/' cod_pet={cod_pet} />
            </div>
        </div>
    )
}

export default CardPets