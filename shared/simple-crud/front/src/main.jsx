import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import App from './App.jsx'
import { NotesProvider } from './context/NotesContext.jsx'

createRoot(document.getElementById('root')).render(
  <NotesProvider>
    <App />
  </NotesProvider>
)
