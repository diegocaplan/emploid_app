import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { handleLogin } from "../Storage/Storage";
import { Feather } from "@expo/vector-icons";
import Input from "./Input";
const { width, height } = Dimensions.get("window");

const SignIn = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    login,
    isLoading,
    authState,
  } = useContext(AuthContext);
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <React.Fragment>
      <View style={styles.cont}>
        <Input
          label={"Email"}
          value={email}
          onChangeText={(text) => {
            setEmail(text.trim());
          }}
        />

        {/* <View style={styles.viewPassword}>
        //CONTRASEÑA
        <Input
          label={"Contraseña"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        
        />
          <TouchableOpacity onPress={toggleShowPassword} activeOpacity={0.8} style={styles.show}>
          <Feather
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color="#b3b3b3"
          />
        </TouchableOpacity>
        </View> */}

        <TouchableOpacity
          style={styles.button}
          // onPress={login}
          onPress={() => navigation.navigate("Home")}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>INGRESAR</Text>
          {/* <Text style={styles.buttonText}>{isLoading ? 'Logging in...' : 'Login'}</Text> */}
        </TouchableOpacity>

        <View style={styles.row}>
          <Text style={styles.question}> ¿Aún no tienes cuenta?</Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://idforideas.com/emploid/")}
          >
            <Text style={styles.text}> Suscríbete aquí</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.password}>
            Por consultas contactarse a{" "}
            <Text
              style={styles.link}
              onPress={() => Linking.openURL("mailto:diego@idforideas.com")}
            >
              diego@idforideas.com
            </Text>
          </Text>
          {/* <TouchableOpacity>
            <Text style={styles.password}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    alignItems: "center",
    marginHorizontal: "15%",
    marginTop: height > 800 ? 50 : 20,
    ...Platform.select({
      web: {
        width: width > 1024 ? "50%" : width > 768 ? "60%" : "70%",
        marginTop: width > 1024 ? 50 : width > 768 ? 40 : 30,
      },
    }),
  },
  viewPassword: {
    flexDirection: "row",
    alignItems: "center",
  },
  show: {
    marginHorizontal: "85%",
    position: "absolute",
    top: 8,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "7%",
    backgroundColor: "#fff",
    ...Platform.select({
      web: {
        width: "auto",
      },
      default: {
        width: "100%",
      },
    }),
  },
  buttonText: {
    color: "#c30752",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",

    ...Platform.select({
      web: {
        fontSize: 16,
      },
      default: {
        fontSize: 14,
      },
    }),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    fontSize: 15,
    color: "white",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  forgotPasswordContainer: {
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      web: {
        marginTop: "5%",
      },
      default: {
        marginTop: height > 800 ? "35%" : "20%",
      },
    }),
  },
  password: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
export default SignIn;
