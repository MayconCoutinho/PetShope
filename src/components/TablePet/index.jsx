/* eslint-disable jsx-a11y/alt-text */
import { Stack, Typography } from "@mui/material";
import cat from "../../assets/img/TablePet/cat.avif";
import dog from "../../assets/img/TablePet/dog.avif";
import { TbEdit, TbTrashXFilled } from "react-icons/tb";
import { ModalEdit } from "../ModalEdit";
import { useState } from "react";
import { ModalAlertAndAccept } from "../ModalAlertAndAccept";

export const TablePet = ({ pets }) => {
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  const fuctionModalEditOpen = () => {
    setModalEditOpen(!modalEditOpen);
  };

  const fuctionModalDeleteOpen = () => {
    setModalDeleteOpen(!modalDeleteOpen);
  };

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
              {modalEditOpen === true ? (
                <ModalEdit isOpen={modalEditOpen} pets={pets && pets} />
              ) : (
                <></>
              )}
              {modalDeleteOpen === true ? (
                <ModalAlertAndAccept
                  isOpen={modalDeleteOpen}
                  donoId={pets[0].donoId}
                  petId={pets[0].id}
                />
              ) : (
                <></>
              )}

              <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                color={"#fff"}
                fontSize={30}
                spacing={30}
                sx={{ cursor: "pointer" }}
              >
                <TbEdit onClick={() => fuctionModalEditOpen()} />
                <TbTrashXFilled onClick={() => fuctionModalDeleteOpen()} />
              </Stack>

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
