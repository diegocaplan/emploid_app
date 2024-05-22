import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../Context/AuthContext";


export const handleLogin = ({ user, password, navigation }) => {
    Login({user, password })
      .then((user) => {
        AsyncStorage.setItem("userData", JSON.stringify(user.data));
        console.log("Datos del usuario guardados en AsyncStorage:", user.data);
        console.log("Inicio de sesión exitoso:", user);
        alert("Inicio de sesión exitoso");
        navigation.navigate("Form");
      })
      .catch((error) => {
        alert("Email o contraseña incorrectos", error);
      });
  };