import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import CustomHeader from "./CustomHeader";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const PlanCard = ({ title, description, price, onSubscribe }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}/mes</Text>
      {price !== 0 && (
        <TouchableOpacity style={styles.button} onPress={onSubscribe}>
          <Text style={styles.buttonText}>Suscribirme</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const SubscriptionPlans = () => {
  const navigation = useNavigation();
  const plans = [
    {
      id: "1",
      title: "Plan Free",
      description:
        "Acceso a la comunidad en Discord. \nSIN desafíos diarios. \n\nSIN acompañamiento de mentores",
      price: 0.0,
    },
    {
      id: "2",
      title: "Plan Basic",
      description:
        "Acceso a nuestra APP, Discord y desafíos diarios.\n\nSIN acompañamiento de mentores",
      price: 9.99,
    },
    {
      id: "3",
      title: "Premium Plan (recomendado)",
      description:
        "Acceso a nuestra APP, Discord, Desafíos diarios CON seguimiento. \nWorkshops semanales. \n\nACOMPAÑAMIENTO PERSONALIZADO",
      price: 14.99,
    },
  ];

  const handleSubscribe = (plan) => {
    Alert.alert(
      "Felicitaciones!",
      `Acabas de suscribirte a nuestro ${plan.title}`
    );

    console.log(`el usuario se suscribio a: ${plan.title}`);
  };

  return (
    <>
      <CustomHeader />
    
      <View style={styles.container}>
        <FlatList
          data={plans}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <PlanCard
              title={item.title}
              description={item.description}
              price={item.price}
              onSubscribe={() => handleSubscribe(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        flex: 1,
        backgroundColor: "white",
      },
      android: {
        flex: 1,
        backgroundColor: "white",
      },
      web: {
        height: height > 1024 ? "30%" : width > 768 ? "65%" : "80%",
        width: width > 1024 ? "60%" : width > 768 ? "60%" : "70%",
        // height: height >= 600 ? '40%' : width > 768 ? "60%" : "70%",
marginTop:20,
        marginHorizontal: width > 1024 ? "20%" : width > 768 ? "30%" : "15%",
      },
    }),
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  card: {
    padding: 20,
    margin: 10,
    marginTop: "5%",
    borderWidth: 0.5,
    borderColor: "black",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    ...Platform.select({
      web: {
        width: width > 1024 ? "50%" : width > 768 ? "60%" : "70%",
        marginHorizontal: width > 1024 ? "25%" : width > 768 ? "30%" : "15%",
        marginTop: 0.5,
      },
    }),
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#c30752",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    ...Platform.select({
      web: {
        backgroundColor: "#c30752",
      },
    }),
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SubscriptionPlans;
