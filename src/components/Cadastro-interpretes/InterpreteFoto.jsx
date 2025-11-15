import React from 'react'
import Styles from './css/InterpreteFoto.module.css'
import imagem from '../../assets/images/perfilusuario.png'

export default function InterpreteFoto() {
  return (
    <div className={Styles.interprete}>
       <h1>Cadastro Intérprete</h1>
                   <div id={Styles.meio}>
                     <div className={Styles.form_control}>
                         <div id={Styles.imagem_interprete}>
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

