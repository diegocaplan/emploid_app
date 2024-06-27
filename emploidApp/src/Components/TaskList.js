import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
  Dimensions,
  AsyncStorage
} from "react-native";
import CustomHeader from "./CustomHeader";
import { AntDesign } from "@expo/vector-icons";
import dailyContent from '../../Api/DailyContext.json';
import axios from "axios";

const { width, height } = Dimensions.get("window");

const TaskList = () => {
  const initialTasks = dailyContent.dailyContent.tasks;
  const initialTips = dailyContent.dailyContent.tips;
  const [tasks, setTasks] = useState([]);
  const [tips, setTips] = useState([]);
  const [allTasksCompleted, setAllTasksCompleted] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date(dailyContent.dailyContent.lastUpdate));
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    loadContent();
  }, []);

  useEffect(() => {
    checkAllTasksCompleted();
    if (lastUpdate) {
      startCountdown();
    }
  }, [tasks, lastUpdate]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timeLeft <= 0) {
        loadContent();
      } else {
        setTimeLeft((prev) => prev - 1);
      }
    }, 1000); // Actualizar cada segundo
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const loadContent = async () => {
    try {
      // const response = await axios.get("http://your-api-endpoint/dailyContent");
      // const { dailyContent, lastUpdate } = response.data;
      // setTasks(dailyContent.tasks);
      // setTips(dailyContent.tips);
      const { dailyContent, lastUpdate } = require("../../Api/DailyContext.json");
      setTasks(dailyContent.tasks);
      setTips(dailyContent.tips);
      const lastUpdateDate = new Date(lastUpdate);
      console.log('ACA', lastUpdateDate)
      setLastUpdate(lastUpdateDate);
      await AsyncStorage.setItem("lastUpdate", lastUpdateDate.toISOString());
    } catch (error) {
      console.log("Error loading daily content:", error);
    }
  };

  const startCountdown = () => {
    const now = new Date();
    const nextUpdate = new Date(lastUpdate);
    nextUpdate.setDate(nextUpdate.getDate() + 1); // Próxima actualización en 24 horas
    const secondsLeft = Math.max((nextUpdate - now) / 1000, 0);
    setTimeLeft(secondsLeft);
  };

  const handleCompleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      );
    });
  };

  const checkAllTasksCompleted = () => {
    const incompleteTask = tasks.find((task) => !task.completed);
    setAllTasksCompleted(!incompleteTask);
  };

  const renderTask = ({ item, index }) => {
    const isLocked = index > 0 && !tasks[index - 1].completed;
    return (
      <View style={[styles.taskItem, isLocked && styles.locked]}>
        <Text
          style={[
            styles.taskText,
            item.completed && styles.completed,
            isLocked && styles.hiddenText,
          ]}
        >
          {isLocked ? "Contenido bloqueado" : item.text}
        </Text>
        {!isLocked && !item.completed && (
          <TouchableOpacity
            style={styles.completeButton}
            onPress={() => handleCompleteTask(item.id)}
          >
            <Text style={styles.buttonText}>Complete</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderTip = ({ item }) => (
    <View style={styles.tipItem}>
      <Text style={styles.tipText}>{item}</Text>
    </View>
  );

  const formatTimeLeft = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <CustomHeader />

      <View style={styles.container}>
        <Text style={styles.title}>TAREA DIARIA</Text>

        <Text style={styles.countdownText}>
          Próximas tareas disponibles en: {formatTimeLeft(timeLeft)}
        </Text>

        <FlatList
          data={tips}
          renderItem={renderTip}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={
            <Text style={styles.sectionTitle}>
              Tips para tener en cuenta...
            </Text>
          }
          showsVerticalScrollIndicator={false}
        />

        <FlatList
          data={tasks}
          renderItem={renderTask}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Text style={styles.sectionTitle}>A REALIZAR:</Text>
          }
          showsVerticalScrollIndicator={false}
        />

        {allTasksCompleted && (
          <View style={styles.unlockContainer}>
            {timeLeft <= 0 ? (
              <TouchableOpacity
                style={styles.unlockButton}
                onPress={loadContent}
              >
                <Text style={styles.buttonText}>Desbloquear siguiente</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.tomorrow}>
                <Text style={styles.unlockText}>
                  Bien hecho! Nuevas tareas estarán disponibles en{" "}
                  {formatTimeLeft(timeLeft)}.
                </Text>
                <AntDesign name="checkcircleo" size={24} color="black" />
              </View>
            )}
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "white",
    ...Platform.select({
      web: {
        height: height > 1024 ? "80%" : width > 768 ? "30%" : "70%",
        width: width > 1024 ? "60%" : width > 768 ? "60%" : "70%",
        height: height >= 600 ? "40%" : width > 768 ? "60%" : "70%",
        marginTop: "2%",
        marginHorizontal: width > 1024 ? "20%" : width > 768 ? "30%" : "15%",
      },
    }),
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#fc8080",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 15,
    marginTop: 20,
    textAlign: "left",
    textDecorationLine: "underline",
    color: "#333",
  },
  taskItem: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  taskText: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  locked: {
    backgroundColor: "#e0e0e0",
    borderColor: "#d0d0d0",
    borderWidth: 1,
  },
  hiddenText: {
    color: "transparent",
    textShadowColor: "#ccc",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  completeButton: {
    backgroundColor: "#fc8080",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  unlockContainer: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#fc8080",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  unlockText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  unlockButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  tipItem: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: "#fff4e6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
  tipText: {
    fontSize: 16,
    color: "#00796b",
  },
  tomorrow: {
    padding: 10,
    marginVertical: 3,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TaskList;
