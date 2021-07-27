import { useEffect, useState } from "react";
import {
  JournalEntryInterface,
  SaveJournalEntryInterface,
} from "../interfaces";

const useJournalEntries = () => {
  const [entries, setEntries] = useState<SaveJournalEntryInterface[]>([]);

  async function fetchEntries(): Promise<JournalEntryInterface[]> {
    const storedEntries = window.localStorage.getItem("journalEntries");
    if (storedEntries) {
      return JSON.parse(storedEntries);
    }
    return [] as JournalEntryInterface[];
  }

  const saveEntries = (journalEntries: SaveJournalEntryInterface[]): void => {
    window.localStorage.setItem(
      "journalEntries",
      JSON.stringify(journalEntries)
    );
  };

  const addEntry = (newEntry: string): void => {
    const now = new Date();
    const entryDate = now.toLocaleDateString() + " " + now.toLocaleTimeString();
    const formattedEntry: SaveJournalEntryInterface = {
      bodyText: newEntry,
      date: entryDate,
    };
    const newEntries = [formattedEntry, ...entries];
    setEntries(newEntries);
    saveEntries(newEntries);
  };

  const deleteEntry = (index: number): void => {
    const newEntries = [
      ...entries.slice(0, index),
      ...entries.slice(index + 1),
    ];
    setEntries(newEntries);
    saveEntries(newEntries);
  };

  const editEntry = (index: number, updatedEntry: string): void => {
    let newEntries = [...entries];
    newEntries[index].bodyText = updatedEntry;
    setEntries(newEntries);
    saveEntries(newEntries);
  };

  useEffect(() => {
    fetchEntries()
      .then((entries) => setEntries(entries))
      .catch((error) => console.log("error: ", error));
  }, []);

  return [entries, addEntry, deleteEntry, editEntry] as const;
};

export default useJournalEntries;
