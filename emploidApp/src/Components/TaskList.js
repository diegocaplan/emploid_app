import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import CustomHeader from "./CustomHeader";
import { AntDesign } from "@expo/vector-icons";
import dailyContent from "../../Api/DailyContext.json";

const { width, height } = Dimensions.get("window");

const TaskList = () => {
  const initialTasks = dailyContent.dailyContent.tasks;
  const initialTips = dailyContent.dailyContent.tips;

  const [tasks, setTasks] = useState(initialTasks);
  const [tips, setTips] = useState(initialTips);
  const [allTasksCompleted, setAllTasksCompleted] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    checkAllTasksCompleted();
  }, [tasks]);

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

  const handleUnlockNext = () => {
    setCurrentDate(new Date(new Date().setDate(new Date().getDate() + 1)));
  };

  const isToday = (date) => {
    const today = new Date();
    console.log(today);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <>
      <CustomHeader />

      <View style={styles.container}>
        <Text style={styles.title}>TAREA DIARIA</Text>

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
            {isToday(currentDate) ? (
              <View style={styles.tomorrow}>
                <Text style={styles.unlockText}>
                  Bien hecho! Mañana se activarán nuevas tareas.
                </Text>
                <AntDesign name="checkcircleo" size={24} color="black" />
              </View>
            ) : (
              <TouchableOpacity
                style={styles.unlockButton}
                onPress={handleUnlockNext}
              >
                <Text style={styles.buttonText}>Desbloquear siguiente</Text>
              </TouchableOpacity>
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
