import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import dailyContent from "../../Api/DailyContext.json";
const { width, height } = Dimensions.get("window");

const TaskList = () => {
  const initialTasks = dailyContent.dailyContent.tasks;
  const initialTips = dailyContent.dailyContent.tips;

  const [tasks, setTasks] = useState(initialTasks);
  const [tips, setTips] = useState(initialTips);
  // const [tasks, setTasks] = useState([]);
  // const [tips, setTips] = useState([]);

  const [allTasksCompleted, setAllTasksCompleted] = useState(false);
  const [timer, setTimer] = useState(24 * 60 * 60);

  useEffect(() => {
    loadContent();
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          fetchTasks();
          return 24 * 60 * 60;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const loadContent = async () => {
    try {
      const { dailyContent } = require("../../Api/DailyContext.json");
      setTasks(dailyContent.tasks);
      setTips(dailyContent.tips);
      setTasks(tasks);
      setTips(tips);
      checkAllTasksCompleted(tasks);
    } catch (error) {
      console.log("Error loading daily content:", error);
    }
  };

  const fetchTasks = async () => {
    try {
      // const response = await axios.get("http://localhost:3000/tasks");
      // const { tasks } = response.data;
      setTasks(tasks);
      checkAllTasksCompleted(tasks);
    } catch (error) {
      console.log("Error fetching tasks:", error);
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      // await axios.post(`http://localhost:3000/tasks/${taskId}/complete`);
      fetchTasks();
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const checkAllTasksCompleted = (tasks) => {
    const incompleteTask = tasks.find((task) => !task.completed);
    setAllTasksCompleted(!incompleteTask);
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TAREA DIARIA</Text>

      <Text style={styles.countdownText}>
        Próximas tareas disponibles en: {formatTime(timer)}
      </Text>

      <FlatList
        data={tips}
        renderItem={renderTip}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>Tips para tener en cuenta...</Text>
        }
        showsVerticalScrollIndicator={false}
      />

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <Text style={styles.sectionTitle}>A REALIZAR:</Text>
        }
        showsVerticalScrollIndicator={false}
      />

      {allTasksCompleted && (
        <View style={styles.unlockContainer}>
          {timer <= 0 ? (
            <TouchableOpacity style={styles.unlockButton} onPress={fetchTasks}>
              <Text style={styles.buttonText}>Desbloquear siguiente</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.tomorrow}>
              <Text style={styles.unlockText}>
                ¡Bien hecho! Nuevas tareas estarán disponibles en{" "}
                {formatTime(timer)}
              </Text>
              <AntDesign name="checkcircleo" size={24} color="black" />
            </View>
          )}
        </View>
      )}
    </View>
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
