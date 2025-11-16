import React from 'react'
import Styles from './css/PfContato.module.css'

const PfContato = () => {
  return (
    <div className={Styles.pessoa_fisica}>
                    <h1>Cadastro Pessoa Física</h1>
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

export default PfContato