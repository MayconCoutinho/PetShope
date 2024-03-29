import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { EditClientAndPet } from "../EditClientAndPet";
import { Stack } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalEdit = ({ isOpen, pets }) => {
  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setOpen(true);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#007e43" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Editar Dados
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Salvar
            </Button>
          </Toolbar>
        </AppBar>

        <Stack justifyContent="center" alignItems="center" marginTop={20}>
          <EditClientAndPet pets={pets && pets} />
        </Stack>
      </Dialog>
    </div>
  );
};
