import React from 'react'
/*Importação dos forms de intérprete*/
/*Importação dos forms de Empresa*/
import EmpresaForm from "./cadastro-empresas/EmpresaForm"
import EmpresaEndereco from "./cadastro-empresas/EmpresaEndereco"
import EmpresaFoto from "./cadastro-empresas/EmpresaFoto"
import EmpresaContato from "./cadastro-empresas/EmpresaContato"
/*Importação dos forms de usuário*/
// HOOKS
import { empresaForm } from "../hooks/empresaForm"
import Styles from "./css/CadastroEmpresa.module.css"

function CadastroEmpresa() {
    const empresaComponents = [
            <EmpresaForm />,
            <EmpresaContato />,
            <EmpresaEndereco />,
            <EmpresaFoto />
        ]
    
    const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = empresaForm(empresaComponents)

  return (
    <div className={Styles.container_cadastro}>
        <div className={Styles.form_container}>
            <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                <h1>{currentComponent}</h1>
                <div className={Styles.input_container}></div>
                <div className={Styles.actions}>
            
                    {!isFirstStep && (
                        <button type="button" className={Styles.botao} onClick={() => changeStep(currentStep - 1)}>
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
    </div>
  )
}

export default CadastroEmpresa