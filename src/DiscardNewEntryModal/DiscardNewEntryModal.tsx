import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";

type DiscardNewEntryModalProps = {
  handleClose: () => void;
  open: boolean;
  setShowNewEntry: (showNewEntry: boolean) => void;
};

const DiscardNewEntryModal = ({
  handleClose,
  open,
  setShowNewEntry,
}: DiscardNewEntryModalProps) => {
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
