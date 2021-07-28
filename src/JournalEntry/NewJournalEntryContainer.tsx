import { useState } from "react";
import { Paper, TextareaAutosize } from "@material-ui/core";
import { Delete, Save } from "@material-ui/icons";

import "./JournalEntry.scss";

type NewJournalEntryProps = {
  addEntry: (bodyText: string) => void;
  setShowNewEntry: (showNewEntry: boolean) => void;
  setShowDiscardNewEntryModal: (showModal: boolean) => void;
};

const NewJournalEntryContainer = ({
  addEntry,
  setShowNewEntry,
  setShowDiscardNewEntryModal,
}: NewJournalEntryProps) => {
  const [entryText, setEntryText] = useState("");

  const handleSave = (): void => {
    if (entryText !== "") {
      addEntry(entryText);
      setShowNewEntry(false);
    }
  };

  const handleDiscard = (): void => {
    setShowDiscardNewEntryModal(true);
  };

  return (
    <Paper variant="outlined" className="entry-container">
      <div className="entry-details">
        <p>New Journal Entry</p>
        <div className="entry-actions">
          {entryText !== "" && (
            <div
              id="save-icon-wrapper-new-entry"
              className="icon-wrapper"
              onClick={handleSave}
            >
              <Save />
            </div>
          )}
          <div
            id="discard-new-entry-icon-wrapper"
            className="icon-wrapper"
            onClick={handleDiscard}
          >
            <Delete />
          </div>
        </div>
      </div>
      <TextareaAutosize
        autoFocus
        minRows={4}
        aria-label="new journal entry input"
        placeholder="Write journal entry here..."
        value={entryText}
        onChange={(e) => setEntryText(e.target.value)}
        className="entry-input"
      />
    </Paper>
  );
};

export default NewJournalEntryContainer;
