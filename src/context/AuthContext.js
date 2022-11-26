// create a context that will be used to store the user data
//
// Path: src/context/AuthContext.js
import React from 'react';

// const AuthContext = React.createContext();

// const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   return (
//     <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

import React from "react";

export const AuthContext = React.createContext({
    auth: false, 
    authenticate: (email, password) => {serviceMock.login(email, password), auth = true},
    signout: () => {}
})

export { AuthContext, AuthProvider };

