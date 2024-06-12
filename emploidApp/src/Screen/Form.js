import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import Formulario from "../Components/Picker";
import { ScrollView } from "react-native-gesture-handler";
import CustomHeader from "../Components/CustomHeader";

const { width, height } = Dimensions.get("window");
const FormScreen = () => {
  return (
   <>
      <CustomHeader />
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.title}>
            Analicemos tu estado de búsqueda laboral
          </Text>
          <View style={{ marginTop: "5%" }}>
            <Text style={styles.heading}>
              ¿Por qué completar el formulario?
            </Text>
            <View style={{ width: "94%" }}>
              <Text style={styles.normalText}>
                {" "}
                Esta información nos ayuda entender tus objetivos y tu progreso
                en la búsqueda de nuevas oportunidades. Son métricas para
                analizar tus avances y poder realizar un seguimiento.
              </Text>
            </View>

            <Formulario />
         
          </View>
        </View>
        </ScrollView>
      </View>
      </>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        flex: 1,
      },
      web: {
        height: height > 1024 ? "30%" : width > 768 ? "40%" : "70%" ,
        width: width > 1024 ? "60%" : width > 768 ? "60%" : "70%",
        height: height >= 600 ? '40%' : width > 768 ? "60%" : "70%",
        marginTop: "2%",
      
        marginHorizontal: width > 1024 ? "20%" : width > 768 ? "30%" : "15%",
      },
    }),
    backgroundColor: "#fae3ea",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 27,
    textAlign: "center",
    marginTop: "13%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: "2%",
    marginHorizontal: 5,
  },
  normalText: {
    fontStyle: "italic",
    textAlign: "justify",
    fontSize: 17,
  },
  card: {
    backgroundColor: "#FBF9F9",
    borderRadius: 10,
    padding: 20,
    width: "92%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 30,
  },
});
export default FormScreen;
