export type JournalEntryProps = {
  bodyText: string;
  date: string;
  index: number;
  setShowDeleteModal: (showModal: boolean) => void;
  setDeleteIndex: (deleteIndex: number) => void;
  editEntry: (index: number, updatedEntry: string) => void;
};
