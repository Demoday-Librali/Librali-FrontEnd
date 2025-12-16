import React, { useState } from 'react'
import Styles from './css/CadastroInterprete.module.css'

import InterpretePerfil from './Cadastro-interpretes/InterpretePerfil'
import InterpretePessoal from './Cadastro-interpretes/InterpretePessoal'
import InterpreteContato from './Cadastro-interpretes/InterpreteContato'
import InterpreteFoto from './Cadastro-interpretes/InterpreteFoto'

import inscricao from '../assets/images/sinal-inscricao.png'
import bem_vindo from '../assets/images/sinal-bem-vindo.png'

import { InterpreteForm } from '../hooks/InterpreteForm'
import { useInterpreteMutate } from '../hooks/useInterpreteMutate'

export default function CadastroInterprete() {

    const { mutate } = useInterpreteMutate()

    const [interpreteData, setInterpreteData] = useState({
        nomeRazao: '',
        endereco: '',
        descricao: '',
        telefone: '',
        email: '',
        fotoPerfil: null,
    })

    const interpreteComponents = [
        <InterpretePerfil data={interpreteData} setData={setInterpreteData} />,
        <InterpretePessoal data={interpreteData} setData={setInterpreteData} />,
        <InterpreteContato data={interpreteData} setData={setInterpreteData} />,
        <InterpreteFoto data={interpreteData} setData={setInterpreteData} />
    ]

    const {
        currentStep,
        currentComponent,
        changeStep,
        isLastStep,
        isFirstStep
    } = InterpreteForm(interpreteComponents)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!isLastStep) {
            changeStep(currentStep + 1)
            return
        }

        // último passo → POST
        mutate(interpreteData)
    }

    return (
        <div className={Styles.container_cadastro}>
            <div className={Styles.form_container}>
                <div className={Styles.conteudo_esquerda}>
                    <form onSubmit={handleSubmit}>
                        <h1>{currentComponent}</h1>

                        <div className={Styles.input_container}></div>

                        <div className={Styles.actions}>
                            {!isFirstStep && (
                                <button
                                    type="button"
                                    className={Styles.botao}
                                    id={Styles.voltar}
                                    onClick={() => changeStep(currentStep - 1)}
                                >
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
                    <div
                        className={Styles.conteudo_direito}
                        style={{ backgroundImage: `url(${inscricao})` }}
                    />
                ) : (
                    <div
                        className={Styles.conteudo_direito}
                        style={{ backgroundImage: `url(${bem_vindo})` }}
                    />
                )}
            </div>
        </div>
    )
}
