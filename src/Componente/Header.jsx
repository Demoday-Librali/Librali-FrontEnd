import Style from '../Componente/css/Header.module.css'
import Logo from '../assets/img/Logo-escrita.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function Header() {
    useEffect(() => {
                window.scrollTo(0, 0);
            }, []);
    return (
        <header>
            {/* Aqui começa o código da logo */}
            <div id={Style.logo}>
                <Link to="/"> <img src={Logo} alt="Logo da Librali"/></Link>
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