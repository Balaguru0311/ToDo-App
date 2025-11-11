import { WeatherData } from "./types";

const WeatherCard = ({ weather }: { weather: WeatherData }) => {
  const { name, main, weather: info, wind } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${info[0].icon}@2x.png`;

  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 w-full max-w-sm mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <img src={iconUrl} alt="weather icon" className="mx-auto w-20 h-20" />
      <p className="capitalize text-lg">{info[0].description}</p>
      <p className="text-4xl font-bold mt-2">{main.temp.toFixed(1)}°C</p>
      <div className="flex justify-around mt-4 text-sm">
        <p>💧 {main.humidity}%</p>
        <p>🌬️ {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
