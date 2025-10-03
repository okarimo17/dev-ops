import { useState, useMemo, useEffect, useRef } from 'react'
import { useNotes } from '../context/NotesContext';
import { useAddNote } from '../hooks/useNotesActions';

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

function AddNoteForm({notes}) {
  const noteInputRef = useRef();
  const { addNote, loading, error } = useAddNote();

  const handleFormSubmit = async (ev) => {
    ev.preventDefault()
    const newNote = noteInputRef.current.value 
    if(newNote.trim() === '') return;
    await addNote(newNote);
    noteInputRef.current.value = ''
  };

  return (
   <form onSubmit={handleFormSubmit} className="mb-8 my-10">    
      <div className='max-w-xl mx-auto flex gap-2  mb-4'>
        <input
          type="text"
          className="flex-grow p-3 rounded-lg border-2
                    border-gray-700 
                    bg-black/50 
                    text-gray-200 placeholder-gray-500 
                    focus:outline-none focus:border-indigo-500
                  "
          ref={noteInputRef}
          placeholder="Write a note..."
          disabled={loading}
        />      
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
            py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 cursor-pointer"
          disabled={loading}
          type='submit'
        >
          {loading ? "Adding..." : "Add Note"}
        </button>
      </div>
      {error && <p className='text-red-600'>{error}</p>}
    </form>
  )


 
}

export default AddNoteForm
