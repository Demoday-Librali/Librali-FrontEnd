import React from 'react'
import Styles from './css/CadastroContato.module.css'

export default function CadastroContato({data, updateFieldHandler}) {
  return (
    <div className={Styles.cadastro}>
                <h1>Cadastro</h1>
                <div className={Styles.form_control}>
                    <input
                     type="email" 
                     name='email' 
                     id='email' 
                     placeholder='e-mail'
                      value={data.email || ""}
                      onChange={(e) => updateFieldHandler('email', e.target.value)}
                     />
                </div>
                <div className={Styles.form_control}>
                    <input
                     type="tel" 
                     name='phone' 
                     id='phone' 
                     placeholder='Telefone comercial' 
                      value={data.phone || ""}
                      onChange={(e) => updateFieldHandler('phone', e.target.value)}
                     />
                </div>
                <div className={Styles.form_control}>
                    <input
                     type="tel" 
                     name='cel' 
                     id='cel' 
                     placeholder='Telefone celular' 
                      value={data.cel || ""}
                      onChange={(e) => updateFieldHandler('cel', e.target.value)}
                     />
                </div>
            </div>
  )
}

