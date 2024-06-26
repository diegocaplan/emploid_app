import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/LoginScreen";
import FormScreen from "../Screen/Form";
import OnBoarding from "../Screen/OnBoarding";
import HomeScreen from "../Screen/HomeScreen";
import MyTabs from "./TabNavigator";
import ProfileScreen from "../Screen/ProfileScreen";

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator   screenOptions={{ headerShown: false }}>
      
     <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={MyTabs} />
      <Stack.Screen name="Root" component={HomeScreen} screenOptions={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} screenOptions={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MyStack ;
