import React from 'react'

import style from './ContainerPet.module.css'

const ContainerPet = (props) => {
    return (
        <div className={style.container_pet}>
            {props.children}
        </div>
    )
}

export default ContainerPet
