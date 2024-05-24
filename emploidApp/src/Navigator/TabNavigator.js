import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import FormScreen from "../Screen/Form";
const Tab = createBottomTabNavigator();

export default function MyTabs({ focused }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          left: 0,
          right: 0,
          backgroundColor: "#f35999",

          borderTopWidth: 2,
          paddingTop: 8,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarActiveTintColor: "white",
        tabBarPressColor: "rgba(243, 48, 95, 0.7)",
        tabBarShowLabel: false,
        keyboardHidesTabBar: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="home"
              color={focused ? "white" : "#c30752"}
              size={35}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Form"
        component={FormScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Entypo
              name="new-message"
              size={24}
              color={focused ? "white" : "#c30752"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="person"
              color={focused ? "white" : "#c30752"}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#FCC5D2",
    borderTopColor: "red",
    borderTopWidth: 2,
    paddingTop: 8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  tabBarIcon: {
    marginBottom: -1,
  },
  tabBarLabel: {
    color: "black",
    fontSize: 12,
    marginBottom: 3,
  },
});
