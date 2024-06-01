//creo un contexto global en mi aplicacion (seria como un redux en react js) para poder hacer las funciones y
//pasarse a todos mis componentes sin tener que volver a escribir codigo

import * as React from "react";
import axios from 'axios';
const AuthContext = React.createContext({
  authState: "default",
  setAuthState: () => {},
  isLoading: false,
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  login: () => {},
});
const { Provider } = AuthContext;

function AuthProvider({ children }) {
  const [authState, setAuthState] = React.useState("default");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);



  const login = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json" 
        }
      });
  
      const data = response.data;
      if (data.success) {
        setAuthState("authenticated");
      } else {
        setAuthState("error");
      }
    } catch (error) {
      setAuthState("error");
    }
    setIsLoading(false);
  };
  

  return (
    <Provider
      value={{
        authState,
        setAuthState,
        isLoading,
        email,
        setEmail,
        password,
        setPassword,
        login,
      }}
    >
      {children}
    </Provider>
  );
}

export { AuthProvider, AuthContext };
