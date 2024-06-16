import React, { useContext, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import { AuthContext } from "../Context/AuthContext";
import Icon from "react-native-vector-icons/MaterialIcons";
import CustomHeader from "../Components/CustomHeader";

const { width, height } = Dimensions.get("window");

const ProfileScreen = () => {
  const {logout}= useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState({
    name: "",
    job: "",
    linkedin: "",
    discord: "",
    plan: "",
  });

  const handleSave = async () => {
    // console.log(handleSave)
    // setIsLoading(true);
    // try {
    //   const response = await axios.post(
    //     "https://your-backend-url.com/api/profile",
    //     profileData,
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   if (response.status !== 200) {
    //     throw new Error("Error en actualizar la información");
    //   }
    //   alert("Cambios guardados con éxito");
    //   setProfileData(response.data);
    //   console.log(response.data)
    // } catch (error) {
    //   console.error("error de guardado", error);
    //   alert("Error al actualizar la información");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <>
      <CustomHeader />
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../assets/no_user.png")}
            style={styles.avatar}
          />
        </View>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>NOMBRE</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={profileData.name}
                  onChangeText={(text) =>
                    setProfileData({ ...profileData, name: text })
                  }
                  placeholder="Ingresa tu nombre"
                  placeholderTextColor="#666"
                />
                <Icon name="edit" size={20} color="#333" style={styles.icon} />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>JOB</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={profileData.job}
                  onChangeText={(text) =>
                    setProfileData({ ...profileData, job: text })
                  }
                  placeholder="Ingresa tu profesión"
                  placeholderTextColor="#666"
                />
                <Icon name="edit" size={20} color="#333" style={styles.icon} />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>LINKEDIN</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={profileData.linkedin}
                  onChangeText={(text) =>
                    setProfileData({ ...profileData, linkedin: text })
                  }
                  placeholder="Ingresa tu usuario de LinkedIn"
                  placeholderTextColor="#666"
                />
                <Icon name="edit" size={20} color="#333" style={styles.icon} />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>DISCORD</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={profileData.discord}
                  onChangeText={(text) =>
                    setProfileData({ ...profileData, discord: text })
                  }
                  placeholder="Ingresa tu usuario de Discord"
                  placeholderTextColor="#666"
                />
                <Icon name="edit" size={20} color="#333" style={styles.icon} />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>PLAN ACTIVO</Text>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={styles.input}
                  value={profileData.plan}
                  onChangeText={(text) =>
                    setProfileData({ ...profileData, plan: text })
                  }
                  placeholder=""
                  placeholderTextColor="#666"
                />
                <Icon name="edit" size={20} color="#333" style={styles.icon} />
              </View>
            </View>
            <TouchableOpacity style={styles.buttonOut}  onPress={logout}>
              <Text style={styles.textOut}>Cerrar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Actualizar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
      android: {
        flex: 1,
      },
      web: {
        height: height > 1024 ? "100%" : width > 768 ? "60%" : "70%",
        width: width > 1024 ? "60%" : width > 768 ? "60%" : "70%",
        marginTop: "2%",
        marginHorizontal: width > 1024 ? "20%" : width > 768 ? "30%" : "15%",
      },
    }),
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: "10%",
    backgroundColor: "#f2f2f2",
    ...Platform.select({
      web: {
        backgroundColor: "#fff4e6",
      },
    }),
    width: "100%",
    height: "30%",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  scrollView: {
    width: "100%",
  },
  form: {
    padding: 20,
    backgroundColor: "#fff",

    elevation: 3,
    ...Platform.select({
      web: {
        height: "90vh",
        maxHeight: "100%",
      },
    }),
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "transparent",
    color: "#333",
  },
  icon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#FCC5D2",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    ...Platform.select({
      web: {
        backgroundColor: "#FCC5D2",
        padding: 5,
        width: "30vh",

        alignSelf: "center",
      },
    }),
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonOut: {
    marginBottom: "10%",
  },
  textOut: {
    color: "red",
    fontSize: 15,
  },
});

export default ProfileScreen;
