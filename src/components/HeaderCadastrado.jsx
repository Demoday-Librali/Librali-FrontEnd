import Style from './css/HeaderCadastrado.module.css';
import Logo from '../assets/images/logo-completo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { GrLogout } from "react-icons/gr";



export default function HeaderCadastrado() {
    /*aqui vai ficar o código da dropdownbox*/
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


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
              <IoPersonCircleSharp size={100} color='#381A72' id={Style.icone_usuario} onClick={toggleDropdown}/>
            {isOpen && (
                <div className={Style.dropdownMenu}>
                <Link to="/dados-interpretes" className={Style.dropdownItem}><IoMdPerson size={30} color='#381A72'/>Perfil</Link>
                <Link to="#opcao2" className={Style.dropdownItem}><IoMdSettings size={30} color='#381A72'/>Configurações</Link>
                <Link to="#opcao3" className={Style.dropdownItem}><GrLogout size={30} color='#381A72'/>Sair</Link>
                </div>
            )}
        </div>
        
      </div>
    </header>
  )
}
