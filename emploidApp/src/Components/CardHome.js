
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';

const CardHome = () => {
  return (
    <View style={styles.centeredContainer}>
      <View style={styles.cardContainer}>
        <Animatable.View animation="flash" delay={500} style={styles.card}>
          <Text style={styles.cardTitle}>
            MÁS DE 800 TALENTOS INSERTADOS EN EL MUNDO IT
          </Text>
        </Animatable.View>
        <Animatable.View animation="flash" delay={500}style={styles.card}>
          <Text style={styles.cardTitle}>SOMOS EL PRIMER MENTOR VIRTUAL DISPUESTO A AYUDARTE</Text>
        </Animatable.View>
        <Animatable.View animation="flash" delay={500} style={styles.card}>
          <Text style={styles.cardTitle}>
            TE AYUDAMOS A CONSEGUIR ESE EMPLEO QUE TANTO ESPERAS
          </Text>
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#f9f9eb",
    borderRadius: 10,
    padding: 15,
    width: "20%",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6.27,
    elevation: 10,
    borderColor: "black",
    borderWidth: 1,
    transition: "transform 0.3s",
    ...(Platform.OS === 'web' && {
      ':hover': {
        transform: "scale(1.05)",
      }
    }),
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 10,
    fontStyle: "italic",
    textAlign: "justify",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4%",
  },
});

export default CardHome;
