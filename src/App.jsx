import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Aomeco from './components/Aomeco.jsx'
import Oque from './components/Oque.jsx'
import Setores from './components/Setores.jsx'
import PaginaIa from './components/PaginaIa.jsx'
import Comofunciona from './components/Comofunciona.jsx'
import Impulso from './components/Impulso.jsx'
import Depoimentos from './components/Depoimentos.jsx'
import Duvida from './components/Duvida.jsx'
import Privacidade from './components/Privacidade.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Login from './components/Login.jsx'
import Cadastro from './components/Cadastro.jsx'
import EscolhaPlano from './components/EscolhaPlano.jsx'
import Sobre from './components/Sobre.jsx'
import Lara from "./components/Lara.jsx"
import DadosEmpresa from "./components/DadosEmpresa.jsx"
import CadastroEmpresa from './components/CadastroEmpresa.jsx'
import CadastroInterprete from './components/CadastroInterprete.jsx'
import CadastroPf from './components/CadastroPf.jsx'
import CadastroOficial from './components/CadastroOficial.jsx'
import DadosInterpletes from './components/DadosInterpletes.jsx'
import Lara3D from "./components/Lara3D.jsx";
import PlanoInterprete from './components/PlanoInterprete.jsx'
import PlanoEmpresa from './components/PlanoEmpresa.jsx'
import EditProfile from './components/EditProfile.jsx'
import AlterarCadastroEmpresas from './components/AlterarCadastroEmpresas.jsx' /*Mexi aqui*/


function App() {
  return (    
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Aomeco />
              <Oque />
              <Setores />
              <PaginaIa />
              <Comofunciona />
              <Impulso />
              <Depoimentos />
              <Duvida />
            </>
          }
        />
        <Route path="/interpretes" element={<Home />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastroOficial />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/PlanoInterprete" element={<PlanoInterprete />} />
        <Route path="/PlanoEmpresa" element={<PlanoEmpresa />} />
        <Route path="/planos/interprete" element={<PlanoInterprete />} />
        <Route path="/planos/empresa" element={<PlanoEmpresa />} />

        <Route path="/assistente" element={<Lara />} />
        
        <Route path="/dadosempresa" element={<DadosEmpresa />} />

        <Route path='/interprete' element={<CadastroInterprete />} />
        <Route path='/empresa' element={<CadastroEmpresa />} />
        <Route path='/cadastropf' element={<CadastroPf />} />
        <Route path='/escolhaplano' element={<EscolhaPlano />} />

        <Route path="/dados-interpretes" element={<DadosInterpletes />} />
        <Route path="/editar-perfil" element={<EditProfile />} />
        <Route path="/editar-empresa" element={<AlterarCadastroEmpresas />} />  {/*Mexi aqui*/}


      </Routes>

      <Footer />

      <Lara3D />


    </Router>

  )
}

export default App

