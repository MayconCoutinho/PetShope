import { createContext, useEffect, useState } from "react";
import { GetAllClient } from "../../services/Api/client";

export const ApiContext = createContext({});

export const ApiProvider = ({ children }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getAllClient = async () => {
      setClients(await GetAllClient());
    };

    getAllClient();
  }, []);

  return (
    <ApiContext.Provider value={{ clients }}>{children}</ApiContext.Provider>
  );
};
