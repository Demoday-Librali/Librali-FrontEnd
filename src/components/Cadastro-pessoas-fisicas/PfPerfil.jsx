import React from 'react'
import Styles from './css/PfPerfil.module.css'

const PfPerfil = () => {
  return (
    <div className={Styles.pessoa_fisica}>
                <h1>Cadastro Pessoa Física</h1>
                <div className={Styles.form_control}>
                    <input
                     type="text" 
                     name='nome_completo' 
                     id='nome_completo' 
                     placeholder='Nome completo' 
                     />
                </div>
                <div className={Styles.form_control}>
                    <input
                     type="text" 
                     name='cpf' 
                     id='cpf' 
                     placeholder='CPF' 
                     />
                </div>
                <div id={Styles.meio}>
                  <div className={Styles.form_control}>
                      <select name="Genero" id="" placeholder="Genero">
                          <option value="F">Feminino</option>
                          <option value="M">Masculino</option>
                          <option value="O">Outro</option>
                      </select>
                  </div>
                  <div className={Styles.form_control}>
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

export default PfPerfil