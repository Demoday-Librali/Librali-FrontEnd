import Style from '../Componente/css/Header.module.css'
import Logo from '../assets/img/Logo-escrita.png'

function Header() {
    return (
        <header>
            {/* Aqui começa o código da logo */}
            <div id={Style.logo}>
                <a href='app.jsx'> <img src={Logo} alt="Logo da Librali"/> </a>
            </div>
            {/* Aqui termina o código da logo */}

            {/* Aqui começa o código dos links */}
            <nav id={Style.links}>
                <a href="#">Início</a>
                <a href="Interpretes">Interpretes</a>
            </nav>
            {/* Aqui termina o código dos links */}

            {/* Aqui começa o código dos botões */}
            <div id={Style.botoes}>
                <button id={Style.cadastro}>Cadastro</button>
                <button id={Style.login}>Login</button>
            </div>
            {/* Aqui termina o código dos botões */}
        </header>
    )
}
export default Header