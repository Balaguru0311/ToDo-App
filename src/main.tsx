import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.js'
import { AuthProvider } from './context/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
      <AuthProvider>
        <App />
      </AuthProvider>
    
  </StrictMode>,
)
// c68789dee6d64e648f5ade900a1d9b36