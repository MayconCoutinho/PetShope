import { Stack } from "@mui/system";
import React, { useContext } from "react";
import { Footer } from "../../components/Footer";
import { HeaderBar } from "../../components/HeaderBar";
import { AuthContext } from "../../context/Auth";
import { TableUser } from "../../components/TableUser";
import { ApiContext } from "../../context/Api";
import { Typography } from "@mui/material";
import { TablePet } from "../../components/TablePet";
import { DataContext } from "../../context/Data";
import { RegisterClientAndPet } from "../../components/RegisterClientAndPet";

export const HomePage = () => {
  const { headerBarUserInfo, signout } = useContext(AuthContext);
  const { clients } = useContext(ApiContext);
  const { currentPet } = useContext(DataContext);

  return (
    <>
      <HeaderBar
        rgbColor={headerBarUserInfo?.rgb}
        name={headerBarUserInfo?.name}
        perfilImg={headerBarUserInfo?.imgPerfil}
        signout={signout}
      />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop={20}
      >
        <Typography
          variant="caption"
          fontSize={30}
          color={"#003b1f"}
          fontWeight={600}
        >
          Clientes Registrados
        </Typography>
      </Stack>

      <Stack
        direction="column"
        paddingTop={5}
        paddingLeft={10}
        paddingRight={10}
      >
        <RegisterClientAndPet />
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        padding={2}
        marginTop={2}
        marginBottom={40}
      >
        <TableUser rows={clients} />
        <TablePet pets={currentPet} />
      </Stack>
      <Footer />
    </>
  );
};
