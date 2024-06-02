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
import Icon from 'react-native-vector-icons/Ionicons';
import CustomHeader from "./CustomHeader";
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get("window");


const PlanCard = ({ title, description, price, onSubscribe }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}/mes</Text>
      <TouchableOpacity style={styles.button} onPress={onSubscribe}>
        <Text style={styles.buttonText}>Suscribirme</Text>
      </TouchableOpacity>
    </View>
  );
};

const SubscriptionPlans = () => {
  const navigation = useNavigation();
  const plans = [
    {
      id: "1",
      title: "Plan Free",
      description: "Basic plan description",
      price: 0.0,
    },
    {
      id: "2",
      title: "Plan Basic",
      description:
        "Acceso a nuestra APP, Discord y desafíos diarios.\nSIN acompañamiento de mentores",
      price: 9.99,
    },
    {
      id: "3",
      title: "Premium Plan (recomendado)",
      description:
        "Acceso a nuestra APP, Discord, Desafíos diarios CON seguimiento. \nWorkshops semanales. \nACOMPAÑAMIENTO PERSONALIZADO",
      price: 14.99,
    },
  ];

  const handleSubscribe = (plan) => {
    Alert.alert(
      "Felicitaciones!",
      `Acabas de suscribirte a nuestro ${plan.title}`
    );

    console.log(`User subscribed to: ${plan.title}`);
  };

  return (
    <>
      <CustomHeader />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>
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
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  header:{
    flexDirection: 'row',
alignItems: 'center',
padding: 10,
backgroundColor: '#f8f8f8',

  },
  card: {
    padding: 20,
    margin: 10,
    marginTop: "5%",
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
    backgroundColor: "#808080",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    ...Platform.select({
      web: {
        backgroundColor: "#d6d6c2",
      },
    }),
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SubscriptionPlans;
