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
          height: 75,
          left: 0,
          right: 0,
          backgroundColor: "#f2f2f2",
          ...Platform.select({
            web: {
             backgroundColor:'#bfbfbf' 
            }
          }),
          borderTopWidth: 0.5,
          borderColor:'#ff4500',
          paddingTop: 8,
          borderTopLeftRadius: 19,
          borderTopRightRadius: 19,
        },
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarActiveTintColor: "white",
        tabBarPressColor: "rgba(243, 48, 95, 0.7)",
        tabBarShowLabel: false,
        keyboardHidesTabBar: false,
      }}
    >
      <Tab.Screen
        name="Root"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="home"
              color={focused ? "#ff4500" : "#707B7C"}
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
              color={focused ? "#ff4500" : "#707B7C"}
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
              color={focused ? "#ff4500" : "#707B7C"}
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
    ...Platform.select({
      web: {
       backgroundColor:'#d6d6c2' 
      }
    }),
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
