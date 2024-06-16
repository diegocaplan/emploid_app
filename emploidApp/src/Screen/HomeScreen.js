import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  ScrollView,
 
} from "react-native";
import CustomHeader from "../Components/CustomHeader";
import SubscriptionPlans from "../Components/PlanCard";
import CustomCard from "../Components/CustomCard";
import HomeCard from "../Components/HomeCard";
import Carousel from "../Components/Carousel";
import CardHome from "../Components/CardHome";
const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View style={styles.web}>
        <CustomCard
          title="Bienvenido!"
          text="En las próximas 48 hs deberás completar un nuevo Formulario"
          
        />
      </View>

      {Platform.OS === "web" && <CardHome/>}

      <View style={{flex:1}}>
      {Platform.OS !== "web" && <Carousel />}
      </View>
      {Platform.OS === 'web' ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.viewHome}>
            <HomeCard />
          </View>
        </ScrollView>
      ) : (
        <View style={styles.viewHome}>
          <HomeCard />
        </View>
      )}
  
    </View>
  );
};

const styles = StyleSheet.create({

  viewHome: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        flex: 1,
      },
      web: {
        height: height > 1024 ? "160%" : width > 768 ? "60%" : "70%",
        width: width > 1024 ? "60%" : width > 768 ? "60%" : "70%",
        marginTop: "1%",
        marginHorizontal: width > 1024 ? "20%" : width > 768 ? "30%" : "15%",
       
     
      },
    }),
  },
  web: {
   
    ...Platform.select({
      web: {
        marginTop: "-6%",
       
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
        flex: 1,
        marginBottom:'50%'
       
      },
    }),

    backgroundColor: "#ffffff",
   
  },
});
export default HomeScreen;
