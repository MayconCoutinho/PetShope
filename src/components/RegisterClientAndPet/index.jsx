import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { UseForm } from "../../hooks/UseForm";
import { InputForms } from "./styled";
import { PostClientAndPet } from "../../services/Api/client";

export const RegisterClientAndPet = () => {
  const { formValues, onChange, cleanFields } = UseForm();

  const SubmitForm = (event) => {
    event.preventDefault();
    PostClientAndPet(formValues);
    cleanFields();
  };

  return (
    <form onSubmit={SubmitForm}>
      <Stack
        width={"100%"}
        height={80}
        sx={{ backgroundColor: "#fff", borderRadius: 1 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={2}
        spacing={4}
      >
        <InputForms
          type={"text"}
          placeholder="Nome do Cliente"
          name="nome"
          onChange={onChange}
          required
          pattern="[a-zA-ZÀ-ÿ -]{3,30}"
          title="mínimo de 3 caracteres e menor que 30"
          value={formValues.nome}
        />
        <InputForms
          type={"text"}
          placeholder="Telefone"
          name="telefone"
          onChange={onChange}
          required
          pattern="[0-9]{11}"
          title="Deve conter 11 dígitos numéricos parecido ex: 28999287132"
          value={formValues.telefone}
        />
        <InputForms
          type={"text"}
          placeholder="Nome do Pet"
          name="petName"
          onChange={onChange}
          required
          pattern="[a-zA-ZÀ-ÿ -]{3,30}"
          title="mínimo de 3 caracteres e menor que 30"
          value={formValues.petName}
        />
        <InputForms
          type={"text"}
          placeholder="Raça"
          name="raca"
          onChange={onChange}
          required
          pattern="[a-zA-ZÀ-ÿ -]{3,30}"
          title="mínimo de 3 caracteres e menor que 30"
          value={formValues.raca}
        />
        <InputForms
          type={"number"}
          placeholder="Idade do Pet"
          name="idade"
          onChange={onChange}
          required
          min="0"
          max="30"
          title="Seu pet tem mais de 30 anos?"
          value={formValues.idade}
        />

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            required
            name="tipo"
            value={formValues.tipo}
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
