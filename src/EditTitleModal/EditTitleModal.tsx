import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TextField,
} from "@material-ui/core";

import "./EditTitleModal.scss";

type EditTitleModalProps = {
  handleClose: () => void;
  open: boolean;
  savedTitle: string;
  saveTitle: (newTitle: string) => void;
};

const EditTitleModal = ({
  handleClose,
  open,
  savedTitle,
  saveTitle,
}: EditTitleModalProps) => {
  const [title, setTitle] = useState(savedTitle);

  const handleSave = (): void => {
    saveTitle(title);
    handleClose();
  };

  const handleKeyDown = (key: string): void => {
    if (key === "Enter" && title !== "") {
      handleSave();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      id="edit-title-modal"
      closeAfterTransition
    >
      <DialogTitle id="edit-journal-name-title">Edit Journal Name</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          id="journal-title"
          label="Journal Name"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e.key)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} disabled={title === ""}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTitleModal;
