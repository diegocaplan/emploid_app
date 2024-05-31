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

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator   screenOptions={{ headerShown: false }}>
     {/* {Platform.OS !== "web" && (
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />
      )}
     <Stack.Screen name="Login" component={LoginScreen} />


         {Platform.OS !== "web" && (
        <Stack.Screen
          name="Home"
          component={MyTabs}
         
        />
      )} */}
{Platform.OS !== "web" && (
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />
      )}

         {Platform.OS !== "web" && (
        <Stack.Screen
          name="Home"
          component={MyTabs}
         
        />
      )} 
      <Stack.Screen name="Root" component={HomeScreen} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} />
    </Stack.Navigator>
  );
};

export default MyStack ;
