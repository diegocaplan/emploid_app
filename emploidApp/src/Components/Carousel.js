import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import Swiper from "react-native-swiper";
import imageJob from "../../assets/job.jpg";
import imageApp from "../../assets/Apps.jpg";
const Carousel = () => {
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
          <Text style={styles.text}>
            ¿Te imaginas recibiendo ofertas de empleo y teniendo entrevistas en
            esos roles que tanto te interesan?
          </Text>
        </View>
        <View style={styles.slide}>
          <Image source={imageApp} style={styles.imageApp} />
          <Text style={styles.text}>
            Somos el primer mentor virtual que te brinda las herramientas
            necesarias para que consigas empleo IT.{" "}
          </Text>
        </View>

        <View style={styles.slide}>
          <Text style={styles.text}>
            +800 TALENTOS INSERTADOS EN EL MUNDO IT.{" "}
          </Text>
          <Image source={imageJob} style={styles.image} />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: "18%",
    marginTop: "10%",
  },
  wrapper: {},
  slide: {
    flex: 1,
    marginTop: 5,
    alignItems: "center",
    backgroundColor: "white",
    width: "70%",
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
    width: "80%",
    height: 90,
    marginBottom: "15%",
    marginTop: "5%",
  },
  imageApp: {
    width: "70%",
    height: 90,
    marginBottom: "15%",
    marginTop: "5%",
  },
  text: {
    color: "black",
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "600",
  },
});

export default Carousel;
