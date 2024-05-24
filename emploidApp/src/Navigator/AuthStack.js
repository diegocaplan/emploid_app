import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoarding from "../Screen/OnBoarding";
import LoginScreen from "../Screen/LoginScreen";

const AuthStack = createStackNavigator();

export default function AuthNavigation() {
  return (
  
      <AuthStack.Navigator>
        <AuthStack.Screen name="onBoarding" component={OnBoarding} options={{ headerShown: false }}/>
        <AuthStack.Screen  name="Login"
        component={LoginScreen} options={{ headerShown: false }}/>
      </AuthStack.Navigator>
   
  );
}
