import React, { useState } from "react";
import WeatherCard from "./WhetherCard";
import ForecastChart from "./ForecastChart";
import { WeatherData, ForecastDay } from "./types";

const API_KEY = "1637446685d696daefbb48f1cebd2629";

const WeatherDashboard: React.FC = () => {
  const [city, setCity] = useState<string>();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!city) return;

    setLoading(true);
    setError("");

    try {
      // 1️⃣ Get current weather
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      console.log(data);
      setWeather(data);

      // 2️⃣ Get 7-day forecast using lat/lon
    //   const { lat, lon } = data.coord;
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastData = await forecastRes.json();
      console.log(forecastData);
      if (!forecastRes.ok) throw new Error(forecastData.message || "Forecast fetch failed");

      // One record per day (~8 intervals)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const dailyForecast = forecastData.list.filter((_: any, i: number) => i % 8 === 0);
      
      setForecast(dailyForecast);
        
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">🌤️ Weather Dashboard</h1>

      <form onSubmit={fetchWeather} className="flex justify-center mb-6 gap-2">
        <input
          type="text"
          value={city}
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
          className="border rounded-xl p-2 w-64 dark:bg-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Fetching weather data...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
      {forecast.length > 0 && <ForecastChart data={forecast} />}
    </div>
  );
};

export default WeatherDashboard;
