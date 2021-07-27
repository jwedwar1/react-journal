export interface DeleteEntryModalInterface {
  handleClose: () => void;
  open: boolean;
  deleteIndex: number;
  deleteEntry: (deleteIndex: number) => void;
}

export interface DiscardNewEntryModalInterface {
  handleClose: () => void;
  open: boolean;
  setShowNewEntry: (showNewEntry: boolean) => void;
}

export interface EditTitleDialogInterface {
  handleClose: () => void;
  open: boolean;
  savedTitle: string;
  saveTitle: (newtitle: string) => void;
}

export interface JournalEntryInterface {
  bodyText: string;
  date: string;
  index: number;
  setShowDeleteModal: (showModal: boolean) => void;
  setDeleteIndex: (deleteIndex: number) => void;
  editEntry: (index: number, updatedEntry: string) => void;
}

export interface JournalInterface {
  darkMode: boolean;
  setDarkMode: (isDarkMode: boolean) => void;
}

export interface NewJournalEntryInterface {
  addEntry: (bodyText: string) => void;
  setShowNewEntry: (showNewEntry: boolean) => void;
  setShowDiscardNewEntryModal: (showModal: boolean) => void;
}

export interface SaveJournalEntryInterface {
  bodyText: string;
  date: string;
}
