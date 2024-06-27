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
        option: "",
        curriculumsSent: "",
        linkedInContacts: "",
        linkedInFollowers: "",
        searchAppearances: "",
        profileViews: "",
        publication: "",
        publicationDo: "",
        virtualCoffees: "",
        scheduledInterviews: "",
        interviewProccess: "",
        jobProposals: "",
        textRecomendation: "",
      }}
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
          navigation.navigate("MyProgress");
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
              <View style={{ marginBottom: 4, marginTop: 5 }}>
                <Text style={styles.title}>
                  ¿Ya has mejorado tu perfil de LinkedIn y tu CV?
                </Text>
                <RadioButton.Group
                  onValueChange={(value) => setFieldValue("option", value)}
                  value={values.option}
                >
                  <View style={styles.option}>
                    <Text style={styles.optionLabel}>SI</Text>
                    <View style={{ marginHorizontal: "20%" }}>
                      <RadioButton value="si" />
                    </View>
                  </View>
                  <View style={styles.option}>
                    <Text style={styles.optionLabel}>NO</Text>
                    <View style={{ marginHorizontal: "19%" }}>
                      <RadioButton value="no" />
                    </View>
                  </View>
                </RadioButton.Group>
                {errors.curriculumsSent && touched.curriculumsSent ? (
                  <Text style={styles.errorText}>{errors.curriculumsSent}</Text>
                ) : null}
              </View>
              <Text style={styles.title}>
                ¿Cuántos CV enviaste esta última semana?
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
                ¿Cuántos contactos tienes en LinkedIn?
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
                ¿Cuántos seguidores tienes en LinkedIn?
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
                ¿Cuántas de apariciones en búsquedas de LinkedIn figuran?
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
                ¿Cuántas visualizaciones del perfil de LinkedIn figuran?
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
                ¿Cuántas impresiones de publicaciones en LinkedIn figuran?
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("publication")}
                onBlur={handleBlur("publication")}
                value={values.publication}
                keyboardType="numeric"
              />
              {errors.publication && touched.publication ? (
                <Text style={styles.errorText}>{errors.publication}</Text>
              ) : null}
            </View>

            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                ¿Cuántas publicaciones propias has realizado en la última
                semana?
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("publicationDo")}
                onBlur={handleBlur("publicationDo")}
                value={values.publicationDo}
                keyboardType="numeric"
              />
              {errors.publicationDo && touched.publicationDo ? (
                <Text style={styles.errorText}>{errors.publicationDo}</Text>
              ) : null}
            </View>

            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                ¿Cuántos cafés virtuales has tomado en la última semana?
                (Charlas en vivo con nuevos contactos)
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
                ¿En cuántas entrevistas participaste en esta última semana?
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
                ¿Has avanzado en algún proceso de selección en esta última
                semana?
              </Text>



              <RadioButton.Group
                  onValueChange={(value) => setFieldValue("interviewProccess", value)}
                  value={values.interviewProccess}
                >
                  <View style={styles.option}>
                    <Text style={styles.optionLabel}>SI</Text>
                    <View style={{ marginHorizontal: "20%" }}>
                      <RadioButton value="si" />
                    </View>
                  </View>
                  <View style={styles.option}>
                    <Text style={styles.optionLabel}>NO</Text>
                    <View style={{ marginHorizontal: "19%" }}>
                      <RadioButton value="no" />
                    </View>
                  </View>
                </RadioButton.Group>
            
              {errors.interviewProccess && touched.interviewProccess ? (
                <Text style={styles.errorText}>{errors.interviewProccess}</Text>
              ) : null}
            </View>

            <View style={{ marginBottom: 4, marginTop: 5 }}>
              <Text style={styles.title}>
                ¿Cuántas propuestas laborales has recibido esta última semana?
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

            <Text style={styles.title}>
              Comentarios y consultas para mentores
            </Text>
            <TextInput
              style={[{ height: 90 }, styles.input]}
              onChangeText={handleChange("textRecomendation")}
              onBlur={handleBlur("textRecomendation")}
              value={values.textRecomendation}
            />
            {errors.textRecomendation && touched.textRecomendation? (
              <Text style={styles.errorText}>{errors.textRecomendation}</Text>
            ) : null}
            {/* <View style={{ marginBottom: 4, marginTop: 5 }}>
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
            </View> */}
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Guardar respuestas</Text>
          </TouchableOpacity>
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
