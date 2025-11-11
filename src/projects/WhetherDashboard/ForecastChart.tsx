import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { ForecastDay } from "./types";

const ForecastChart = ({ data }: { data: ForecastDay[] }) => {
  if (!data.length) return null;

  return (
    <>
        <div className="w-full max-w-2xl mx-auto mt-8 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">5-Day Forecast</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="dt"
                    tickFormatter={(dt) =>
                    new Date(dt * 1000).toLocaleDateString("en-IN", { weekday: "short" })
                    }
                />
                <YAxis unit="°C" />
                <Tooltip
                    labelFormatter={(dt) =>
                    new Date(dt * 1000).toLocaleString("en-IN", { weekday: "short", hour: "2-digit" })
                    }
                />
                <Line type="monotone" dataKey="main.temp" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
            
        </div>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
              {data.map((day, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 text-center shadow rounded-lg p-4 w-32"
              >
                <p className="font-semibold">
                  {new Date(day.dt * 1000).toLocaleDateString("en-IN", { weekday: "short" })}
                </p>
                <p>{Math.round(day.main.temp)}°C</p>
                <p className="text-sm capitalize">{day.weather[0].description}</p>
              </div>
            ))}
        </div>
    </>
  );
};

export default ForecastChart;
