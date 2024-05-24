import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import FormScreen from "../Screen/Form";
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          left: 0,
          right: 0,
          backgroundColor: "#f35999",
          borderTopColor: "white",
          borderTopWidth: 2,
          paddingTop: 8,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarActiveTintColor: "#FFDE59",
        tabBarPressColor: "rgba(243, 48, 95, 0.7)",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="home" color={"black"} size={35} />
          ),
        }}
      />

      <Tab.Screen
        name="Form"
        component={FormScreen}
        options={{
          tabBarIcon: () => (
            <Entypo name="new-message" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="person" color={"black"} size={35} />
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
