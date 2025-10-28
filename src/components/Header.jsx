import Style from './css/Header.module.css'
import Logo from '../assets/images/logo-completo.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Header() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Função para controlar o menu hambúrguer
  const toggleMenu = () => {
    const menuToggle = document.getElementById('menuToggle')
    const mobileMenu = document.getElementById('mobileMenu')
    const menuOverlay = document.getElementById('menuOverlay')
    
    menuToggle.classList.toggle('active')
    mobileMenu.classList.toggle('active')
    menuOverlay.classList.toggle('active')
    
    // Prevenir scroll quando o menu estiver aberto
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  // Fechar menu ao clicar em um link
  const handleLinkClick = () => {
    toggleMenu()
  }

  // Fechar menu com ESC
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && document.getElementById('mobileMenu')?.classList.contains('active')) {
        toggleMenu()
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [])

  return (
    <header>
      <div id={Style.logo}>
        <Link to="/"><img src={Logo} alt="Logo da Librali" /></Link>
      </div>
      
      <nav id={Style.links}>
        <Link to="/">Início</Link>
        <Link to="/interpretes">Intérpretes</Link>
      </nav>

      <div id={Style.botoes}>
        <button id={Style.cadastro}>Cadastro</button>
        <button id={Style.login}>Login</button>
      </div>

      {/* Botão do menu hambúrguer */}
      <div className={Style.menuToggle} id="menuToggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay para fechar o menu ao clicar fora */}
      <div className={Style.menuOverlay} id="menuOverlay" onClick={toggleMenu}></div>

      {/* Menu mobile */}
      <div className={Style.mobileMenu} id="mobileMenu">
        <nav>
          <Link to="/" onClick={handleLinkClick}>Início</Link>
          <Link to="/interpretes" onClick={handleLinkClick}>Intérpretes</Link>
        </nav>
        
        <div className={Style.mobileBotoes}>
          <button id={Style.cadastro}>Cadastro</button>
          <button id={Style.login}>Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header