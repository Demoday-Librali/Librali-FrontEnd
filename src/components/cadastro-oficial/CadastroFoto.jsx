import React, { useState } from 'react'
import Styles from './css/CadastroFoto.module.css'
import imagem from '../../assets/images/perfilusuario.png'
import api from '../../services/api' // seu axios instance

export default function CadastroFoto({ data, updateFieldHandler }) {
  const [formData, setFormData] = useState({
    descricao: data?.descricao || '',
    fotoPerfil: null
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (updateFieldHandler) updateFieldHandler(name, value)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData(prev => ({ ...prev, fotoPerfil: file }))
    if (updateFieldHandler) updateFieldHandler('fotoPerfil', file)
  }

  const finalizarCadastro = async () => {
    try {
      const envio = new FormData()
      envio.append('descricao', formData.descricao)
      if (formData.fotoPerfil) envio.append('fotoPerfil', formData.fotoPerfil)

      await api.post('/usuarios', envio, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      console.log('Cadastro enviado:', formData)
    } catch (error) {
      console.error('Erro ao enviar cadastro:', error)
    }
  }

  return (
    <div className={Styles.cadastro}>
      <div id={Styles.meio}>
        <div className={Styles.form_control}>
          <div id={Styles.imagem_cadastro}>
            <img
              src={formData.fotoPerfil ? URL.createObjectURL(formData.fotoPerfil) : imagem}
              alt="perfil"
              id={Styles.image}
            />
            <p>Escolha uma foto de perfil</p>
            <input type="file" onChange={handleFileChange} />
          </div>
        </div>

        <div className={Styles.form_control}>
          <textarea
            name="descricao"
            placeholder="Sua descrição aqui"
            value={formData.descricao}
            onChange={handleChange}
          />
        </div>

        <button onClick={finalizarCadastro}>Finalizar Cadastro</button>
      </div>
    </div>
  )
}
