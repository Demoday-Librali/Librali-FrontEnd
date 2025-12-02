import Style from './css/Header.module.css';
import Logo from '../assets/images/logo-completo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const fecharMenu = () => setMenuAberto(false)

  return (
    <header className={Style.header}>
      {isMobile && (
        <button
          className={Style.hamburguer}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Menu"
        >
          {menuAberto ? <X size={40} color="#381A72" /> : <Menu size={40} color="#381A72" />}
        </button>
      )}

      <div id={Style.logo}>
        <Link to="/">
          <img src={Logo} alt="Logo da Librali" id={Style.logo_img} />
        </Link>
      </div>

      <div
        id={Style.menu}
        className={menuAberto && isMobile ? Style.menuAberto : ''}
      >
        <nav id={Style.links}>
          <Link to="/" onClick={fecharMenu}>Início</Link>
          <Link to="/interpretes" onClick={fecharMenu}>Intérpretes</Link>
          <Link to="/assistente" onClick={fecharMenu}>IA</Link>

        </nav>
        <div id={Style.botoes}>
          <Link to="/cadastro" id={Style.cadastro} onClick={fecharMenu}>Cadastro</Link>
          <Link to="/login" id={Style.login} onClick={fecharMenu}>Login</Link>
        </div>
      </div>
    </header>
  )
}
