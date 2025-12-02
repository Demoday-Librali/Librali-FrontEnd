
import Styles from './css/CadastroOficial.module.css'

import CadastroPessoal from './cadastro-oficial/CadastroPessoal'
import CadastroPerfil from './cadastro-oficial/CadastroPerfil'
import CadastroFoto from './cadastro-oficial/CadastroFoto'
import CadastroContato from './cadastro-oficial/CadastroContato'
import Steps from './Steps'

import { cadastroForm } from '../hooks/cadastroForm'
import { useState } from 'react'
import { Link } from 'react-router-dom'


import inscricao from '../assets/images/sinal-inscricao.png'
import bem_vindo from '../assets/images/sinal-bem-vindo.png'
import logo from '../assets/images/logo-completo.png'

const formTemplate = {
    nome_razao: '',
    cpf_cnpj: '',
    data_nasc:'',
    email:'',
    senha: '',
    conf_senha: '',
    cep: '',
    numero: '',
    complemento: '',
    rua:'',
    uf:'',
    cidade:'',
    email:'',
    phone:'',
    cel:''
}

function CadastroOficial() {
    const [data, setData] = useState(formTemplate)

    const updateFieldHandler = (key, value) => {
        setData((prev) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    const cadastroComponents = [
            <CadastroPerfil data={data} updateFieldHandler={updateFieldHandler} />,
            <CadastroPessoal data={data} updateFieldHandler={updateFieldHandler}/>,
            <CadastroContato data={data} updateFieldHandler={updateFieldHandler}/>,
            <CadastroFoto data={data} />
        ]
    
    const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = cadastroForm(cadastroComponents)

  return (
    <div className={Styles.container_cadastro}>
        <div className={Styles.form_container}>
            <div className={Styles.conteudo_esquerda}>
                <h1 id={Styles.titulo}>Cadastro</h1>
                <Steps currentStep={currentStep} />
                <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    <h1>{currentComponent}</h1>
                    <div className={Styles.input_container}></div>
                    <div className={Styles.actions}>
                
                        {!isFirstStep && (
                            <button type="button" className={Styles.botao} id={Styles.voltar} onClick={() => changeStep(currentStep - 1)}>
                                <span>Voltar</span>
                            </button>
                            )}
                        {!isLastStep ? (
                            <button type="submit" className={Styles.botao}>
                                <span>Avançar</span>
                            </button>
                        ) : (
                            <Link to="/escolhaplano"><button type="submit" className={Styles.botao}>
                                <span>Cadastrar</span>
                            </button></Link>
                        )}
                    </div>
                </form>
            </div>
            {!isLastStep ? (
                <div className={Styles.conteudo_direito} style={{backgroundImage: `url(${inscricao})`}}>
                    <img src={logo} alt="Logotipo Librali" />
                </div>
            ) : (
                <div className={Styles.conteudo_direito} style={{backgroundImage: `url(${bem_vindo})`}}>
                    <img src={logo} alt="Logotipo Librali" />
                </div>
            ) }
        </div>
    </div>
  )
}

export default CadastroOficial