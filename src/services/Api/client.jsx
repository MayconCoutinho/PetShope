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

  console.log("estou no post", body);

  try {
    await axios.post(`${BASE_URL}admin/client/register`, body);
    alert("formulario enviado");
  } catch (error) {
    alert(error.response.data.message);
  }
};
