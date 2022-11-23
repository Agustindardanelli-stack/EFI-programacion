import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Materias from './components/Materias'
import ContactForm from './components/Contact'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import Novedades from './components/Novedades'
import { AuthContext } from './context/AuthContext'
import Layout from './components/Layout'
// import PrivateRoute from './Routes/PrivateRoute'
// import PublicRoute from './Routes/PublicRoute'

function App() {
  const [state, setState] = useContext(AuthContext)
  // const url = 'https://636b0006b10125b78fe91ab7.mockapi.io/apiusers/users'

  const onSubmitLogin = async ({ email, password }) => {
    const params = {
      email: 'example@example.com',
      password: 'example@example.com',
    }
    // const response = await fetch(url, {
    //   method: 'GET',
    //   body: { email, password },
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) =>
    //     response.json(
    //       setState({
    //         ...state,
    //         auth: true,
    //         id: '',
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         profile: {},
    //       }),
    //       console.log(response),
    //     ),
    //   )
    //   .catch((err) => console.log(err))
    // return response
    if (params.email === email && params.password === password) {
      setState({
        auth: true,
        id: '',
        firstName: 'Aaron',
        lastName: 'Piniero',
        email: email,
        profile: {},
      })
      window.localStorage.setItem('email', email)
      window.location.href = '/home'
    }
  }
  // useEffect(() => {
  //   const usuario = JSON.parse(localStorage.getItem('email'))
  //   if (usuario && state.auth) {
  //     setState({ ...state, email: usuario })
  //   }
  // }, [state.auth])

  return (
    <>
      <Layout state={state}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login onSubmit={onSubmitLogin} />} />
          <Route path='/Novedades' element={<Novedades />} />
          <Route path='/Materias'element={<Materias />}/>
          <Route path='/Contacto' element={<ContactForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Layout>
    </>
  )
}

// Luego correr el servidor con el siguiente comando
// npx json-server --watch db.json --port 3004

export default App
