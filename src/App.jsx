import './App.css'
import Header from './Componente/Header'
import Footer from './Componente/Footer'
import Comeco from './Componente/Comeco'
import Oquee from './Componente/Oquee'
import Privacidade from './Componente/Privacidade'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Componente/ScrollToTop';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <ScrollToTop />
            <Comeco />
            <Oquee />
          </>
        } />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
