import Style from './css/Footer.module.css'
import Logo from '../assets/images/logo-completo.png'
import TikTok from '../assets/images/tiktok.png'
import Instagram from '../assets/images/Instagram.png'
import X from '../assets/images/twitter.png'
import Facebook from '../assets/images/facebook.png'
import YouTube from '../assets/images/You-tube.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className={Style.footer}>
            {/* Aqui começa o código da logo do footer */}
            <div className={Style.logo_footer}>
                <Link to="/"> <img src={Logo} alt="Logo da Librali" /></Link>
            </div>
            {/* Aqui termina o código da logo do footer */}

            {/* Aqui começa os links do footer */}
            <div className={Style.links_footer}>
                <div className={Style.Mapa}>
                    <h3>Mapa do Site</h3>
                    <Link to="/">Página Inicial</Link>
                    <Link to="/interpretes">Intérpretes</Link>
                    <Link to="/sobre">Sobre</Link>
                </div>
                <div className={Style.Ferramentas}>
                    <h3>Ferramentas</h3>
                    <Link to="#">Agendamento</Link>
                    <Link to="#">IA</Link>
                </div>
            </div>
            {/* Aqui termina os links do footer */}
            {/* Aqui começa o código das redes sociais e contatos */}
            <div className={Style.contator_footer}>
                <h3>Siga nossas redes sociais</h3>
                <div className={Style.links}>
                    <a href='#'> <img src={TikTok} alt="Tiktok da Librali" /> </a>
                    <a href='#'> <img src={Instagram} alt="Instagram da Librali" /> </a>
                    <a href='#'> <img src={X} alt="X da Librali" /> </a>
                    <a href='#'> <img src={Facebook} alt="Facebook da Librali" /> </a>
                    <a href='#'> <img src={YouTube} alt="Youtube da Librali" /> </a>
                </div>
                <br></br>
                <h3>Entre em contato</h3>
                <h4>(14) 3376-1782</h4>
                <br></br>
                <a href='#'>libraliproa@gmail.com</a>
                <div className={Style.meio}>
                    <Link to="/privacidade">Política de Privacidade</Link>
                    <p>© 2025 LibraLi. Todos os direitos reservados.</p>
                </div>
            </div>
            {/* Aqui termina o código das redes sociais e contatos */}
        </footer>
    )
}

export default Footer