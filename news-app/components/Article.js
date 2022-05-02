import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { format, parseISO } from "date-fns";

export default function Article({ article, goToArticleDetail }) {
  const { author, title, urlToImage, publishedAt } = article;

  return (
    <TouchableOpacity onPress={goToArticleDetail(article)}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.image}
          source={{
            uri: urlToImage,
          }}
        />
        <Text style={styles.subtitle}>
          {author || "Unknown author"},{" "}
          {format(parseISO(publishedAt), "dd.MM.yyyy")}
        </Text>
      </View>
    </TouchableOpacity>
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
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 10,
    fontStyle: "italic",
  },
});
