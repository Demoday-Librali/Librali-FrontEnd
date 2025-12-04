import Style from './css/Oque.module.css'
import Loira_de_fone from '../assets/images/loira_de_fone.png'
import Computador_com_tasks from '../assets/images/computador_com_task.png'
import Comprimento_de_mao from '../assets/images/comprimento_de_mao.png'
import { useState, useEffect } from 'react'

function Oquee() {
    const [hoveredSection, setHoveredSection] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    
    // Detecta se é mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    // Funções de hover apenas para desktop
    const handleMouseEnter = (section) => {
        if (!isMobile) {
            setHoveredSection(section);
        }
    };
    
    const handleMouseLeave = () => {
        if (!isMobile) {
            setHoveredSection(null);
        }
    };
    
    return (
        <div className={Style.Oquee}>
            {/* Div Esquerda */}
            <div 
                className={`${Style.esquerda} ${!isMobile && hoveredSection && hoveredSection !== 'esquerda' ? Style.hidden : ''}`}
                onMouseEnter={() => handleMouseEnter('esquerda')}
                onMouseLeave={handleMouseLeave}
            >
                <img src={Loira_de_fone} alt="Mulher loira de fone" />
                <p className={Style.paragrafoesquerda}>
                    Nossa plataforma conecta intérpretes de Libras a empresas que precisam de acessibilidade em eventos, atendimentos, instituições de ensino, consultas médicas e ambientes corporativos. Intérpretes se cadastram para prestar serviços em diferentes áreas, promovendo inclusão e comunicação direta com pessoas surdas ou com deficiência auditiva.
                </p>
            </div>
            
            {/* Título FORA da div esquerda */}
            <h1 className={`${Style.titleesquerda} ${!isMobile && hoveredSection === 'esquerda' ? Style.hovered : ''} ${!isMobile && hoveredSection && hoveredSection !== 'esquerda' ? Style.hidden : ''}`}>
                O que é o Librali?
            </h1>
            
            {/* Div Rosa (Meio) */}
            <div 
                className={`${Style.meio} ${!isMobile && hoveredSection && hoveredSection !== 'meio' ? Style.hidden : ''}`}
                onMouseEnter={() => handleMouseEnter('meio')}
                onMouseLeave={handleMouseLeave}
            >
                <img src={Computador_com_tasks} alt="Computador com tasks" />
                <p className={Style.paragrafomeio}>
                    Intérpretes de Libras com formação, experiência ou atuação profissional nas áreas educacional, médica, corporativa, cultural e em eventos podem se cadastrar na plataforma. É necessário estar apto a atuar com ética, responsabilidade e compromisso com a acessibilidade.
                </p>
            </div>
            
            {/* Título FORA da div rosa */}
            <h1 className={`${Style.titlemeio} ${!isMobile && hoveredSection === 'meio' ? Style.hovered : ''} ${!isMobile && hoveredSection && hoveredSection !== 'meio' ? Style.hidden : ''}`}>
                Quem pode se cadastrar?
            </h1>
            
            {/* Div Verde (Direita) */}
            <div 
                className={`${Style.direita} ${!isMobile && hoveredSection && hoveredSection !== 'direita' ? Style.hidden : ''}`}
                onMouseEnter={() => handleMouseEnter('direita')}
                onMouseLeave={handleMouseLeave}
            >
                <img src={Comprimento_de_mao} alt="Comprimento de mão" />
                <p className={Style.paragrafodireita}>
                    Empresas, instituições de ensino, organizadores de eventos, clínicas, hospitais e qualquer organização que precise garantir acessibilidade em seus serviços ou ambientes.
                </p>
            </div>
            
            {/* Título FORA da div verde */}
            <h1 className={`${Style.titledireita} ${!isMobile && hoveredSection === 'direita' ? Style.hovered : ''} ${!isMobile && hoveredSection && hoveredSection !== 'direita' ? Style.hidden : ''}`}>
                Como pode contratar?
            </h1>
        </div>
    )
}

export default Oquee