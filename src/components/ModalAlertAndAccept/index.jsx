import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ApiContext } from "../../context/Api";

export const ModalAlertAndAccept = ({ isOpen, donoId, petId }) => {
  const [open, setOpen] = React.useState(false);
  const { FuctionDeleteClient } = React.useContext(ApiContext);

  React.useEffect(() => {
    setOpen(true);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
  };

  const deletarCLient = () => {
    FuctionDeleteClient(donoId, petId);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tem certeza que deja excluir o cliente?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Caso aceite não tera como recupera os dados perdidos.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              deletarCLient();
            }}
            sx={{
              backgroundColor: "#7a0000",
              ":hover": { backgroundColor: "#df0000" },
            }}
          >
            Sim
          </Button>
          <Button variant="contained" onClick={handleClose} autoFocus>
            Não
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
