import React from 'react'
import Styles from './css/CadastroContato.module.css'

export default function CadastroContato() {
  return (
    <div className={Styles.cadastro}>
                <h1>Cadastro</h1>
                <div className={Styles.form_control}>
                    <input
                     type="email" 
                     name='email' 
                     id='email' 
                     placeholder='e-mail' 
                     />
                </div>
                <div className={Styles.form_control}>
                    <input
                     type="tel" 
                     name='phone' 
                     id='phone' 
                     placeholder='Telefone comercial' 
                     />
                </div>
                <div className={Styles.form_control}>
                    <input
                     type="tel" 
                     name='cel' 
                     id='cel' 
                     placeholder='Telefone celular' 
                     />
                </div>
            </div>
  )
}

