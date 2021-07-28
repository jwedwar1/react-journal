import React, { useState } from "react";
import { Paper, TextareaAutosize } from "@material-ui/core";
import { Delete, Edit, Save } from "@material-ui/icons";
import { JournalEntryProps } from "../types";

import "./JournalEntry.scss";

const JournalEntryContainer = ({
  bodyText,
  date,
  index,
  setDeleteIndex,
  setShowDeleteModal,
  editEntry,
}: JournalEntryProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [entryText, setEntryText] = useState(bodyText);

  const handleSave = (): void => {
    editEntry(index, entryText);
    setIsEdit(false);
  };

  const handleEdit = (): void => {
    setEntryText(bodyText);
    setIsEdit(true);
  };

  const handleDelete = (deleteIndex: number): void => {
    setDeleteIndex(deleteIndex);
    setShowDeleteModal(true);
  };

  return (
    <Paper variant="outlined" className="entry-container">
      <div className="entry-details">
        <p className="entry-date">{date}</p>
        <div className="entry-actions">
          {isEdit ? (
            <div
              id={`save-icon-wrapper-${index}`}
              className="icon-wrapper"
              onClick={handleSave}
            >
              <Save />
            </div>
          ) : (
            <div
              id={`edit-icon-wrapper-${index}`}
              className="icon-wrapper"
              onClick={handleEdit}
            >
              <Edit />
            </div>
          )}
          <div
            id={`delete-icon-wrapper-${index}`}
            className="icon-wrapper"
            onClick={() => handleDelete(index)}
          >
            <Delete />
          </div>
        </div>
      </div>
      <TextareaAutosize
        minRows={4}
        aria-label="journal entry text"
        placeholder="Write entry here..."
        value={isEdit ? entryText : bodyText}
        onChange={(e) => setEntryText(e.target.value)}
        disabled={!isEdit}
        className="entry-input"
      />
    </Paper>
  );
};

export default JournalEntryContainer;
