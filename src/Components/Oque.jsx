import Style from './css/Oque.module.css'
import Loira_de_fone from '../assets/images/loira_de_fone.png'
import Computador_com_tasks from '../assets/images/computador_com_task.png'
import Comprimento_de_mao from '../assets/images/ecomprimento_de_mao.png'
import { useState } from 'react'

function Oquee() {
    const [hoveredSection, setHoveredSection] = useState(null);
    
    return (
        <div className={Style.Oquee}>
            <div 
                className={`${Style.esquerda} ${hoveredSection === 'direita' || hoveredSection === 'meio' ? Style.hidden : ''}`}
                onMouseEnter={() => setHoveredSection('esquerda')}
                onMouseLeave={() => setHoveredSection(null)}
            >
                <img src={Loira_de_fone} alt="Mulher loira de fone" />
                <div className={Style.titleesquerda}><h1>O que é o Librali?</h1></div>
                <div className={Style.textoanimado}>
                    <p className={Style.paragrafoesquerda}>
                    O Librali é uma plataforma que conecta intérpretes e clientes de forma acessível e rápida.
                    Nosso objetivo é facilitar a comunicação entre pessoas surdas e ouvintes, promovendo inclusão
                    e oportunidades iguais em todos os contextos.
                    </p>
                </div>
            </div>
            
            <div 
                className={`${Style.meio} ${hoveredSection === 'esquerda' || hoveredSection === 'direita' ? Style.hidden : ''}`}
                onMouseEnter={() => setHoveredSection('meio')}
                onMouseLeave={() => setHoveredSection(null)}
            >
                <img src={Computador_com_tasks} alt="Computador com tasks" />
                <h1 className={Style.titlemeio}>Quem pode se cadastrar?</h1>
                <p className={Style.paragrafomeio}>
                    O Librali é uma plataforma que conecta intérpretes e clientes de forma acessível e rápida.
                    Nosso objetivo é facilitar a comunicação entre pessoas surdas e ouvintes, promovendo inclusão
                    e oportunidades iguais em todos os contextos.
                    </p>
            </div>
            
            <div 
                className={`${Style.direita} ${hoveredSection === 'esquerda' || hoveredSection === 'meio' ? Style.hidden : ''}`}
                onMouseEnter={() => setHoveredSection('direita')}
                onMouseLeave={() => setHoveredSection(null)}
            >
                <img src={Comprimento_de_mao} alt="Comprimento de mão" />
                <h1 className={Style.titledireita}>Como pode contratar?</h1>
                <div className={Style.textoanimado}>
                    <p className={Style.paragrafodireita}>
                    O Librali é uma plataforma que conecta intérpretes e clientes de forma acessível e rápida.
                    Nosso objetivo é facilitar a comunicação entre pessoas surdas e ouvintes, promovendo inclusão
                    e oportunidades iguais em todos os contextos.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Oquee