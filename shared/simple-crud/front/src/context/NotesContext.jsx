import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { notesApi } from "../api/notesApi";


const NotesContext = createContext({
    notes : [], 
    refetchNotes : undefined, 
})

export const useNotes = () => useContext(NotesContext);

// ['Note 1 about','Get up in the morning', 'Test that app in the device']


export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState(undefined);
    
    const refetchNotes = useCallback(async() => {
        notesApi.fetchNotes().then(setNotes).catch(console.error);
    } , [])
    
    useEffect(() => {
        refetchNotes()
    }, []);

    const currentContextValues = {
        notes, 
        refetchNotes
    }

    return <NotesContext.Provider value={currentContextValues}>
        {children}
    </NotesContext.Provider>
}


