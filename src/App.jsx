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
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
