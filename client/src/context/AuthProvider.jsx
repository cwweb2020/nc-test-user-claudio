import { createContext, useContext, useState } from "react";
import AxiosClient from "../axios";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export const AuthConsumer = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [token, setToken] = useState(sessionStorage.getItem("token") || null);
  const navigate = useNavigate();

  const login = async (credentials) => {
    try {
      const response = await AxiosClient.post("/auth", credentials);
      sessionStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const removeToken = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
