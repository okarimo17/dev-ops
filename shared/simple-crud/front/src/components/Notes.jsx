import { useState, useMemo, useEffect } from 'react'
import { useNotes } from '../context/NotesContext'
import { useDeleteNote } from '../hooks/useNotesActions';
import { LoadingIcon } from './LoadingIcon';

// const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Notes() {
  const {notes} = useNotes();
  if (!notes) return <LoadingIcon  className='w-8 h-8 mb-5'/>;
  if (!notes.length) return <p className='mb-5'>No notes yet.</p>;
  return (
    <div className='max-w-2xl my-5 mx-auto'>
        { notes.map(note => (          
          <NoteItem key={note.id} id={note.id} content={note.content} />           
        ))}
    </div>
  )
}

function NoteItem( {content , id} ) {
  const { deleteNote, loading, error } = useDeleteNote();
  return  <div className='border-b-1 border-gray-500 py-2 flex justify-between items-center '>                
    <div className="flex-1 min-w-0 break-words pr-4"> 
      {content}
    </div>    
    
    {
      loading ?  (
        <LoadingIcon />
      ) : (
        <button className="cursor-pointer flex-shrink-0 text-red-500 opacity-70 hover:opacity-100 ml-2 transition-opacity" onClick={() => deleteNote(id)} disabled={loading}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>                       
      )
    }
  </div>
}

export default Notes
