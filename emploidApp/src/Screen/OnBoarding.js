import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
const { width: screenWidth } = Dimensions.get("window");

const OnBoarding = () => {
  const navigation = useNavigation();
  const carouselItems = [
    {
      id: "1",
      image: require("../../assets/marca_personal.png"),
      title: "Construye una marca personal fuerte en LinkedIn. ",
      description:
        "Nuestra app te guiará a través de ejercicios diarios para que puedas crear un perfil de LinkedIn atractivo y profesional.",
    },
    {
      id: "2",
      image: require("../../assets/entrevistas.png"),
      title: "Networking Efectivo",
      description:
        "Conecta con las personas adecuadas y accede a las mejores oportunidades.",
    },
    {
      id: "3",
      image: require("../../assets/networking.png"),
      title: "Preparación para Entrevistas",
      description:
        "Destaca en cada entrevista y consigue la oferta. Entrénate en las habilidades necesarias para destacar.",
    },
    {
      id: "",
      image: require("../../assets/marca_personal.png"),
      title: "Metas Diarias Claras",
      description:
        " Pequeños pasos que te llevarán al éxito. Sabemos que el proceso puede ser abrumador, por eso  con nuestra app tendrás acceso a todo lo necesario para alcanzar la meta",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View>
        <Text style={styles.itemTitle}> {item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <LinearGradient colors={["#f35999", "#c30752"]} style={styles.gradient}>
      <View style={styles.container}>
        <FlatList
          data={carouselItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={screenWidth * 0.4}
        />
      </View>

      <TouchableOpacity onPress={navigateToLogin} style={styles.roundButton}>
        <Icon name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: screenWidth * 0.3,
    marginLeft: 22,
  },
  gradient: {
    flex: 1,
  },
  itemContainer: {
    marginTop: screenWidth * 0.2,
    borderRadius: 10,
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    marginHorizontal: 9,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    textAlign: "center",
  },
  itemImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: screenWidth * 0.1, 
  },
  itemDescription: {
    fontSize: 18,
    textAlign: "center",
    color: "black",
    fontStyle: "italic",
    textAlign: "justify",
  },
  roundButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    width: 65,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#c30752",
    fontWeight: "bold",
  },
});

export default OnBoarding;
