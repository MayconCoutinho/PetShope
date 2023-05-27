import { createContext, useContext, useEffect, useState } from "react";
import { ApiContext } from "../Api";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [currentPet, setCurrentPet] = useState([]);
  const [currentClient, setcurrentClient] = useState([]);

  const { clients } = useContext(ApiContext);

  const functionSetClientAndPets = async (chave, valor) => {
    const resultados = clients.filter((objeto) => {
      return objeto[chave] === valor;
    });
    setCurrentPet(resultados[0].pets);
    setcurrentClient(resultados[0]);
  };

  return (
    <DataContext.Provider
      value={{ currentPet, currentClient, functionSetClientAndPets }}
    >
      {children}
    </DataContext.Provider>
  );
};
