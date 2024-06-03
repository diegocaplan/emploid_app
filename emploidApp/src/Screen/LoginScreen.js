import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SignIn from "../Components/SignIn";
import logo from "../../assets/logoId.png";
const { width, height } = Dimensions.get("window");
const LoginScreen = () => {
  return (
    <LinearGradient colors={["#f35999", "#c30752"]} style={styles.gradient}>
      <Image source={logo} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={2}>
          ¡UN DÍA MÁS CERCA DE{"\n"} CONSEGUIR TRABAJO!
        </Text>
        <View style={styles.signInContainer}>
          <SignIn />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 65,
    height: 65,
    resizeMode: "contain",
    marginTop: "-30%",
    ...Platform.select({
      web: {
        marginTop: "1%",
        marginBottom: "2%",
      },
    }),
    marginBottom: "10%",
  },
  container: {
    textAlign: "center",
    ...Platform.select({
      web: {
        width:
          width > 1200
            ? "30%"
            : width > 992
            ? "40%"
            : width > 768
            ? "50%"
            : "70%",
        marginTop: "-8%",
      },
      default: {
        width: width > 400 ? "70%" : "90%",
        marginTop: height > 800 ? "15%" : "10%",
      },
    }),
  },
  text: {
    marginHorizontal: 20,
    color: "#fff",
    lineHeight: 30,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    ...Platform.select({
      web: {
        marginBottom: "10%",
        fontSize: width > 1200 ? 30 : width > 992 ? 25 : 20,
      },
      default: {
        marginBottom: 24,
        fontSize: width > 400 ? 20 : 18,
      },
    }),
  },
  signInContainer: {
    width: "100%",
    ...Platform.select({
      web: { width: "80%", marginHorizontal: 40 },
    }),
  },
});

export default LoginScreen;
