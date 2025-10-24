import Style from './css/Header.module.css'
import Logo from '../../assets/images/logo-completo.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Header() {
  useEffect(() => {
    window.scrollTo(0, 0)
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
    </header>
  )
}

export default Header
