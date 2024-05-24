import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screen/LoginScreen";
import FormScreen from "../Screen/Form";
import OnBoarding from "../Screen/OnBoarding";

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
     
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name='Form'
        component={FormScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack ;
