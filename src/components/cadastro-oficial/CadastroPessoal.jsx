import React from 'react'
import Styles from './css/CadastroPessoal.module.css'

import { useState, useEffect } from "react";

function CadastroPessoal({data, updateFieldHandler}) {
  const [cep, setCep] = React.useState('');
  const [endereco, setEndereco] = React.useState({
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: "",
    numero: "",
    complemento: ""
  })
  useEffect(() => {
    const buscarCEP = async () => {
      if (cep.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
          const data = await response.json()

          if (!data.erro) {
            setEndereco(prev => ({
              ...prev,
              logradouro: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              uf: data.uf
            }))
          } else {
            alert("CEP não encontrado.")
          }
        } catch (error) {
          console.error("Erro ao buscar o CEP:", error)
      }
    }
  }
  buscarCEP()
}, [cep])

  return (
    <div className={Styles.cadastro}>
                    <h1>Cadastro</h1>
                    <div id={Styles.superior}>
                      <div className={Styles.form_control}>
                          <input
                           type="text"
                           name='cep'
                           id={Styles.cep}
                           placeholder='CEP'
                           value={cep}
                           onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))}
                           />
                      </div>
                      <div className={Styles.form_control}>
                          <input
                           type="text"
                           name='numero'
                           id={Styles.numero}
                           placeholder='N°'
                           value={endereco.numero}
                           onChange={(e) => setEndereco({...endereco, numero: e.target.value})}
                           />
                      </div>
                      <div className={Styles.form_control}>
                          <input
                           type="text"
                           name='complemento'
                           id={Styles.complemento}
                           placeholder='Complemento'
                           value={endereco.complemento}
                           onChange={(e) => setEndereco({ ...endereco, complemento: e.target.value })}
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
                            value={endereco.logradouro}
                            readOnly
                            />
                      </div>
                      <div className={Styles.form_control}>
                          <input
                            type="text"
                            name='uf'
                            id={Styles.uf}
                            placeholder='UF'
                            value={endereco.uf}
                            readOnly
                            />
                      </div>
                    </div>
                    <div className={Styles.form_control}>
                        <input
                          type="text"
                          name='cidade'
                          id={Styles.cidade}
                          placeholder='Cidade'
                          value={endereco.cidade}
                          readOnly
                          />
                    </div>
                </div>
  )
}

export default CadastroPessoal