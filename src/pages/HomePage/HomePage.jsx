import { Stack } from "@mui/system";
import React, { useContext } from "react";
import { Footer } from "../../components/Footer";
import { HeaderBar } from "../../components/HeaderBar";
import { AuthContext } from "../../context/Auth";
import { TableUser } from "../../components/TableUser";

export const HomePage = () => {
  const { headerBarUserInfo, signout } = useContext(AuthContext);

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
        padding={2}
        marginTop={10}
      >
        <TableUser />
      </Stack>
      <Footer />
    </>
  );
};
