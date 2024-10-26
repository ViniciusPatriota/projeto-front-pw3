import style from './CardPet.module.css';
import Button from './button'

const CardPets = ({ nome, tipo, imagem, cod_pet }) => {
    
    return(
        <div className={style.cardPets}>
            <h3 className={style.nome}>{nome}</h3>
            <p className={style.tipo}>{tipo}</p>
            <img src={imagem} alt={nome} title={{nome}} />
            <div>
                <Button label='DETALHE' router='/detailPet/' cod_livro={cod_pet} />
            </div>
        </div>
    )
}

export default CardPets