import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();
  useEffect(()=>{
    const verifyToken=async()=>{
      if(!token){
        return <Navigate to="/auth" />;
      }
      const res = await fetch("http://localhost:5000/protected-route", {
        headers:{Authorization:`Bearer ${token}`}
      });
      if(!res.ok){
        return <Navigate to="/auth" />;
      } 
    }  
    verifyToken();

    
  },[token,children]);
  return <>{children}</>;
};

export default ProtectedRoute;
