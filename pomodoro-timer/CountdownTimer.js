import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";

export function CountdownTimer({ destroy }) {
  const [count, setCount] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          destroy();
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [destroy]);

  return (
    <Text style={styles.timerText}>
      {Math.floor(count / 60)}:{count % 60 < 10 ? "0" : ""}
      {count % 60}
    </Text>
  );
}

const styles = StyleSheet.create({
  timerText: {
    fontSize: 24,
  },
});
