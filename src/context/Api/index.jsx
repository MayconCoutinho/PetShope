import { createContext, useEffect, useState } from "react";
import {
  DeleteClient,
  GetAllClient,
  PostClientAndPet,
} from "../../services/Api/client";
import { DeletePet } from "../../services/Api/pet";

export const ApiContext = createContext({});

export const ApiProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [update, setUpdate] = useState(false);

  const fuctionUpdate = () => {
    setUpdate(!update);
  };

  const FuctionRegisterClient = async (form) => {
    await PostClientAndPet(form);
    fuctionUpdate();
  };

  const FuctionDeleteClient = async (idClient, idPet) => {
    await DeletePet(idClient, idPet);
    await DeleteClient(idClient);
    fuctionUpdate();
  };

  useEffect(() => {
    const getAllClient = async () => {
      setClients(await GetAllClient());
    };

    getAllClient();
  }, [update]);

  return (
    <ApiContext.Provider
      value={{ clients, FuctionDeleteClient, FuctionRegisterClient }}
    >
      {children}
    </ApiContext.Provider>
  );
};
