import './App.css'
import Heade from './componente/Heade.jsx'
import Footer from './componente/Footer.jsx'
import Home from './componente/Home.jsx'
import Comeco from './componente/Comeco.jsx'
import Oquee from './componente/Oquee.jsx'
import Setores from './componente/Setores.jsx'
import PaginaIa from './componente/PaginaIa.jsx'
import Comofunciona from './componente/Comofunciona.jsx'
import Impulso from './componente/Impulso.jsx'
import Depoimentos from './componente/Depoimentos.jsx'
import Duvidas from './componente/Duvidas.jsx'
import Privacidade from './componente/Privacidade.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './componente/ScrollToTop.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Heade />

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
