import React from 'react'
import { View, Text,StyleSheet } from "react-native";
import SubscriptionPlans from "../Components/PlanCard";
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
    
    <SubscriptionPlans/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
          backgroundColor: '#fae3ea',
    }
    })
export default ProfileScreen