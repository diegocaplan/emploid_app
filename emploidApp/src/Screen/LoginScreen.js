import React from "react";
import { Text, View, StyleSheet } from "react-native";
import SignIn from "../Components/SignIn";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  return (
    <LinearGradient colors={["#f35999", "#c30752"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.text} numberOfLines={2}>
          ¡UN DÍA MÁS CERCA DE{"\n"} CONSEGUIR TRABAJO!
        </Text>
        <SignIn />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    marginTop: "60%",
    flex: 1,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    lineHeight: 30,
    fontSize: 20,
    fontWeight: "bold",
    width: "100%",
    marginBottom: "7%",
  },
});
export default LoginScreen;
