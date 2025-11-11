import { useAuth } from "../../../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.email}!</h1>
      <p className="mb-6">You have successfully logged in using JWT Auth 🎉</p>
      <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
