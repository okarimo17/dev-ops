import { useState } from "react";
import { useNotes } from "../context/NotesContext";
import { notesApi } from "../api/notesApi";

export function useAddNote() {
  const { setNotes } = useNotes();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addNote = async (text) => {
    setLoading(true);
    setError(null);
    try {
      const newNote = await notesApi.create(text);
      setNotes((prev) => [...prev, newNote]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { addNote, loading, error };
}

export function useDeleteNote() {
  const { setNotes } = useNotes();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteNote = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await notesApi.delete(id);
      // setNotes((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteNote, loading, error };
}
