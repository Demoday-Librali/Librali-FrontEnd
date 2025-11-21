import React from 'react'
import Styles from './css/CadastroPerfil.module.css'

const CadastroPerfil = () => {
  return (
    <div className={Styles.cadastro}>
            <h1>Cadastro</h1>
            <div className={Styles.form_control}>
                <input
                 type="text" 
                 name='nome_completo' 
                 id='nome_completo' 
                 placeholder='Nome completo ou Razão Social' 
                 />
            </div>
            <div className={Styles.form_control}>
                <input
                 type="text" 
                 name='cpf' 
                 id='cpf' 
                 placeholder='CPF ou CNPJ' 
                 />
            </div>
            <div id={Styles.meio}>
              <div className={Styles.form_control} id={Styles.data_nascimento}>
                  <input 
                  type="date" 
                  name="data_nasc" 
                  id={Styles.data_nasc} />
              </div>
            </div>
            <div className={Styles.form_control}> 
              <div className={Styles.senhas}>
                <div className={Styles.form_control}>
                    <input
                     type=""
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
        </div>
  )
}

export default CadastroPerfil