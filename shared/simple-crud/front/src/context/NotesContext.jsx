import { createContext, useContext, useEffect, useState } from "react";
import { notesApi } from "../api/notesApi";


const NotesContext = createContext({
    notes : [], 
    setNotes : undefined, 
    addNote : undefined, 
    deleteNote : undefined, 
})

export const useNotes = () => useContext(NotesContext);




export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState(['Note 1 about','Get up in the morning', 'Test that app in the device']);

    // Fetch notes on mount
    useEffect(() => {
        // notesApi.fetchNotes().then(setNotes).catch(console.error);
    }, []);

    const currentContextValues = {
        notes, 
        setNotes, 
    }

 

    return <NotesContext.Provider value={currentContextValues}>
        {children}
    </NotesContext.Provider>


  

}


