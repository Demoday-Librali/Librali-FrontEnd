import React from 'react'
import Styles from './css/InterpretePessoal.module.css'

function InterpretePessoal() {
  return (
    <div className={Styles.interprete}>
                    <h1>Cadastro Intérpretes</h1>
                    <div id={Styles.superior}>
                      <div className={Styles.form_control}>
                          <input
                           type="number"
                           name='cep'
                           id={Styles.cep}
                           placeholder='CEP'
                           />
                      </div>
                      <div className={Styles.form_control}>
                          <input
                           type="number"
                           name='numero'
                           id={Styles.numero}
                           placeholder='N°'
                           />
                      </div>
                      <div className={Styles.form_control}>
                          <input
                           type="number"
                           name='complemento'
                           id={Styles.complemento}
                           placeholder='Complemento'
                           />
                      </div>
                    </div>
                    <div id={Styles.meio}>
                      <div className={Styles.form_control}>
                          <input
                            type="text"
                            name='rua'
                            id={Styles.rua}
                            placeholder='Rua'
                            />
                      </div>
                      <div className={Styles.form_control}>
                          <input
                            type="text"
                            name='uf'
                            id={Styles.uf}
                            placeholder='UF'
                            />
                      </div>
                    </div>
                    <div className={Styles.form_control}>
                        <input
                          type="text"
                          name='cidade'
                          id={Styles.cidade}
                          placeholder='Cidade'
                          />
                    </div>
                </div>
  )
}

export default InterpretePessoal