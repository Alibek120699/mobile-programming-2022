import React, { useState } from "react";
import { Keyboard, ScrollView, StyleSheet, Text, View } from "react-native";
import TodoCreator from "./TodoCreator";
import TodoItem from "./TodoItem";

export default function App() {
  const [tasks, setTasks] = useState({});
  const [id, setId] = useState(1);

  const addTask = (task) => {
    if (!!task) {
      setId(id + 1);
      setTasks({ ...tasks, [id]: task });
      Keyboard.dismiss();
    }
  };

  const deleteTask = (deleteIndex) => () => {
    const otherTasks = { ...tasks };
    delete otherTasks[deleteIndex];
    setTasks(otherTasks);
  };

  const updateTask = (updateIndex) => (newValue) => {
    const updatedTasks = { ...tasks };
    updatedTasks[updateIndex] = newValue;
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {Object.entries(tasks)
          .filter(([_, value]) => !!value)
          .map(([key, value], index) => {
            return (
              <View key={key} style={styles.taskContainer}>
                <TodoItem
                  index={index + 1}
                  task={value}
                  deleteTask={deleteTask(key)}
                  updateTask={updateTask(key)}
                />
              </View>
            );
          })}
      </ScrollView>
      <TodoCreator addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1A3C",
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
