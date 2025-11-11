import { useState,Suspense,lazy } from "react";
import { useNews } from "./hooks/useNews";
// import NewsList from "./components/NewsList";
const NewsList = lazy(()=>import("./components/NewsList"));

const NewsFetcherApp: React.FC = () => {
  const [query, setQuery] = useState("technology");
  const { articles, loading, error } = useNews(query);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.search.value.trim();
    if (input) setQuery(input);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        📰 News Fetcher App
      </h1>

      <form onSubmit={handleSearch} className="flex gap-2 mb-6 justify-center">
        <input
          type="text"
          name="search"
          placeholder="Search for news..."
          className="border rounded-md px-4 py-2 w-1/2 dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading news...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
             
      <Suspense fallback={<div>Loading nwes...</div>}>
      <NewsList articles={articles} />
      </Suspense>
            
    </div>
  );
};

export default NewsFetcherApp;
