import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const CustomCard = ({ title, iconName, onPress }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.cardIcon}>
         
          <Text style={styles.title}>{title}</Text>
          <AntDesign
            name={iconName}
            size={30}
            color="black"
            style={styles.icon}
          />
        </View>

        <View style={styles.content}></View>
      </TouchableOpacity>
    </View>
  );
};

const HomeCard = () => {
  const navigation = useNavigation();

  return (
  <ScrollView>
      <View style={styles.row}>
        <CustomCard
          title="DESAFÍO DIARIO"
          iconName="pluscircle"
          onPress={() => navigation.navigate("TaskList")}
        />
      </View>
      <View style={styles.row}>
        <CustomCard
          title="MI PROGRESO"
          iconName="check"
          onPress={() => handleNavigation("MyProgress")}
        />
      </View>
      <View style={styles.row}>
        <CustomCard
          title="VER PLANES"
          iconName="shoppingcart"
          onPress={() => navigation.navigate("SubscriptionPlans")}
        />
      </View>
      </ScrollView>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,

    borderRadius: 8,

    borderColor: "black",
    borderWidth: 0.5,
    overflow: "hidden",
    margin: 10,

    backgroundColor: "#F8F9F9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    height: "110%",
    width: "100%",
  },
  cardIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 25,
  },
  icon: {
    marginLeft: "auto",
    color: "#1a1a1a",
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 10,
    color: "#8c8c8c",
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "5%",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeCard;
