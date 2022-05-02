import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Article from "../components/Article";
import { getArticles } from "../store/api";

export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);

  const goToArticleDetail = (articleData) => () => {
    navigation.navigate("Article Detail", articleData);
  };

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res.data.articles || []);
    });
  }, []);

  return (
    <ScrollView>
      {articles.map((article, index) => (
        <Article
          key={index}
          article={article}
          goToArticleDetail={goToArticleDetail}
        />
      ))}
    </ScrollView>
  );
}
