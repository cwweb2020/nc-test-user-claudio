import { createContext, useContext, useState } from "react";
import AxiosClient from "../axios";
import { AuthConsumer } from "./AuthProvider";
const UserContext = createContext();
export const UserConsumer = () => useContext(UserContext);

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const { token, removeToken } = AuthConsumer();
  const getData = async () => {
    try {
      const response = await AxiosClient.get("/api/members", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
        setUsers(response.data);
    } catch (error) {
           console.log(error);
        if (error.response.status === 401) {
            removeToken();
            alert("Your session has expired, please login again")
        }
            
        
    }
  };
  
  const insertData = async (user) => {
    try {
        const response = await AxiosClient.post("/api/members", user, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        setUsers([...users, response.data]);
    } catch (error) {
        console.log( error)
        if (error.response.status === 401) {
            removeToken();
            alert("Your session has expired, please login again")
        }
    }
}


  return (
    <UserContext.Provider value={{ users, insertData, getData }}>{children}</UserContext.Provider>
  );

}

export default UserProvider;
