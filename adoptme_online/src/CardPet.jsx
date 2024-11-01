import style from './CardPet.module.css';
import Button from './button'

const CardPets = ({ especie, raca, idade_m, imagem, id_animal }) => {
    
    return(
        <div className={style.cardPets}>
            <h3 className={style.especie}>{especie}</h3>
            <p className={style.raca}>{raca}</p>
            <p className={style.idade_m}>{idade_m}</p>
            <img src={imagem} alt={especie} title={{especie}} />
            <div>
                <Button label='DETALHE' router='/detailPet/' id_animal={id_animal} />
            </div>
        </div>
    )
}

export default CardPets