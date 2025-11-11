// import { Suspense,lazy } from "react";
import NewsCard from "./NewsCard";
import { NewsArticle } from "../types/news.d";
import LazyRender from "./LazyRender";
// const NewsCard=lazy(()=>import("./NewsCard"));

interface Props {
  articles: NewsArticle[];
}

const NewsList: React.FC<Props> = ({ articles }) => {
  if (articles.length === 0)
    return <p className="text-center text-gray-500">No articles found.</p>;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, i) => (
        <LazyRender>
        
        <NewsCard key={i} article={article} />
        
        </LazyRender>
        // <Suspense key={i} fallback={<div>Loading news...</div>}>
        // </Suspense>
      ))}
    </div>
  );
};

export default NewsList;
