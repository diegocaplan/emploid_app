import React from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import { RadioButton } from "react-native-paper";

const Formulario = () => {
  return (
    <Formik
      initialValues={{ option: "", number: "", text: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => (
        <View>
          <View style={styles.container}>
            <Text style={styles.title}>¿Qué objetivo tienes?</Text>
            <RadioButton.Group
              onValueChange={(value) => setFieldValue("option", value)}
              value={values.option}
            >
              <View style={styles.option}>
                <Text style={styles.optionLabel}>
                  Busco mi primer empleo {"\n"} en IT
                </Text>
                <View style={{ marginHorizontal: "20%" }}>
                  <RadioButton value="primera" />
                </View>
              </View>
              <View style={styles.option}>
                <Text style={styles.optionLabel}>
                  Busco un cambio laboral {"\n"}dentro de IT
                </Text>
                <View style={{ marginHorizontal: "19%" }}>
                  <RadioButton value="segunda" />
                </View>
              </View>
              <View style={styles.option}>
                <Text style={styles.optionLabel}>
                  Quiero trabajar por cuenta propia
                </Text>
                <View style={{ marginHorizontal: "15%" }}>
                  <RadioButton value="tercera" />
                </View>
              </View>
            </RadioButton.Group>
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                ¿Cuántos CVs enviaste en la última semana?
              </Text>
              <TextInput
                style={[{ height: 50 }, styles.input]}
                onChangeText={handleChange("number")}
                onBlur={handleBlur("number")}
                value={values.number}
                keyboardType="numeric"
              />

              {errors.number && touched.number ? (
                <Text style={styles.errorText}>{errors.number}</Text>
              ) : null}
            </View>
            <Text style={styles.title}>Déjanos feedback:</Text>
            <TextInput
              style={[{ height: 90 }, styles.input]}
              onChangeText={handleChange("text")}
              onBlur={handleBlur("text")}
              value={values.text}
            />
            {errors.text && touched.text ? (
              <Text style={styles.errorText}>{errors.text}</Text>
            ) : null}
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}> Analizar resultados</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
    width: "80%",
    marginBottom: 4,
  },
  optionLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  groupContainer: {},
  input: {
    marginVertical: 10,
    width: "100%",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    color: "black",
    elevation: 1,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  container: {
    margin: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  title: {
    color: "#e96363",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#fc8080",
    width: "80%",
    marginHorizontal: 30,
    height: "10%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
});

export default Formulario;
