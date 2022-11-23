import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Materias from './components/Materias';
import ContactForm from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './shared/Navbar';
import NotFound from './shared/NotFound';
import RequireAuth from './shared/RequireAuth';
import Footer from './components/Footer'
import Novedades from './components/Novedades';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/login' element={<Login></Login>} /> 
        <Route path='/Novedades' element={<Novedades></Novedades>} /> 
                       
        <Route path='/Materias' element={
          <RequireAuth>
            <Materias></Materias>
          </RequireAuth>
        } />
        <Route path='/Contacto' element={<ContactForm></ContactForm>} />
        <Route path='*' element={<NotFound></NotFound>} />
        
      </Routes>
      <Footer/>
    </>
  );
}

// Luego correr el servidor con el siguiente comando
// npx json-server --watch db.json --port 3004

export default App;
