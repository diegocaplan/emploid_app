import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
import Swiper from "react-native-swiper";
import imageJob from "../../assets/job.jpg";
import imageApp from "../../assets/Apps.jpg";

const Carousel = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotColor="#f35999"
        autoplay={true}
        autoplayTimeout={6}
      >
        <View style={styles.slide1}>
          <Image source={imageJob} style={styles.image} />
          <Text style={styles.text}>
            ¿Te imaginas recibiendo ofertas de empleo y teniendo entrevistas en
            esos roles que tanto te interesan?
          </Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.smallText}>
            Somos el primer mentor virtual que te brinda las herramientas
            necesarias para que consigas empleo IT.{" "}
          </Text>
        </View>

        <View style={styles.slide}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SubscriptionPlans")}
          >
            <Text style={[styles.smallText, { color: "#f35999" }]}>
              "¿Querés lograr tus objetivos profesionales? Conoce nuestros
              planes aquí".
            </Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: "8%",
    marginTop: width * 0.1,
  },
  wrapper: {},
  slide: {
    flex: 1,
    marginTop: 5,
    marginLeft: 20,
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    padding: 8,
    marginBottom: "15%",
  },
  slide1: {
    flex: 1,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    padding: 8,
    marginBottom: "15%",
  },
  image: {
    width: 190,
    height: 190,
    marginBottom: "5%",
    marginTop: "5%",
  },
  imageApp: {
    width: 150,
    height: 150,
    marginBottom: "5%",
    marginTop: "5%",
  },
  text: {
    color: "black",
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "400",
    width: "50%",
  },
  smallText: {
    color: "black",
    fontSize: 18, // Ajusta el tamaño del texto
    fontStyle: "italic",
    fontWeight: "400",
    marginLeft: 20, // Añade un margen para separar el texto de la imagen
  },
});

export default Carousel;
