import axios from "axios";
import config from "./config.json";

const request = axios.create({
  baseURL: "https://newsapi.org",
});

export const getArticles = () =>
  request.get(
    `/v2/everything?q=Apple&from=2022-05-02&sortBy=popularity&apiKey=${config.API_KEY}`
  );
