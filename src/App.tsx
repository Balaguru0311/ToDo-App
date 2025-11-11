
import ToDo from './Components/ToDo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToggleTheme } from './context/ThemeToggle';
import Navbar from './layout/Navbar';
import NewsFetcherApp from './projects/news-fetcher';
import AuthApp from './projects/auth-app';
import { ThemeProvider } from './context/ThemeContext';
import WeatherDashboard from './projects/WhetherDashboard';
import ShoppingCart from "./projects/ShoppingCart/ShoppingCart";
// import User from "./Components/User";
// import ReducerApp from "./Components/useReducer";

function App() {
  
  return (
    <>
    <ThemeProvider>
    <Router>
    <div className='px-4 py-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white'>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Mini Projects Hub</h1>
        <ToggleTheme />
      </div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ToDo/>}></Route>
        <Route path="/news" element={<NewsFetcherApp/>}></Route>
        <Route path="/auth/*" element={<AuthApp/>}></Route>
        <Route path="/weather" element={<WeatherDashboard/>}></Route>
        <Route path="/shoppingCart/*" element={<ShoppingCart />}></Route>
      </Routes>
    </div>
    </Router>      
    </ThemeProvider>  
    </>
  )
}

export default App
