import Style from '../Componente/css/Footer.module.css'
import rodape from '../assets/img/Footer.png'
import Logo from '../assets/img/Logo-escrita.png'

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
            <div class="Mapa">
                <h3>Mapa do Site</h3>
                <a href="#">Página Inicial</a>
                <a href="#">Intérpretes</a>
                <a href="#">Sobre</a>
            </div>
            <div class="Ferramentas">
                <h3>Ferramentas</h3>
                <a href="#">Agendamento</a>
                <a href="#">IA</a>
            </div>
            </div>
            {/* Aqui termina os links do footer */}
            {/* Aqui começa o código das redes sociais e contatos */}
            {/* Aqui termina o código das redes sociais e contatos */}
        </footer>
    )
}

export default Footer