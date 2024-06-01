import React from "react";
import { View, Text, StyleSheet, Platform,Dimensions } from "react-native";
import CustomHeader from "../Components/CustomHeader";
import SubscriptionPlans from "../Components/PlanCard";
import CustomCard from "../Components/CustomCard";
import HomeCard from "../Components/HomeCard";
import Carousel from "../Components/Carousel";
const { width,height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View>
        <CustomCard
          title="Bienvenido, Lucia!"
          text="En las próximas 48 hs deberás completar un nuevo Formulario"
        />
      </View>
<Carousel/>
      <View style={{ flex: 1 }}>
        <HomeCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    ...Platform.select({
      web: {
        backgroundColor: "white",
      },
    }),
  },
});
export default HomeScreen;
