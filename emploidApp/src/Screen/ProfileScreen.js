import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import CustomHeader from "../Components/CustomHeader";

const ProfileScreen = () => {
  return (
    <>
      <CustomHeader />
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/33.jpg")}
            style={styles.avatar}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <View style={styles.iconsContainer}>
            <View style={styles.icon}>
              <Text style={styles.label}> NOMBRE</Text>
              <Text style={styles.profession}>Lucia</Text>
            </View>
            <View style={styles.icon}>
              <Text style={styles.label}> JOB</Text>
              <Text style={styles.profession}>Mobil Developer</Text>
            </View>
            <View style={styles.icon}>
              <Text style={styles.label}> LINKEDIN</Text>
              <Text style={styles.profession}>Lucostamagna</Text>
            </View>
            <View style={styles.icon}>
              <Text style={styles.label}> DISCORD</Text>
              <Text style={styles.profession}>Lucostamagna</Text>
            </View>
            <View style={styles.icon}>
              <Text style={styles.label}> PLAN ACTIVO</Text>
              <Text style={styles.profession}>Basic Plan</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: "15%",
    backgroundColor: "#F8F9F9",
    width: "100%",
    height: "30%",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 70,
    marginRight: 20,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfo: {
    justifyContent: "center",
    marginBottom: 20,
    marginTop: "5%",
    alignItems: "center",
    backgroundColor: "red",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profession: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
  },
  scrollView: {
    width: "97%",
   
  },
  iconsContainer: {
    justifyContent: "center",
    
    borderColor: "black",
    borderWidth: 0.5,
    width: "100%",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },
  name: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1e90ff",
    marginTop: 5,
  },

  icon: {
    height:'19%',
    padding: 20,
    margin: 3,
    backgroundColor: "#fff",
    borderRadius:3,
    borderColor: "black",
    borderWidth: 0.2,
    alignItems: "center",
  },
});

export default ProfileScreen;
