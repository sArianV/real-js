import React from "react";
import PropTypes from "prop-types";
import CargaProducto from "./CargaProducto";
import { Dialog, Button } from "@material-ui/core";
import Styles from "./modal.module.css"
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <CargaProducto />
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className={Styles.buttonContainer}>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleClickOpen}
        size="small"
        className={Styles.centerButton}
      >
        Agregar Producto
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
