import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import imageApp from "../../assets/Apps.jpg";
const CardHome = () => {
  return (
    <View style={styles.centeredContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            +800 TALENTOS INSERTADOS EN EL MUNDO IT
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>SOMOS EL PRIMER MENTOR VIRTUAL</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            TE AYUDAMOS A CONSEGUIR ESE EMPLEO QUE TANTO ESPERAS
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",

    justifyContent: "center",
  },
  imageApp: {
    width: "50%",
    height: 70,
    marginBottom: "15%",
    marginTop: "5%",
  },
  card: {
    backgroundColor: "#FBF9F9",
    borderRadius: 10,
    padding: 15,
    width: "15%",
    margin: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    elevation: 2,
    borderColor: "black",
    flexDirection: "row",

    borderWidth: 1,
    transition: "transform 0.3s",
    // Agregar efecto hover para la web

    ":hover": {
      transform: "scale(3.05)",
    },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 10,
    fontStyle: "italic",
    textAlign: "justify",
  },
  cardText: {
    fontSize: 16,
    textAlign: "justify",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4%",
  },
});
export default CardHome;
