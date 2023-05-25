import { Avatar } from "@mui/material";

export const AvatarPerfil = ({ rgbColor, name, perfilImg }) => {
  // const firstLetter = name && name[0].toUpperCase()
  // if ( perfilImg === null) {
  //   return <Avatar sx={{ bgcolor: `rgb(${rgbColor})` }} > {firstLetter}</Avatar>
  // } else {
  //     return <Avatar alt={name}src={perfilImg}/>
  // }
  return <Avatar sx={{ bgcolor: `rgb(0, 44, 20)` }}> P </Avatar>;
};
