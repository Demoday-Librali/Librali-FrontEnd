import './App.css'
import Header from './Componente/Header'
import Footer from './Componente/Footer'
import Comeco from './Componente/Comeco'
import Oquee from './Componente/Oquee'
import Setores from './Componente/Setores'
import PaginaIa from './Componente/PaginaIa'
import Comofunciona from './Componente/Comofunciona'
import Impulso from './Componente/Impulso'
import Depoimentos from './Componente/Depoimentos'
import Duvidas from './Componente/Duvidas'
import Privacidade from './Componente/Privacidade'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Componente/ScrollToTop';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <ScrollToTop />
            <Comeco />
            <Oquee />
            <Setores />
            <PaginaIa />
            <Comofunciona />
            <Impulso />
            <Depoimentos />
            <Duvidas />
          </>
        } />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
