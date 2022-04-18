import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem(props) {
  const { task, index, deleteTask, updateTask } = props;
  const [title, setTitle] = useState("");

  const handleChange = (text) => {
    if (!!text) {
      updateTask(text);
    }
  };

  useEffect(() => {
    setTitle(task);
  }, [task]);

  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={styles.taskContainer}>
        <TextInput
          style={styles.inputField}
          value={title}
          onChangeText={handleChange}
          placeholder={"Write a task"}
          placeholderTextColor={"#fff"}
        />
        <TouchableOpacity onPress={() => deleteTask()}>
          <MaterialIcons
            style={styles.delete}
            name="delete"
            size={18}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  indexContainer: {
    backgroundColor: "#3E3364",
    borderRadius: 12,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  inputField: {
    color: "#fff",
    height: 50,
    flex: 1,
  },
  index: {
    color: "#fff",
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: "#3E3364",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    color: "#fff",
    width: "90%",
    fontSize: 16,
  },
  delete: {
    marginLeft: 10,
  },
});
