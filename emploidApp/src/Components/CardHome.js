import React from "react";
import { View, Image, StyleSheet, Dimensions,Text} from "react-native";
import imageSource from "../../assets/empleo.png";
import imageSourcee from "../../assets/Apps.jpg";

const { width, height } = Dimensions.get("window");

const CardHome = () => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <Text style={styles.text}>  +800 TALENTOS INSERTADOS EN EL MUNDO IT. {"\n"}VOS PODÉS SER EL PRÓXIMO</Text>
      <Image source={imageSourcee} style={styles.image} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '30vh',  
    width: '70%',   
    flexDirection: 'row',
    justifyContent: 'center',  
    alignItems: 'center',
    paddingVertical: '20px', 
    marginLeft: '12%', 
  },
  image: {
    width: width * 0.3,
    height: height * 0.2, 
    marginHorizontal: 10, 
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default CardHome;

