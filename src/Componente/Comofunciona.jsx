import Style from './css/Comofunciona.module.css'
import Categoria from '../assets/img/Categoria.png'
import Interprete from '../assets/img/Interprete.png'
import Cadastro from '../assets/img/Cadastro.png'

function Comofunciona(){
    return(
        <div className={Style.comofunciona}>
            <h1 className={Style.title}>Como funciona?</h1>
            <p className={Style.paragrafo}>Conectando quem precisa de acessibilidade com intérpretes de Libras capacitados.</p>
            <div className={Style.imagens}>
                <div className={Style.passo1}>
                    <img src={Categoria} alt=""/>
                    <h1>PASSO 1: </h1>
                    <p>Escolha a categoria de serviço (eventos, consultas, aulas, reuniões etc.).</p>
                </div>
                <div className={Style.passo2}>
                    <img src={Interprete} alt=""/>
                    <h1>PASSO 2: </h1>
                    <p>Selecione o intérprete que mais se encaixa na sua necessidade!</p>
                </div>
                <div className={Style.passo3}>
                    <img src={Cadastro} alt=""/>
                    <h1>PASSO 3: </h1>
                    <p>Faça nosso cadastro, diretamente na plataforma e agende com o profissional!</p>
                </div>
            </div>
        </div>
    )
}

export default Comofunciona