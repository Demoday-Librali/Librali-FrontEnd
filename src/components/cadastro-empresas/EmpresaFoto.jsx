import React from 'react'
import Styles from './css/EmpresaFoto.module.css'
import company from '../../assets/images/foto-perfil-empresa-inicial.png'

const EmpresaFoto = () => {
  return (
    <div className={Styles.empresa}>
            <h1>Cadastro Empresas</h1>
            <div id={Styles.meio}>
              <div className={Styles.form_control}>
                  <div id={Styles.imagem_empresa}>
                    <img src={company} alt="" id={Styles.image}/>
                      <p>empresa</p>
                  </div>
              </div>
              <div className={Styles.form_control}>
                  <textarea
                   type="text"
                   name='nome'
                   id='nome'
                   placeholder='Descrição da empresa aqui'
                   />
              </div>
            </div>
        </div>
  )
}

export default EmpresaFoto