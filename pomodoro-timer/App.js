import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { CountdownTimer } from "./CountdownTimer";

const App = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    if (!showMessage) {
      setTimeout(() => {
        setShowMessage(true);
      }, 25 * 60 * 1000); // 25 minutes
    }
  }, [showMessage]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro Timer</Text>
      {showMessage ? (
        <>
          <Text style={styles.message}>Break time for 5 minutes</Text>
          <CountdownTimer destroy={() => setShowMessage(false)} />
        </>
      ) : (
        <Text style={styles.message}>Time to Work</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  message: {
    fontSize: 24,
    color: "green",
  },
});

export default App;
