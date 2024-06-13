import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import LoginScreen from "../Screen/LoginScreen";
import FormScreen from "../Screen/Form";
import OnBoarding from "../Screen/OnBoarding";
import HomeScreen from "../Screen/HomeScreen";
import MyTabs from "./TabNavigator";
import ProfileScreen from "../Screen/ProfileScreen";
import SubscriptionPlans from "../Components/PlanCard";
import TaskList from "../Components/TaskList";
import MyProgress from "../Components/MyProgress";

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Platform.OS !== "web" && (
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />
      )}
      <Stack.Screen name="Login" component={LoginScreen} />

     

      {Platform.OS !== "web" && 
      <Stack.Screen name="Home" component={MyTabs} />}
     
      <Stack.Screen
        name="Root"
        component={HomeScreen}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name="Formulario"
        component={FormScreen}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        screenOptions={{ headerShown: false }}
      />
      <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} />
      <Stack.Screen name="TaskList" component={TaskList} />
      <Stack.Screen name="MyProgress" component={MyProgress} />
     
    </Stack.Navigator>
  );
};

export default MyStack;
