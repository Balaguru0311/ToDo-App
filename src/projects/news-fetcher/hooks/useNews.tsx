import { useState, useEffect } from "react";
import { NewsArticle } from "../types/news.d";

export const useNews = (query: string) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchNews = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=c68789dee6d64e648f5ade900a1d9b36`
        );
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();
        setArticles(data.articles);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query]);

  return { articles, loading, error };
};
