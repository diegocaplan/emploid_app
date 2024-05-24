import React from "react";
import { View, Text,StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text> home</Text>
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
