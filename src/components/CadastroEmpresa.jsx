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
    
    const {currentStep, currentComponent} = empresaForm(empresaComponents)

  return (
    <div className={Styles.container_cadastro}>
        <h1>{empresaComponents[1]}</h1>
        <form>
            <div className={Styles.input_container}></div>
            <div className={Styles.actions}>
                <button type="submit" className={Styles.botao}>
                    <span>Voltar</span>
                </button>
                <button type="submit" className={Styles.botao}>
                    <span>Avançar</span>
                </button>
            </div>
        </form>
    </div>
  )
}

export default CadastroEmpresa