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
    width: "100%",
    paddingLeft: 50,
  },
  iconsContainer: {
    justifyContent: "center",

    width: "90%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1e90ff",
    marginTop: 5,
  },

  icon: {
    flex: 1,
    padding: 20,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    alignItems: "center",
  },
});

export default ProfileScreen;
