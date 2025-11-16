import React from 'react'
import Styles from './css/PfFoto.module.css'
import imagem from '../../assets/images/perfilusuario.png'

const PfFoto = () => {
  return (
    <div className={Styles.pessoa_fisica}>
           <h1>Cadastro Pessoa Física</h1>
          <div id={Styles.meio}>
            <div className={Styles.form_control}>
                <div id={Styles.imagem_pf}>
                    <img src={imagem} alt="" id={Styles.image}/>
                    <p>Escolha uma foto de perfil</p>
                </div>
            </div>
            <div className={Styles.form_control}>
                <textarea
                type="text"
                name='nome'
                id='nome'
                placeholder='Sua descrição aqui'
                />
            </div>
          </div>
        </div>
  )
}

export default PfFoto