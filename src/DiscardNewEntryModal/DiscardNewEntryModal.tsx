import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import { DiscardNewEntryModalInterface } from "../interfaces";

const DiscardNewEntryModal: React.FC<DiscardNewEntryModalInterface> = ({
  handleClose,
  open,
  setShowNewEntry,
}) => {
  const handleDiscard = (): void => {
    setShowNewEntry(false);
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
      <DialogContent>This journal entry will not be saved.</DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDiscard}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DiscardNewEntryModal;
