import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import logo from "../../assets/logoId.png";
const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.element}>
        <Image source={logo} style={styles.image} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FCC5D2",
    height: 55,
    justifyContent: "center",
    alignItems: "center",

    overflow: "hidden",
  },
  element: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    justifyContent: "center",
  },
  image: {
    width: 65,
    height: 65,
    resizeMode: "contain",
    marginTop: 10,
  },
});
export default CustomHeader;
