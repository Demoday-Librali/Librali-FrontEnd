import './App.css'
import Header from './componente/Header.jsx'
import Footer from './componente/Footer'
import Home from './componente/Home'
import Comeco from './componente/Comeco'
import Oquee from './componente/Oquee'
import Setores from './componente/Setores'
import PaginaIa from './componente/PaginaIa'
import Comofunciona from './componente/Comofunciona'
import Impulso from './componente/Impulso'
import Depoimentos from './componente/Depoimentos'
import Duvidas from './componente/Duvidas'
import Privacidade from './componente/Privacidade'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './componente/ScrollToTop'

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
