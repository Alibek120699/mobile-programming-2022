import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const App = () => {
  const [workTime, setWorkTime] = useState(30);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWorkTime((prev) => (prev === 1 ? 30 : prev - 1));
    }, 60 * 1000); // 1 minute
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (workTime === 30) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 5 * 60 * 1000); // 5 minutes
    }
  }, [workTime]);

  return (
    <View style={styles.container}>
      <Text>Pomodoro Timer</Text>
      <Text>
        Time to {showMessage ? "relax" : "work"} left:{" "}
        {showMessage ? (workTime % 5 === 0 ? 5 : workTime % 5) : workTime}
      </Text>
      {showMessage && <Text>Break time for 5 minutes</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
