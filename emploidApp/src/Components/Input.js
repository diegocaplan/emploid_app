import React from "react";
import { TextInput, View, StyleSheet, Platform, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const Input = ({ label, value, onChangeText, secureTextEntry, onBlur }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={label}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 16,
    height: 36,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "white",
    paddingHorizontal: width > 400 ? '5%' : '10%', 
    textAlign: "center",
    fontSize: Platform.OS === 'web' ? 18 : 16, 
  },
});

export default Input;
