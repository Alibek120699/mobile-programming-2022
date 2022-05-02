import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { format, parseISO } from "date-fns";

export default function DetailsScreen({ route, navigation }) {
  const { author, title, description, urlToImage, publishedAt, content } =
    route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image
          style={styles.image}
          source={{
            uri: urlToImage,
          }}
        />
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <View style={styles.extra}>
        <Text style={styles.author}>Author: {author || "Unknown author"}</Text>
        <Text style={styles.publishedAt}>
          Published {format(parseISO(publishedAt), "dd.MM.yyyy")}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
  },
  image: {
    width: 280,
    height: 280,
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
    marginBottom: 20,
  },
  description: {
    marginTop: 10,
    fontStyle: "italic",
    fontSize: 20,
  },
  content: {
    marginTop: 20,
    textAlign: "left",
    fontSize: 20,
  },
  author: {
    fontStyle: "italic",
    fontSize: 18,
  },
  publishedAt: {
    fontStyle: "italic",
    fontSize: 18,
  },
  extra: {
    padding: 20,
    textAlign: "right",
  },
});
