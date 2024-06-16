//creo un contexto global en mi aplicacion (seria como un redux en react js) para poder hacer las funciones y
//pasarse a todos mis componentes sin tener que volver a escribir codigo

import * as React from "react";
import axios from "axios";
const AuthContext = React.createContext({
  authState: "default",
  setAuthState: () => {},
  isLoading: false,
  email: "",
  setEmail: () => {},
  // password: "",
  // setPassword: () => {},
  login: () => {},
  logout: () => {},
});
const { Provider } = AuthContext;

function AuthProvider({ children }) {
  const [authState, setAuthState] = React.useState("default");
  const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  //OBTENER TOKEN SI EXISTE
  React.useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setAuthState("authenticated");
      }
    };
    loadToken();
  }, []);

  const login = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/login",
        {
          email,
          // password
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (data.success && data.token) {
        await AsyncStorage.setItem("token", data.token);
        setAuthState("authenticated");
      } else {
        setAuthState("error");
      }
    } catch (error) {
      setAuthState("error");
    }
    setIsLoading(false);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setAuthState("default");
  };
  return (
    <Provider
      value={{
        authState,
        setAuthState,
        isLoading,
        email,
        setEmail,
        // password,
        // setPassword,
        login,
        logout,
      }}
    >
      {children}
    </Provider>
  );
}

export { AuthProvider, AuthContext };
