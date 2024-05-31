// Importar las librerías necesarias
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import imageSource from "../../assets/for.jpg";

const CustomCard = ({ title, text }) => {
  const navigation = useNavigation();
  const navigateToLogin = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>

        <TouchableOpacity onPress={navigateToLogin} style={styles.roundButton}>
          <Icon name="arrow-forward" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderColor: "#f35999",
    borderWidth: 1,
    overflow: "hidden",
    margin: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "row",
    elevation: 3,
    marginTop: "8%",
  },
  image: {
    width: "40%",
    height: 90,
    marginBottom: "5%",
    marginTop: "5%",
  },
  content: {
    padding: 8,
    marginTop: "5%",
    marginHorizontal: "2%",
    width: 220,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#444",
  },
});

export default CustomCard;
