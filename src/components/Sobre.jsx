import Style from './css/Sobre.module.css'
import ImgSobre from '../assets/images/sobrem.png'
import Rosa from   '../assets/images/rosa.png'
import Laranja from '../assets/images/laranja.png'
import BolinhaSobre from '../assets/images/BolinhaSobre.png'
import Azul from '../assets/images/azul.png'
import Missao from '../assets/images/bandeira.gif'
import Visao from '../assets/images/olho.gif'
import Valores from '../assets/images/caridade.gif'
import Ods8 from '../assets/images/Ods8.png'
import Ods10 from '../assets/images/Ods10.png'
import Ods18 from '../assets/images/Ods18.png'
import Certo_sobre from '../assets/images/Certo_sobre.png'
import Arthur from '../assets/images/Arthur.png'
import Cleyton from '../assets/images/Cleyton.png'
import Gabriel from '../assets/images/Gabriel.png'
import Gustavo from '../assets/images/Gustavo.png'
import Ketlyn from '../assets/images/Ketlyn.png'
import Kevin from '../assets/images/Kevin.png'
import Mayara from '../assets/images/Mayara.png'
import Fundo_integrante from '../assets/images/Fundo_integrante.png'

function Sobre(){

    

    return(
        <section className={Style.container}>
            <div className={Style.Sobre}>
            <h1 className={Style.title}>Nossa História</h1>
            <p className={Style.paragrafo}>A plataforma Librali foi desenvolvida a partir da necessidade de promover maior inclusão e acessibilidade no mercado de serviços especialmente para a comunidade surda e pessoas com deficiência auditiva.</p>
            <img className={Style.ImgSobre} src={ImgSobre} alt="Mulher loira e branca usando uma camisa cinza" />
            <img className={Style.Rosa} src={Rosa} alt=""/>
            <img className={Style.Laranja} src={Laranja} alt=""/>
            <img className={Style.BolinhaSobre} src={BolinhaSobre} alt=""/>
            <img className={Style.Azul} src={Azul} alt=""/>
            </div>
            <section className={Style.msv}>
                <div className={Style.missao}>
                    <h2>Missão</h2>
                    <p>Conectar pessoas e empresas a intérpretes qualificados de forma rápida, segura e confiável, garantindo comunicação precisa e inclusão em diversas áreas profissionais.</p>
                    <img className={Style.Missao} src={Missao} alt=""/>
                </div>
                <div className={Style.visao}>
                    <h2>Visão</h2>
                    <p>Crescer de forma sólida, deixando um legado duradouro de acessibilidade, valorização profissional e transformação social.</p>
                    <img className={Style.Visao} src={Visao} alt=""/>
                </div>
                <div className={Style.valores}>
                    <h2>Valores</h2>
                        <ul>
                            <li>Profissionalismo</li>
                            <li>Inclusão</li>
                            <li>Acessibilidade</li>
                            <li>Responsabilidade Ética e Social</li>
                        </ul>
                    <img className={Style.Valores} src={Valores} alt=""/>
                </div>
            </section>
            <section className={Style.Container_ods}>
                    <h1 className={Style.Title_ods}>Impacto Social</h1>
                    <p className={Style.Paragrafo_ods}>Conectamos pessoas, oportunidades e inclusão em harmonia com os Objetivos de Desenvolvimento Sustentável da ONU</p>
                    <div className={Style.Img_ods}>
                        <div className={Style.Ods8}>
                            <img className={Style.Ods8} src={Ods8} alt=""/>
                        </div>
                        <div className={Style.Ods10}>
                            <img className={Style.Ods10} src={Ods10} alt=""/>
                        </div>
                        <div className={Style.Ods18}>
                            <img className={Style.Ods18} src={Ods18} alt=""/>
                        </div>
                    </div>
                    <div className={Style.Textos}>
                        <p className={Style.texto}><img className={Style.Certo_sobre} src={Certo_sobre} alt=""/>Geramos&nbsp;<span className={Style.rosinha}> oportunidades&nbsp; </span>de trabalho para intérpretes.</p>
                        <p className={Style.texto}><img className={Style.Certo_sobre} src={Certo_sobre} alt=""/><span className={Style.rosinha}> Reduzimos&nbsp; </span>desigualdades por meio da inclusão.</p>
                        <p className={Style.texto}><img className={Style.Certo_sobre} src={Certo_sobre} alt=""/> Valorizamos o trabalho <span className={Style.rosinha}> &nbsp;digno e acessível</span>.</p>
                        <p className={Style.texto}><img className={Style.Certo_sobre} src={Certo_sobre} alt=""/> Promovemos a&nbsp;<span className={Style.rosinha}>comunicação</span>&nbsp;entre surdos e ouvintes.</p>
                        <p className={Style.texto}><img className={Style.Certo_sobre} src={Certo_sobre} alt=""/> Fortalecemos a <span className={Style.rosinha}>&nbsp;acessibilidade&nbsp;</span> em empresas e eventos.</p>
                    </div>
            </section>
            <section className={Style.Integrantes}>
                <div>
                    <h1>Pessoas por trás do <span className={Style.roxinho}>Librali</span></h1>
                </div>
                <div className={Style.Pessoas}>
                    {/* Primeira linha - 2 integrantes */}
                    <div className={Style.dupla_especial}>
                        <div className={Style.flip_card}>
                            <div className={Style.flip_card_inner}>
                                <div className={Style.flip_card_front}>
                                    <img className={Style.Fundo_integrante} src={Fundo_integrante} alt="Fundo_integrante"/>
                                    <img className={Style.Img_Arthur} src={Arthur} alt="Arthur é um homem pardo de 18 anos, com estratura baixa e cabelos escuros e olhos castanhos, vestindo nessa imagem o uniforme do ProaProfissão na cor azul escuro"/>
                                    <h3 className={Style.Nome}>Arthur Aparecido</h3>
                                    <p className={Style.Descricao}>Desenvolvedor Full-Stack</p>
                                </div>
                                <div className={Style.flip_card_back}>
                                    <h3>Sobre o Arthur</h3>
                                    <p>Desenvolvedor Full-Stack com experiência em:</p>
                                    <ul>
                                        <li>React.js e Next.js</li>
                                        <li>Node.js e Express</li>
                                        <li>Banco de dados SQL e NoSQL</li>
                                        <li>APIs RESTful</li>
                                        <li>Deploy e DevOps</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={Style.flip_card}>
                            <div className={Style.flip_card_inner}>
                                <div className={Style.flip_card_front}>
                                    <img className={Style.Fundo_integrante} src={Fundo_integrante} alt="Fundo_integrante"/>
                                    <img className={Style.Img_Cleyton} src={Cleyton} alt="Cleyton é um homem negro de 21 anos de cabelos crespos e olhos castanhos. Vestindo nessa imagem o uniforme azul do ProaProfissão"/>
                                    <h3 className={Style.Nome}>Cleyton Durval</h3>
                                    <p className={Style.Descricao}>Desenvolvedor Full-Stack</p>
                                </div>
                                <div className={Style.flip_card_back}>
                                    <h3>Sobre o Cleyton</h3>
                                    <p>Desenvolvedor Full-Stack com experiência em:</p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Java</li>
                                        <li>Python</li>
                                        <li>MySQL</li>
                                        <li>Inglês</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Segunda linha - 3 integrantes */}
                    <div className={Style.trio}>
                        <div className={Style.flip_card}>
                            <div className={Style.flip_card_inner}>
                                <div className={Style.flip_card_front}>
                                    <img className={Style.Fundo_integrante} src={Fundo_integrante} alt="Fundo_integrante"/>
                                    <img className={Style.Img_Gabriel} src={Gabriel} alt="Gabriel é um homem de 18 anos, afrodescendente de estatura alta. Tenho cabelo alto e crespo, possuo olhos castanhos claros. Vestindo nessa imagem o uniforme azul do ProaProfissão"/>
                                    <h3 className={Style.Nome}>Gabriel Damasceno Almeida</h3>
                                    <p className={Style.Descricao}>Desenvolvedor Full-Stack<br></br>e Desing UI/UX</p>
                                </div>
                                <div className={Style.flip_card_back}>
                                    <h3>Sobre o Gabriel</h3>
                                    <p>Desenvolvedor Full-Stack com experiência em:</p>
                                    <ul>
                                        <li>React.js e Next.js</li>
                                        <li>Node.js e Express</li>
                                        <li>Banco de dados SQL e NoSQL</li>
                                        <li>APIs RESTful</li>
                                        <li>Deploy e DevOps</li>
                                    </ul>
                                    <p style={{marginTop: '20px', fontStyle: 'italic'}}>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={Style.flip_card}>
                            <div className={Style.flip_card_inner}>
                                <div className={Style.flip_card_front}>
                                    <img className={Style.Fundo_integrante} src={Fundo_integrante} alt="Gustavo é um homem moreno de 1,70 metros de altura de 22 anos com cabelo e olhos escuros, vestindo na imagem o uniforme do azul do ProaProfissão."/>
                                    <img className={Style.Img_Gustavo} src={Gustavo} alt="Gustavo"/>
                                    <h3 className={Style.Nome}>Gustavo Moura De Jesus</h3>
                                    <p className={Style.Descricao}>Scrum Master e <br></br> Desenvolvedor Back-End</p>
                                </div>
                                <div className={Style.flip_card_back}>
                                    <h3>Sobre o Gustavo</h3>
                                    <p>Desenvolvedor Full-Stack com experiência em:</p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Java</li>
                                        <li>Figma</li>
                                        <li>Canva</li>
                                        <li>Deploy e DevOps</li>
                                    </ul>
                                    <p style={{marginTop: '20px', fontStyle: 'italic'}}>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={Style.flip_card}>
                            <div className={Style.flip_card_inner}>
                                <div className={Style.flip_card_front}>
                                    <img className={Style.Fundo_integrante} src={Fundo_integrante} alt="Fundo_integrante"/>
                                    <img className={Style.Img_Ketlyn} src={Ketlyn} alt="Ketlyn é uma mulher de 21 anos, pele clara, cabelo escuro e cacheado, olhos castanhos e de estatura baixa. Vestindo nessa imagem o uniforme do ProaProfissão na cor azul escuro."/>
                                    <h3 className={Style.Nome}>Ketlyn</h3>
                                    <p className={Style.Descricao}>Procutc Owner e <br></br>Desenvolvedora Full-Stack</p>
                                </div>
                                <div className={Style.flip_card_back}>
                                    <h3>Sobre a Ketlyn</h3>
                                    <p>Desenvolvedora Full-Stack com experiência em:</p>
                                    <ul>
                                        <li>UI/UX</li>
                                        <li>MySQL</li>
                                        <li>React.js</li>
                                        <li>JavaScript</li>
                                        <li>Python</li>
                                    </ul>
                                    <p style={{marginTop: '20px', fontStyle: 'italic'}}>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Terceira linha - 2 integrantes */}
                    <div className={Style.dupla_especial}>
                        <div className={Style.flip_card}>
                            <div className={Style.flip_card_inner}>
                                <div className={Style.flip_card_front}>
                                    <img className={Style.Fundo_integrante} src={Fundo_integrante} alt="Fundo_integrante"/>
                                    <img className={Style.Img_Kevin} src={Kevin} alt="Kevin é um homem de 18 anos, de pele parda, de estatura baixa, cabelo curto e preto e meus olhos são castanhos.  Vestindo nessa imagem o uniforme azul do ProaProfissão"/>
                                    <h3 className={Style.Nome}>Kevin De Jesus Ferreira</h3>
                                    <p className={Style.Descricao}>Desenvolvedor Back-End<br></br> e Financeiro</p>
                                </div>
                                <div className={Style.flip_card_back}>
                                    <h3>Sobre o Kevin</h3>
                                    <p>Desenvolvedor Full-Stack com experiência em:</p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Java</li>
                                        <li>DevOps</li>
                                        <li>Linux</li>
                                        <li>Banco De Dados</li>
                                    </ul>
                                    <p style={{marginTop: '20px', fontStyle: 'italic'}}>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={Style.flip_card}>
                            <div className={Style.flip_card_inner}>
                                <div className={Style.flip_card_front}>
                                    <img className={Style.Fundo_integrante} src={Fundo_integrante} alt="Fundo_integrante"/>
                                    <img className={Style.Img_Mayara} src={Mayara} alt="Mayara é mulher de 19 anos, estatura baixa, cabelos grande cacheados e escuros, assim como meus olhos, e pele parda. Vestindo na imagem o uniforme do azul do ProaProfissão."/>
                                    <h3 className={Style.Nome}>Mayara</h3>
                                    <p className={Style.Descricao}>Desenvolvedora Full-Stack<br></br> e Marketing</p>
                                </div>
                                <div className={Style.flip_card_back}>
                                    <h3>Sobre a Mayara</h3>
                                    <p>Desenvolvedora Full-Stack com experiência em:</p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Java</li>
                                        <li>MySQL</li>
                                        <li>Git e GitHub</li>
                                        <li>Figma e Canva</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Sobre