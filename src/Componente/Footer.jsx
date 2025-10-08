import Style from '../Componente/css/Footer.module.css'
import rodape from '../assets/img/Footer.png'
import Logo from '../assets/img/Logo-escrita.png'
import TikTok from '../assets/img/TikTok.png'
import Instagram from '../assets/img/Instagram.png'
import X from '../assets/img/Twitter.png'
import Facebook from '../assets/img/Facebook.png'
import YouTube from '../assets/img/YouTube.png'

function Footer() {
    return (
        <footer id={Style.footer}>
            {/* Aqui começa o código da logo do footer */}
            <div className={Style.logo_footer}>
                <a href='index.html'> <img src={Logo} alt="Logo da Librali"/> </a>
            </div>
            {/* Aqui termina o código da logo do footer */}

            {/* Aqui começa os links do footer */}
            <div id={Style.links_footer}>
            <div className={Style.Mapa}>
                <h3>Mapa do Site</h3>
                <a href="#">Página Inicial</a>
                <a href="#">Intérpretes</a>
                <a href="#">Sobre</a>
            </div>
            <div className={Style.Ferramentas}>
                <h3>Ferramentas</h3>
                <a href="#">Agendamento</a>
                <a href="#">IA</a>
            </div>
            </div>
            {/* Aqui termina os links do footer */}
            {/* Aqui começa o código das redes sociais e contatos */}
            <div id={Style.contator_footer}>
                <h3>Siga nossas redes sociais</h3>
                <a href='index.html'> <img src={TikTok} alt="Tiktok da Librali" /> </a>
                <a href='#'> <img src={Instagram} alt="Instagram da Librali" /> </a>
                <a href='#'> <img src={X} alt="X da Librali" /> </a>
                <a href='#'> <img src={Facebook} alt="Facebook da Librali" /> </a>
                <a href='#'> <img src={YouTube} alt="YouTube da Librali" /> </a>
            </div>
            {/* Aqui termina o código das redes sociais e contatos */}
        </footer>
    )
}

export default Footer