import { Button, FormControl, MenuItem, Select, Stack } from "@mui/material";
import { UseForm } from "../../hooks/UseForm";
import { InputForms } from "./styled";
import { PatchClient } from "../../services/Api/client";
import { useContext } from "react";
import { DataContext } from "../../context/Data";
import { PatchPet } from "../../services/Api/pet";

export const EditClientAndPet = ({ pets }) => {
  const {
    formValues,
    onChange,
    cleanFields,
    formValuesB,
    onChangeB,
    cleanFieldsB,
  } = UseForm();

  const { currentClient } = useContext(DataContext);

  const SubmitForm = (event) => {
    PatchClient(currentClient.id, formValuesB);
    PatchPet(currentClient.id, pets[0].id, formValues);
    cleanFieldsB();
    cleanFields();
  };

  return (
    <form onSubmit={SubmitForm}>
      <Stack
        width={"300px"}
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={2}
        spacing={4}
      >
        <InputForms
          type={"text"}
          placeholder={currentClient.nome || undefined}
          name="nome"
          onChange={onChangeB}
          pattern="[a-zA-ZÀ-ÿ -]{3,30}"
          title="mínimo de 3 caracteres e menor que 30"
          value={formValuesB.nome || undefined}
        />
        <InputForms
          type={"text"}
          placeholder={currentClient.telefone || undefined}
          name="telefone"
          onChange={onChangeB}
          pattern="[0-9]{11}"
          title="Deve conter 11 dígitos numéricos parecido ex: 28999287132"
          value={formValuesB.telefone || undefined}
        />
        <InputForms
          type={"text"}
          placeholder={pets[0].nome || undefined}
          name="nome"
          onChange={onChange}
          pattern="[a-zA-ZÀ-ÿ -]{3,30}"
          title="mínimo de 3 caracteres e menor que 30"
          value={formValues.nome || undefined}
        />
        <InputForms
          type={"text"}
          placeholder={pets[0].raca || undefined}
          name="raca"
          onChange={onChange}
          pattern="[a-zA-ZÀ-ÿ -]{3,30}"
          title="mínimo de 3 caracteres e menor que 30"
          value={formValues.raca}
        />
        <InputForms
          type={"number"}
          placeholder={pets[0].idade || undefined}
          name="idade"
          onChange={onChange}
          min="0"
          max="30"
          title="Seu pet tem mais de 30 anos?"
          value={formValues.idade || undefined}
        />

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            name="tipo"
            value={formValues.tipo || undefined}
            onChange={onChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"GATO"}>Gato</MenuItem>
            <MenuItem value={"CACHORRO"}>Cachorro</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="text"
          type="submit"
          onClick={() => {
            SubmitForm();
          }}
          sx={{
            borderRadius: "100%",
            fontSize: 28,
            fontWeight: 500,
            backgroundColor: "#003b1f",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#007e43",
            },
          }}
        >
          +
        </Button>
      </Stack>
    </form>
  );
};
