import React from 'react'

import InterpretePerfil from './Cadastro-interpretes/InterpretePerfil'
import InterpretePessoal from './Cadastro-interpretes/InterpretePessoal'
import InterpreteContato from './Cadastro-interpretes/InterpreteContato'
import InterpreteFoto from './Cadastro-interpretes/InterpreteFoto'

import { InterpreteForm } from '../hooks/InterpreteForm'

export default function CadastroInterprete() {
    const interpreteComponents = [
        <InterpretePerfil/>,
        <InterpretePessoal/>,
        <InterpreteContato/>,
        <InterpreteFoto/>
    ]

    const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = InterpreteForm(interpreteComponents)
  return (
    <div className={Styles.container_cadastro}>
            <div className={Styles.form_container}>
                <div className={Styles.conteudo_esquerda}>
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
                <div className={Styles.conteudo_direito}>
    
                </div>
            </div>
        </div>
  )
}
