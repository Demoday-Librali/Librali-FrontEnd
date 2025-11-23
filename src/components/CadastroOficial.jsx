import Styles from './css/CadastroOficial.module.css'

import CadastroPessoal from './cadastro-oficial/CadastroPessoal'
import CadastroPerfil from './cadastro-oficial/CadastroPerfil'
import CadastroFoto from './cadastro-oficial/CadastroFoto'
import CadastroContato from './cadastro-oficial/CadastroContato'
import Steps from './Steps'

import { cadastroForm } from '../hooks/cadastroForm'

import inscricao from '../assets/images/sinal-inscricao.png'
import bem_vindo from '../assets/images/sinal-bem-vindo.png'
import logo from '../assets/images/logo-completo.png'

function CadastroOficial() {
    const cadastroComponents = [
            <CadastroPerfil />,
            <CadastroPessoal />,
            <CadastroContato />,
            <CadastroFoto />
        ]
    
    const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = cadastroForm(cadastroComponents)

  return (
    <div className={Styles.container_cadastro}>
        <div className={Styles.form_container}>
            <div className={Styles.conteudo_esquerda}>
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
                            <button type="submit" className={Styles.botao}>
                                <span>Cadastrar</span>
                            </button>
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