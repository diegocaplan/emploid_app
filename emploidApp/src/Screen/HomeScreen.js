import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeader from "../Components/CustomHeader";
import SubscriptionPlans from "../Components/PlanCard";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <View>
        <Text> Hola, Lucia!</Text>
      </View>
    </View>
  );
};
{/* <View style={styles.container}>
<View style={styles.row}>
  <TouchableOpacity style={styles.card} onPress={() => alert('Ir a Pantalla A')}>
    <Text style={styles.cardText}>Ir a Pantalla A</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.card} onPress={() => alert('Ir a Pantalla B')}>
    <Text style={styles.cardText}>Ir a Pantalla B</Text>
  </TouchableOpacity>
</View>
<View style={styles.row}>
  <TouchableOpacity style={styles.card} onPress={() => alert('Ir a Pantalla C')}>
    <Text style={styles.cardText}>Ir a Pantalla C</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.card} onPress={() => alert('Ir a Pantalla D')}>
    <Text style={styles.cardText}>Ir a Pantalla D</Text>
  </TouchableOpacity>
</View>
</View> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fae3ea",
  },
});
export default HomeScreen;
