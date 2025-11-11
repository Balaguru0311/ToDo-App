import { NewsArticle } from "../types/news.d";

interface Props {
  article: NewsArticle;
}

const NewsCard: React.FC<Props> = ({ article }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
    {article.urlToImage && (
      <img src={article.urlToImage} alt={article.title} className="h-48 w-full object-cover" />
    )}
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{article.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {article.description?.slice(0, 120)}...
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Read More →
      </a>
    </div>
  </div>
);

export default NewsCard;
