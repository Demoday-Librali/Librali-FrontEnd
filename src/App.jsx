import './App.css'
import Header from './Componente/Header.jsx'
import Footer from './Componente/Footer.jsx'
import Home from './Componente/Home.jsx'
import Aomeco from './Componente/Aomeco.jsx'
import Oque from './Componente/Oque.jsx'
import Setores from './Componente/Setores.jsx'
import PaginaIa from './Componente/PaginaIa.jsx'
import Comofunciona from './Componente/Comofunciona.jsx'
import Impulso from './Componente/Impulso.jsx'
import Depoimentos from './Componente/Depoimentos.jsx'
import Duvidas from './Componente/Duvidas.jsx'
import Privacidade from './Componente/Privacidade.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Componente/ScrollToTop.jsx'

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
              <Duvidas />
            </>
          }
        />
        <Route path="/interpretes" element={<Home />} />

        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
