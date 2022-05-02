import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Category({ category }) {
  const { name, image } = category;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    padding: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
    marginBottom: 20,
  },
});
