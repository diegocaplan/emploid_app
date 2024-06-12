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
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from "react-native-paper";

const Formulario = () => {
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{
        curriculumsSent: "",
        linkedInContacts: "",
        linkedInFollowers: "",
        searchAppearances: "",
        profileViews: "",
        virtualCoffees: "",
        scheduledInterviews: "",
        jobProposals: "",
        postImpressions: "",
        postsLastWeek: "",
      }}
      // initialValues={{ option: "", number: "", text: "" }}

      onSubmit={(values, { resetForm }) => {
        const isAnyFieldEmpty = Object.values(values).some(
          (value) => value === ""
        );

        if (isAnyFieldEmpty) {
          alert(
            "Por favor completa todos los campos antes de enviar el formulario."
          );
        } else {
          console.log(values);
          // Realiza cualquier acción necesaria con los valores del formulario aquí
          alert("Formulario enviado con éxito.");
          // Resetea el formulario
          resetForm();
          navigation.navigate('MyProgress');
        }
      }}
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
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                ¿Cuántos currículum has enviado la última semana
                aproximadamente?
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("curriculumsSent")}
                onBlur={handleBlur("curriculumsSent")}
                value={values.curriculumsSent}
                keyboardType="numeric"
              />
              {errors.curriculumsSent && touched.curriculumsSent ? (
                <Text style={styles.errorText}>{errors.curriculumsSent}</Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                Escribe cuántos contactos tienes en LinkedIn
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("linkedInContacts")}
                onBlur={handleBlur("linkedInContacts")}
                value={values.linkedInContacts}
                keyboardType="numeric"
              />
              {errors.linkedInContacts && touched.linkedInContacts ? (
                <Text style={styles.errorText}>{errors.linkedInContacts}</Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                Escribe cuántos seguidores tienes en LinkedIn
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("linkedInFollowers")}
                onBlur={handleBlur("linkedInFollowers")}
                value={values.linkedInFollowers}
                keyboardType="numeric"
              />
              {errors.linkedInFollowers && touched.linkedInFollowers ? (
                <Text style={styles.errorText}>{errors.linkedInFollowers}</Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                Escribe cuántas apariciones en búsquedas tienes en LinkedIn
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("searchAppearances")}
                onBlur={handleBlur("searchAppearances")}
                value={values.searchAppearances}
                keyboardType="numeric"
              />
              {errors.searchAppearances && touched.searchAppearances ? (
                <Text style={styles.errorText}>{errors.searchAppearances}</Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                Escribe cuántas visualizaciones de tu perfil tienes en LinkedIn
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("profileViews")}
                onBlur={handleBlur("profileViews")}
                value={values.profileViews}
                keyboardType="numeric"
              />
              {errors.profileViews && touched.profileViews ? (
                <Text style={styles.errorText}>{errors.profileViews}</Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                ¿Cuántos café virtuales has tomado esta última semana?
              </Text>
              <TextInput
                style={[{ height: 50 }, styles.input]}
                onChangeText={handleChange("virtualCoffees")}
                onBlur={handleBlur("virtualCoffees")}
                value={values.virtualCoffees}
                keyboardType="numeric"
              />
              {errors.virtualCoffees && touched.virtualCoffees ? (
                <Text style={styles.errorText}>{errors.virtualCoffees}</Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                ¿Cuántas entrevistas agendaste esta semana?
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("scheduledInterviews")}
                onBlur={handleBlur("scheduledInterviews")}
                value={values.scheduledInterviews}
                keyboardType="numeric"
              />
              {errors.scheduledInterviews && touched.scheduledInterviews ? (
                <Text style={styles.errorText}>
                  {errors.scheduledInterviews}
                </Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                ¿Cuántas propuestas laborales recibiste?
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("jobProposals")}
                onBlur={handleBlur("jobProposals")}
                value={values.jobProposals}
                keyboardType="numeric"
              />
              {errors.jobProposals && touched.jobProposals ? (
                <Text style={styles.errorText}>{errors.jobProposals}</Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                Escribe cuántas impresiones de publicaciones tienes en LinkedIn
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("postImpressions")}
                onBlur={handleBlur("postImpressions")}
                value={values.postImpressions}
                keyboardType="numeric"
              />
              {errors.postImpressions && touched.postImpressions ? (
                <Text style={styles.errorText}>{errors.postImpressions}</Text>
              ) : null}
            </View>
            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                Escribe cuántas publicaciones hiciste la última semana.
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("postsLastWeek")}
                onBlur={handleBlur("postsLastWeek")}
                value={values.postsLastWeek}
                keyboardType="numeric"
              />
              {errors.postsLastWeek && touched.postsLastWeek ? (
                <Text style={styles.errorText}>{errors.postsLastWeek}</Text>
              ) : null}
            </View>
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Guardar respuestas</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* <Text style={styles.title}>¿Qué objetivo tienes?</Text>
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
            ) : null} */}
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
    height: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,

    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,

    backgroundColor: "#fff",
    color: "#333",

    fontSize: 16,
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
    fontSize: 15,
    fontWeight: "400",
  },
  button: {
    backgroundColor: "#fc8080",
    width: "80%",
    marginHorizontal: 30,
    height: "4%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
});

export default Formulario;
