import { useState } from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { Edit, InfoRounded, NightsStay, WbSunny } from "@material-ui/icons";
import DeleteEntryModal from "../DeleteEntryModal/DeleteEntryModal";
import DiscardNewEntryModal from "../DiscardNewEntryModal/DiscardNewEntryModal";
import EditTitleModal from "../EditTitleModal/EditTitleModal";
import JournalEntryContainer from "../JournalEntry/JournalEntryContainer";
import NewJournalEntryContainer from "../JournalEntry/NewJournalEntryContainer";
import useJournalEntries from "../Hooks/useJournalEntries";
import useJournalTitle from "../Hooks/useJournalTitle";

import "./Journal.scss";

type JournalProps = {
  darkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
};

const Journal = ({ darkMode, setDarkMode }: JournalProps) => {
  const [hasTitleLoaded, setHasTitleLoaded] = useState(false);
  const [savedTitle, saveTitle] = useJournalTitle(setHasTitleLoaded);
  const [showEditTitleModal, setShowEditTitleModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(-1);
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [entries, addEntry, deleteEntry, editEntry] = useJournalEntries();
  const [showDiscardNewEntryModal, setShowDiscardNewEntryModal] =
    useState(false);

  const hasEntries = entries.length > 0;

  return (
    <Box bgcolor="primary.main">
      <Grid container direction="column" id="journal-grid">
        <header className="journal-header">
          <div className="journal-title">
            <h1>{savedTitle === "" ? "Your Name's Journal" : savedTitle}</h1>
            <div
              id="edit-icon-wrapper"
              className="icon-wrapper"
              onClick={() => setShowEditTitleModal(true)}
            >
              <Edit />
            </div>
          </div>
          <Button
            id="new-entry-button"
            variant="outlined"
            onClick={() => setShowNewEntry(true)}
          >
            Add New Entry
          </Button>
          <div className="dark-mode-toggle">
            {darkMode ? (
              <div
                id="dark-mode-icon"
                className="icon-wrapper"
                onClick={() => setDarkMode(!darkMode)}
              >
                <WbSunny />
              </div>
            ) : (
              <div
                id="light-mode-icon"
                className="icon-wrapper"
                onClick={() => setDarkMode(!darkMode)}
              >
                <NightsStay />
              </div>
            )}
          </div>
        </header>
        {showNewEntry && (
          <div className="journal-entries">
            <NewJournalEntryContainer
              addEntry={addEntry}
              setShowNewEntry={setShowNewEntry}
              setShowDiscardNewEntryModal={setShowDiscardNewEntryModal}
            />
          </div>
        )}
        {hasEntries ? (
          <div className="journal-entries">
            {entries.map((entry, index) => {
              return (
                <JournalEntryContainer
                  key={entry.date}
                  bodyText={entry.bodyText}
                  date={entry.date}
                  index={index}
                  setShowDeleteModal={setShowDeleteModal}
                  setDeleteIndex={setDeleteIndex}
                  editEntry={editEntry}
                />
              );
            })}
          </div>
        ) : (
          <div className="no-entries-message">
            <InfoRounded />
            You have no journal entries. Add a new entry to start your journal.
          </div>
        )}

        {hasTitleLoaded && (
          <EditTitleModal
            handleClose={() => setShowEditTitleModal(false)}
            open={showEditTitleModal}
            savedTitle={savedTitle}
            saveTitle={saveTitle}
          />
        )}
        <DeleteEntryModal
          handleClose={() => setShowDeleteModal(false)}
          open={showDeleteModal}
          deleteIndex={deleteIndex}
          deleteEntry={deleteEntry}
        />
        <DiscardNewEntryModal
          handleClose={() => setShowDiscardNewEntryModal(false)}
          open={showDiscardNewEntryModal}
          setShowNewEntry={setShowNewEntry}
        />
      </Grid>
    </Box>
  );
};

export default Journal;
