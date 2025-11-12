import Style from './css/Sobre.module.css'
import ImgSobre from '../assets/images/sobrem.png'
import Rosa from   '../assets/images/rosa.png'
import Laranja from '../assets/images/laranja.png'
import BolinhaSobre from '../assets/images/BolinhaSobre.png'
import Azul from '../assets/images/azul.png'
import Missao from '../assets/images/bandeira.gif'
import Visao from '../assets/images/olho.gif'
import Valores from '../assets/images/caridade.gif'
import Visibilidade from '../assets/images/visibilidade.png'
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

                        <div className={Style.Dupla}>
                            
                        <div className={Style.Arthur}>
                            <img className={Style.Img_Arthur} src={Arthur} alt=""/>
                            <h3 className={Style.Nome}>Arthur Aparecido</h3>
                            <p className={Style.Descricao}>Desenvolvedor Full-Stack</p>
                        </div>
                        <div className={Style.Cleyton}>
                            <img className={Style.Img_Cleyton} src={Cleyton} alt=""/>
                            <h3 className={Style.Nome}>Cleyton</h3>
                            <p className={Style.Descricao}>Desenvolvedor Full-Stack</p>
                            
                        </div>
                        </div>

                        <div className={Style.Dupla}>
                        <div className={Style.Gabriel}>
                            <img className={Style.Img_Gabriel} src={Gabriel} alt=""/>
                            <h3 className={Style.Nome}>Gabriel Damasceno Almeida</h3>
                            <p className={Style.Descricao}>Desenvolvedor Full-Stack e Desing UI/UX</p>
                        </div>
                        <div className={Style.Gustavo}>
                            <img className={Style.Img_Gustavo} src={Gustavo} alt=""/>
                            <h3 className={Style.Nome}>Gustavo Moura De Jesus</h3>
                            <p className={Style.Descricao}>Scrum Master Desenvolvedor Front-End</p>
                        </div>

                        </div>

                        <div className={Style.Dupla}>
                        <div className={Style.Ketlyn}>
                            <img className={Style.Img_Ketlyn} src={Ketlyn} alt=""/>
                            <h3 className={Style.Nome}>Ketlyn</h3>
                            <p className={Style.Descricao}>Procutc Owner e Desenvolvedora Full-Stack</p>
                        </div>
                        <div className={Style.Kevin}>
                            <img className={Style.Img_Kevin} src={Kevin} alt=""/>
                            <h3 className={Style.Nome}>Kevin De Jesus Ferreira</h3>
                            <p className={Style.Descricao}>Desenvolvedor Back-End e Financeiro</p>
                        </div>
                        </div>
                        <div className={Style.Mayara}>
                            <img className={Style.Img_Mayara} src={Mayara} alt=""/>
                            <h3 className={Style.Nome}>Mayara Vitória Da Silva</h3>
                            <p className={Style.Descricao}>Desenvolvedora Full-Stack e Marketing</p>
                        </div>
                    </div>
            </section>
        </section>
    )
}

export default Sobre