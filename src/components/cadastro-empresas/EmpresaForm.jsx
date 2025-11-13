import React from 'react'
import Styles from './css/EmpresaForm.module.css'

const EmpresaForm = () => {
  return (
    <div className={Styles.empresa}>
        <h1>Cadastro Empresas</h1>
        <div className={Styles.form_control}>
            <input
             type="text" 
             name='razao_social' 
             id='razao_social' 
             placeholder='Razão social' 
             />
        </div>
        <div className={Styles.form_control}>
            <input
             type="text" 
             name='nome' 
             id='nome' 
             placeholder='Nome de contato' 
             />
        </div>
        <div className={Styles.form_control}>
            <input
             type="number" 
             name='cnpj' 
             id='cnpj' 
             placeholder='CNPJ' 
             />
        </div>
        <div className={Styles.senhas}>
          <div className={Styles.form_control}>
              <input
               type="password"
               name='senha'
               id={Styles.form_senha}
               placeholder='Senha'
               />
          </div>
          <div className={Styles.form_control}>
              <input
               type="password"
               name='conf_senha'
               id={Styles.form_senha}
               placeholder='Confirmar senha'
               />
          </div>
        </div>
    </div>
  )
}

export default EmpresaForm