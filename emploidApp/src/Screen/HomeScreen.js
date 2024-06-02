import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
 
} from "react-native";
import CustomHeader from "../Components/CustomHeader";
import SubscriptionPlans from "../Components/PlanCard";
import CustomCard from "../Components/CustomCard";
import HomeCard from "../Components/HomeCard";
import Carousel from "../Components/Carousel";
const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.web}>
        <CustomCard
          title="Bienvenido, Lucia!"
          text="En las próximas 48 hs deberás completar un nuevo Formulario"
        />
      </View>
      {Platform.OS !== "web" && <Carousel />}
      <View style={styles.viewHome}>
        <HomeCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor:'red'
  },
  viewHome: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        flex: 1,
      },
      web: {
        height: height > 1024 ? "100%" : width > 768 ? "60%" : "70%",
        width: width > 1024 ? "60%" : width > 768 ? "60%" : "70%",
        marginTop: "8%",
        marginHorizontal: width > 1024 ? "20%" : width > 768 ? "30%" : "15%",
     
      },
    }),
  },
  web: {
    ...Platform.select({
      web: {
        marginTop: "-5%",
      },
    }),
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
        height: height > 1024 ? "80%" : width > 768 ? "60%" : "70%",
      },
    }),

    backgroundColor: "#ffffff",
   
  },
});
export default HomeScreen;
