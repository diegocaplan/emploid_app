//creo un contexto global en mi aplicacion (seria como un redux en react js) para poder hacer las funciones y
//pasarse a todos mis componentes sin tener que volver a escribir codigo

import * as React from "react";

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
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Tipo de contenido de la solicitud
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        setAuthState("authenticated"); // Cambia el estado de autenticación a 'authenticated' si la solicitud es exitosa
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
