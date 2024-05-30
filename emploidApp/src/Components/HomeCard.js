import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";
const CustomCard = ({ title, onPress, iconName }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardIcon}>
        <AntDesign
          name={iconName}
          size={30}
          color="black"
          style={styles.icon}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      {/* <Image source={imageSource} style={styles.image} /> */}
      <View style={styles.content}>
        {/* <Button title="Navegar" onPress={onPress} /> */}
      </View>
    </View>
  );
};

const HomeCard = () => {
  const navigation = useNavigation();

  const handleNavigation = (destination) => {
    navigation.navigate(destination);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.row}>
        <CustomCard
          title="Tarjeta 1"
          iconName="home"
          onPress={() => handleNavigation("Screen1")}
        />
        <CustomCard
          title="Tarjeta 2"
          iconName="home"
          onPress={() => handleNavigation("Screen2")}
        />
      </View>
      <View style={styles.row}>
        <CustomCard
          title="Tarjeta 3"
          iconName="form"
          onPress={() => handleNavigation("Screen3")}
        />
        <CustomCard
          title="Tarjeta 4"
          iconName="form"
          onPress={() => handleNavigation("Screen4")}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
   
    borderRadius: 8,
    
    borderColor: "#ddd",
    borderWidth: 1,
    overflow: "hidden",
    margin: 10,
    backgroundColor: "#f2f2f2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    height: "140%",
  },
  cardIcon: {
    flexDirection: "row",
    marginTop: 30,
    margin: 15,
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "15%",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeCard;
