import Style from './css/Footer.module.css'
import Logo from '../assets/images/logo-completo.png'
import TikTok from '../assets/images/tiktok.png'
import Instagram from '../assets/images/Instagram.png'
import X from '../assets/images/twitter.png'
import Facebook from '../assets/images/facebook.png'
import YouTube from '../assets/images/You-tube.png'
import { Link } from 'react-router-dom'
import FooterImg from '../assets/images/footer.png'

function Footer() {
    return (
        <footer className={Style.rodape}>

            <div className={Style.imagem_rodape}> 
                <img src={FooterImg} alt="Background do rodapé" />
            </div>

            {/* Container principal que agrupa todo o conteúdo do rodapé */}
            <div className={Style.container_rodape}>
                
                {/* Container da logo */}
                <div className={Style.secao_logo}>
                    <Link to="/">
                        <img src={Logo} alt="Logo da Librali" />
                    </Link>
                </div>

                {/* Container dos links de navegação */}
                <div className={Style.secao_links}>
                    <div className={Style.mapa_site}>
                        <h3>Mapa do Site</h3>
                        <Link to="/">Página Inicial</Link>
                        <Link to="/interpretes">Intérpretes</Link>
                        <Link to="/sobre">Sobre</Link>
                    </div>
                    <div className={Style.ferramentas}>
                        <h3>Ferramentas</h3>
                        <Link to="#">Agendamento</Link>
                        <Link to="#">IA</Link>
                        <Link to="/dadosempresa">Dados Empresa (Apenas para visualizar)</Link>
                        <Link to="/dados-interpretes">Dados Intérpretes (Apenas para visualizar)</Link>
                    </div>
                </div>

                {/* Container de contato e redes sociais */}
                <div className={Style.secao_contato}>
                    <div className={Style.redes_sociais}>
                        <h3>Siga nossas redes sociais</h3>
                        <div className={Style.links_redes}>
                            <a href='#'> <img src={TikTok} alt="Tiktok da Librali" /> </a>
                            <a href='#'> <img src={Instagram} alt="Instagram da Librali" /> </a>
                            <a href='#'> <img src={X} alt="X da Librali" /> </a>
                            <a href='#'> <img src={Facebook} alt="Facebook da Librali" /> </a>
                            <a href='#'> <img src={YouTube} alt="Youtube da Librali" /> </a>
                        </div>
                    </div>

                    <div className={Style.informacoes_contato}>
                        <h3>Entre em contato</h3>
                        <h4>(14) 3376-1782</h4>
                        <a href='mailto:libraliproa@gmail.com'>libraliproa@gmail.com</a>
                    </div>
                </div>
            </div>
            
            <div className={Style.rodape_inferior}>
                <Link to="/privacidade">Política de Privacidade</Link>
                <p>© 2025 LibraLi. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer