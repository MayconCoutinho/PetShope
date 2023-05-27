import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

export const DeletePet = async (idClient, idPet) => {
  try {
    await axios.delete(`${BASE_URL}admin/pet`, {
      data: {
        idClient: idClient,
        idPet: idPet,
      },
    });
  } catch (error) {
    alert(error.response.data.message);
  }
};

export const PatchPet = async (idClient, petId, object) => {
  const { nome, tipo, raca } = object;
  let { idade } = object;

  if (idade != null && undefined) {
    idade = parseInt(idade);
  } else {
    idade = undefined;
  }

  console.log("all dados", nome, idade, tipo, raca);

  try {
    const response = await axios.patch(
      `${BASE_URL}admin/client/${idClient}/pet/${petId}`,
      {
        data: {
          nome,
          idade,
          tipo,
          raca,
        },
      }
    );

    return response.data;
  } catch (error) {
    alert(error.response.data.message);
  }
};
