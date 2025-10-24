import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Components/Home.jsx'
import Aomeco from './Components/Aomeco.jsx'
import Oque from './Components/Oque.jsx'
import Setores from './Components/Setores.jsx'
import PaginaIa from './Components/PaginaIa.jsx'
import Comofunciona from './Components/Comofunciona.jsx'
import Impulso from './Components/Impulso.jsx'
import Depoimentos from './Components/Depoimentos.jsx'
import Duvida from './Components/Duvida.jsx'
import Privacidade from './Components/Privacidade.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop.jsx'

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
