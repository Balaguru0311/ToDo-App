import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useState } from "react";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center p-5 m-5">
      {isLogin ? <LoginForm /> : <SignupForm />}
      <p
        className="text-sm mt-3 text-blue-600 cursor-pointer"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? "No account? Sign up" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default Home;
