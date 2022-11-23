import { createContext, useState} from "react";
import { useNavigate} from 'react-router-dom'
import { serviceUser } from "../services/service_user"
// import { getMaterias } from "../services/service_materias";

const AuthContext = createContext({});
const initialAuth = {
    isLoged: false,
    userData: null,
}

export function AuthProvider ({ children }) {
  const [state, setState] = useState(initialAuth)
  const [showAlert, setShowAlert] = useState(false)
  const [textAlert, setTextAlert] = useState('')
  const navigate = useNavigate();
  
  const login = async (email, password) => {
    const response = await serviceUser.validUsers(email, password)
    if (response){
      const newAuth = {
        isLoged: true,
        userData: response.user.name
      }
      console.log(newAuth);
      navigate("/contacto");
      setState(newAuth)
    }
    else {
      setState(initialAuth)
      setTextAlert(response)
      setShowAlert(true)
      setTimeout(() => {
        setShowAlert(false)
      }, 5000);
      setTimeout(() => {
        setTextAlert('')
      }, 5000);
    } 
  }
  const logout = () => {
    setTimeout(() => {
      setState(initialAuth)
    }, 500);
  }

  return ( 
    <AuthContext.Provider 
    value={
      {state,
      login,
      showAlert,
      textAlert,
      logout}
      }>
        {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;