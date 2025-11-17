import Style from './css/Impulso.module.css'
import Visibilidade from '../assets/images/visibilidade.png'
import Rosa from   '../assets/images/rosa.png'
import Laranja from '../assets/images/laranja.png'
import Verde from '../assets/images/verde.png'
import Azul from '../assets/images/azul.png'
import Check from '../assets/images/check.png'
import Checkgif from '../assets/images/video/check.gif'

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
                        <p><img className={Style.check} src={Check} alt=""/> Perfil do intérprete visível</p>
                        <p><img className={Style.check} src={Check} alt=""/> Até 5 contatos por mês</p>
                        <p><img className={Style.check} src={Check} alt=""/> Acesso básico às vagas disponíveis</p>
                        <p><img className={Style.check} src={Check} alt=""/> Acesso grupo fechado para networking</p>
                    </div>
                    <div id={Style.botoa}>
                    <button id={Style.login}>Inscrever-se</button>
                    </div>
                </div>
                <div className={Style.caixa2}>
                    <p className={Style.plano}>Plano Mãos de Ouro</p>
                    <h1 className={Style.valor}>R$79,90/mês </h1>
                    <h2 className={Style.beneficios}>Benefícios:</h2>
                    <div className={Style.itens}>
                    <p><img className={Style.check} src={Check} alt=""/> Todos os benefícios do gratuito.</p>
                    <p><img className={Style.check} src={Check} alt=""/> 3x mais contatos por mês.</p>
                    <p><img className={Style.check} src={Check} alt=""/> Selo de “Recomendado”</p>
                    <p><img className={Style.check} src={Check} alt=""/> Benefícios para você.</p>
                    </div>
                    <div id={Style.botoa2}>
                    <button id={Style.login2}>Inscrever-se</button>
                    </div>
                </div>
                <div className={Style.caixa3}>
                    <p className={Style.plano}>Plano Mãos de Diamente</p>
                    <h1 className={Style.valor}>R$149,90/mês </h1>
                    <h2 className={Style.beneficios}>Benefícios:</h2>
                    <div className={Style.itens}>
                    <p><img className={Style.check} src={Check} alt=""/> Todos os benefícios dos planos anteriores.</p>
                    <p><img className={Style.check} src={Check} alt=""/> Maior destaque visual</p>
                    <p><img className={Style.check} src={Check} alt=""/> Selo de “Top Intérprete”</p>
                    <p><img className={Style.check} src={Check} alt=""/> Ferramentas extras</p>
                    </div>
                    <div id={Style.botoa3}>
                    <button id={Style.login3}>Inscrever-se</button>
                    </div>
                    <button id={Style.Vermais}>Ver mais</button>
                </div>
            </div>
            
            <img src={Visibilidade} id={Style.forma} alt="" />
            <img className={Style.Rosa} src={Rosa} alt=""/>
            <img className={Style.Laranja} src={Laranja} alt=""/>
            <img className={Style.Verde} src={Verde} alt=""/>
            <img className={Style.Azul} src={Azul} alt=""/>
        </div>
        
    )
}

export default Impulso