import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Materias from './components/Materias'
import { AuthContext } from './context/AuthContext';
import ContactForm from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './shared/NotFound'
// import RequireAuth from './shared/RequireAuth'
import Footer from './components/Footer'
import Novedades from './components/Novedades'
import Layout from './components/Layout'
// import PrivateRoute from './Routes/PrivateRoute'
// import PublicRoute from './Routes/PublicRoute'

function App() {

  return (
    <>
      <AuthContext.Provider value={{}}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materias" element={<Materias />} />
            <Route path="/novedades" element={<Novedades />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AuthContext.Provider>
      <Footer />
    </>
  )
}

// Luego correr el servidor con el siguiente comando
// npx json-server --watch db.json --port 3004

export default App
