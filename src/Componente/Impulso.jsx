import Style from './css/Impulso.module.css'
import Visibilidade from '../assets/img/Visibilidade.png'
import Rosa from '../assets/img/Rosa.png'
import Laranja from '../assets/img/Laranja.png'
import Verde from '../assets/img/Verde.png'
import Azul from '../assets/img/Azul.png'

function Impulso(){
    return(
        <div className={Style.fundo}>
            <h1 className={Style.title}>Impulsione sua <span className={Style.Amarelo}>Visibilidade!</span></h1>
            <p className={Style.paragrafo}>Você que é Intérprete, conheça nossos planos e seja popular entre as pesquisas! </p>
            <div className={Style.caixasbrancas}>
                <div className={Style.caixa1}>
                    <p className={Style.plano}>Plano Mãos de Prata</p>
                    <h1 className={Style.valor}>Gratuito</h1>
                    <h2 className={Style.beneficios}>Benefícios:</h2>
                    <div className={Style.itens}>
                        <p>Perfil do intérprete visível</p>
                        <p>Até 5 contatos por mês</p>
                        <p>Acesso básico às vagas disponíveis</p>
                        <p>Acesso grupo fechado para networking</p>
                    </div>
                    <div id={Style.botoa}>
                    <button id={Style.login}>Inscrever-se</button>
                    </div>
                </div>
                <div className={Style.caixa2}>
                    <p className={Style.plano}>Plano Mãos de Ouro</p>
                    <h1 className={Style.valor}>R$49,90/mês </h1>
                    <h2 className={Style.beneficios}>Benefícios:</h2>
                    <div className={Style.itens}>
                    <p>Todos os benefícios do gratuito.</p>
                    <p>3x mais contatos por mês.</p>
                    <p>Selo de “Recomendado”</p>
                    <p>Benefícios para você.</p>
                    </div>
                    <div id={Style.botoa}>
                    <button id={Style.login}>Inscrever-se</button>
                    </div>
                </div>
                <div className={Style.caixa3}>
                    <p className={Style.plano}>Plano Mãos de Diamente</p>
                    <h1 className={Style.valor}>R$79,90/mês </h1>
                    <h2 className={Style.beneficios}>Benefícios:</h2>
                    <div className={Style.itens}>
                    <p>Todos os benefícios dos planos anteriores.</p>
                    <p>Maior destaque visual</p>
                    <p>Selo de “Top Intérprete”</p>
                    <p>Ferramentas extras</p>
                    </div>
                    <div id={Style.botoa}>
                    <button id={Style.login}>Inscrever-se</button>
                    </div>
                </div>
            </div>
            <img src={Visibilidade} alt="" />
            <img className={Style.Rosa} src={Rosa} alt=""/>
            <img className={Style.Laranja} src={Laranja} alt=""/>
            <img className={Style.Verde} src={Verde} alt=""/>
            <img className={Style.Azul} src={Azul} alt=""/>
        </div>
        
    )
}

export default Impulso