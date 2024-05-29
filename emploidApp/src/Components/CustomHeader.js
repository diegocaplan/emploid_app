import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const CustomHeader = () => {
  return (
    <View style={styles.header}>
    <View style={styles.element}>
      {/* <FontAwesome name="wpforms" size={24} color="white" /> */}
      <Text style={styles.title}> IdForIdeas APP</Text>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FCC5D2",
    height:50,
    justifyContent: "center",
    alignItems: "center",
   
    overflow: 'hidden',
  },
    element: {
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#FFF",
    justifyContent:'center'
   
    },
  });
export default CustomHeader