import Style from './css/Header.module.css'
import Logo from '../assets/images/logo-completo.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    
    // Prevenir scroll quando o menu estiver aberto
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  // Fechar menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  // Fechar menu com ESC
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
        document.body.style.overflow = ''
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => {
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isMenuOpen])

  // Fechar menu ao clicar no overlay
  const handleOverlayClick = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

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
      <div 
        className={`${Style.menuToggle} ${isMenuOpen ? Style.active : ''}`} 
        id="menuToggle" 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Overlay para fechar o menu ao clicar fora */}
      <div 
        className={`${Style.menuOverlay} ${isMenuOpen ? Style.active : ''}`} 
        id="menuOverlay" 
        onClick={handleOverlayClick}
      ></div>

      {/* Menu mobile */}
      <div 
        className={`${Style.mobileMenu} ${isMenuOpen ? Style.active : ''}`} 
        id="mobileMenu"
      >
        <nav>
          <Link to="/" onClick={handleLinkClick}>Início</Link>
          <Link to="/interpretes" onClick={handleLinkClick}>Intérpretes</Link>
        </nav>
        
        <div className={Style.mobileBotoes}>
          <button id={Style.cadastro} onClick={handleLinkClick}>Cadastro</button>
          <button id={Style.login} onClick={handleLinkClick}>Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header