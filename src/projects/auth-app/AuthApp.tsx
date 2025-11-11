import { Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./../../context/AuthContext";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const AuthApp = () => (
<>
    {/* <AuthProvider> */}
    {/* <BrowserRouter> */}
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    {/* </BrowserRouter> */}
    {/* </AuthProvider> */}

</>
);

export default AuthApp;
