//creo un contexto global en mi aplicacion (seria como un redux en react js) para poder hacer las funciones y
//pasarse a todos mis componentes sin tener que volver a escribir codigo

// import * as React from "react";

// const AuthContext = React.createContext({
//   authState: "default",
//   setAuthState: () => {},
//   isLoading: false,
// });
// const { Provider } = AuthContext;

// function AuthProvider({ children }) {
//   const [authState, setAuthState] = React.useState("default");
// }
import React from "react";

const Login = ({ user, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const lowercaseUser = user.toLowerCase();  
      if (lowercaseUser === "lucia" && password === "1234") {
        resolve({ data: { name: "Lucia" } });
      } else {
        reject({ error: "Email o contraseña incorrectos" });
      }
    }, 1000);
  });
};

export default Login;