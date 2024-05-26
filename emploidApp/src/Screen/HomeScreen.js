import React from "react";
import { View, Text,StyleSheet } from "react-native";
import CustomHeader from "../Components/CustomHeader";
import SubscriptionPlans from "../Components/PlanCard";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    
   
      <Text> home</Text>
      <SubscriptionPlans/>
    </View>
  );
};


const styles = StyleSheet.create({
container:{
    flex:1,
      backgroundColor: '#fae3ea',
}
})
export default HomeScreen;
