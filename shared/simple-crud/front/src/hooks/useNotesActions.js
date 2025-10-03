import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { notesApi } from "../api/notesApi";

export function useAddNote() {
  const { refetchNotes } = useNotes();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addNote = async (text) => {
    setLoading(true);
    setError(null);
    try {
      const newNote = await notesApi.create(text);
      await refetchNotes()
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { addNote, loading, error };
}

export function useDeleteNote() {
  const { refetchNotes } = useNotes();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteNote = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await notesApi.delete(id);
      await refetchNotes();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteNote, loading, error };
}
