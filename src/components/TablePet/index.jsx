/* eslint-disable jsx-a11y/alt-text */
import { Stack, Typography } from "@mui/material";
import cat from "../../assets/img/TablePet/cat.avif";
import dog from "../../assets/img/TablePet/dog.avif";

export const TablePet = ({ pets }) => {
  return (
    <>
      {pets.map((item) => {
        return (
          <>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              width={500}
              height={400}
              sx={{ backgroundColor: "#008145d1", borderRadius: 4 }}
            >
              <img
                key={item.tipo}
                src={item.tipo === "GATO" ? cat : dog}
                width={150}
                style={{ borderRadius: 100 }}
              />
              <Typography
                marginTop={2}
                fontSize={30}
                fontWeight={600}
                color={"#fff"}
              >
                {item.nome.toUpperCase()}
              </Typography>

              <Typography fontSize={14} fontWeight={600} color={"#83ffc5d1"}>
                {item.raca}
              </Typography>
              <Typography
                marginTop={2}
                fontSize={20}
                fontWeight={600}
                color={"#00351c"}
              >
                {item.idade} anos
              </Typography>
            </Stack>
          </>
        );
      })}
    </>
  );
};
