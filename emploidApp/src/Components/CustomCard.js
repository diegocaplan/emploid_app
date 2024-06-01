
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import imageSource from "../../assets/for.jpg";

const { width, height } = Dimensions.get("window");

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
    ...Platform.select({
      web: {
        height: height > 1024 ? "80%" : width > 768 ? "50%" : "70%",
        width: width > 1024 ? "60%" : width > 768 ? "70%" : "90%",
        marginHorizontal: "20%",
       
      },
    }),
  },
  image: {
    width: "30%",
    ...Platform.select({
      web: {
        width: "30%",
        marginBottom:25,
        marginTop: "1%",
        height: "auto",
      },
    }),

    height: "100%",
    marginBottom: "5%",
    marginTop: "5%",
    resizeMode: "cover",
  },
  content: {
    padding: 8,
    marginTop: "5%",
    marginHorizontal: "2%",
    width: 220,
    ...Platform.select({
      web: {
        width: "60%",
        marginTop: "1%",
      },
    }),
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    ...Platform.select({
      web: {
        fontSize: 21,
      },
    }),
  },
  text: {
    fontSize: 14,
    ...Platform.select({
      web: {
        fontSize: 18,
      },
    }),
    color: "#444",
  },
});

export default CustomCard;
