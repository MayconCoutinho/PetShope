import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

export const GetAllClient = async () => {
  try {
    const response = await axios.get(`${BASE_URL}admin/clients`);

    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const PostClientAndPet = async (clientAndPet) => {
  const body = {
    client: {
      nome: clientAndPet.nome,
      telefone: clientAndPet.telefone,
    },
    pet: {
      idade: Number(clientAndPet.idade),
      nome: clientAndPet.petName,
      raca: clientAndPet.raca,
      tipo: clientAndPet.tipo,
    },
  };

  try {
    await axios.post(`${BASE_URL}admin/client/register`, body);
    alert("Cliente cadastrado");
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const DeleteClient = async (idClient) => {
  try {
    await axios.delete(`${BASE_URL}admin/client`, {
      data: {
        idClient: idClient,
      },
    });

    alert("Usuario deletado");
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const PatchClient = async (idClient, object) => {
  const { nome, telefone } = object;
  try {
    const response = await axios.patch(`${BASE_URL}admin/client/${idClient}`, {
      data: {
        nome,
        telefone,
      },
    });

    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};
