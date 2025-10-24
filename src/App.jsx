import './App.css'
import Header from './Componente/Header.jsx'
import Footer from './Componente/Footer.jsx'
import Home from './Componente/Home.jsx'
import Comeco from './Componente/Comeco.jsx'
import Oquee from './Componente/Oquee.jsx'
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
              
              <Comeco />
              <Oquee />
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
