import React,{useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { handleLogin } from "../Storage/Storage";
// import { Feather } from "@expo/vector-icons";
import Input from "./Input";

const SignIn = () => {
  const navigation = useNavigation();
  //cambiar cuando tenga mi estado global
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

const handleLoginPress=()=>{
  handleLogin({user, password,navigation,})
}
  return (
    <React.Fragment>
      <View style={styles.cont}>
        <Input label={"Usuario"} value={user} onChangeText={(text)=>{
          setUser(text.trim())}}/>
        <Input label={"Contraseña"}  value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}/>

        <TouchableOpacity style={styles.button} onPress={handleLoginPress} >
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text  style={styles.question}> ¿Aún no tienes cuenta?</Text>
          <TouchableOpacity>
            <Text style={styles.text}> Suscríbete aquí</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop:'70%'}}> 
          <TouchableOpacity>
          <Text style={styles.password}>¿Olvidaste tu contraseña? </Text>

          </TouchableOpacity>
         
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  cont: {
    width: "70%",
    alignItems: "center",
    marginHorizontal: "15%",
  },
  button: {
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 105,
    marginBottom: "7%",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  buttonText: {
    color: "#c30752",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    width:80
  },
  question:{
    fontSize: 15,
    color: "white",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  password:{
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  }
});
export default SignIn;
