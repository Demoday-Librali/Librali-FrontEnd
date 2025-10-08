import './App.css'
import Header from './Componente/Header'
import Footer from './Componente/Footer'
import Comeco from './Componente/Comeco'
import Oquee from './Componente/Oquee'
import Privacidade from './Componente/Privacidade'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
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
