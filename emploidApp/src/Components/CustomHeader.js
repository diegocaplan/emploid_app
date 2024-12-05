import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity,Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import logo from "../../assets/logoId.png";

const CustomHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isNotHome = route.name !== 'Root';
  return (
    <View style={styles.header}>
        {Platform.OS === 'web'  && isNotHome && (
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('Root')}>
          <MaterialIcons
              name="home"
              color={"#c30752"}
              size={30}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('Formulario')}>
          <Entypo
              name="new-message"
              size={23}
              color={"#c30752"}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={()=> navigation.navigate('Profile')}>
          <MaterialIcons
              name="person"
              color={"#c30752"}
              size={30}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.element}>
        <Image source={logo} style={styles.image} />

      </View>
    
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ff7c4d",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1, 
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderBottomLeftRadius:65,
    borderBottomRightRadius:65
  },
  iconContainer: {
    position: 'fixed',
    right: 0,
   
  marginHorizontal:5,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999, 
  },
  icon: {
    marginHorizontal: 5, 
  },
  element: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    justifyContent: "center",
  },
  image: {
    width: 85,
    height: 85,
    resizeMode: "contain",
    marginTop: '-10%',
  },
});
export default CustomHeader;
