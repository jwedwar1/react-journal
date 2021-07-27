import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { DeleteEntryModalInterface } from "../interfaces";

const DeleteEntryModal: React.FC<DeleteEntryModalInterface> = ({
  handleClose,
  open,
  deleteIndex,
  deleteEntry,
}) => {
  const handleDelete = (): void => {
    deleteEntry(deleteIndex);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      id="delete-entry-modal"
      closeAfterTransition
    >
      <DialogTitle id="delete-entry-title">Are you sure?</DialogTitle>
      <DialogContent>
        This will permanently delete the journal entry.
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteEntryModal;
