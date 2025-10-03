import { useState, useMemo, useEffect } from 'react'
import viteLogo from '/vite.svg'
// import './assets/App.css'

import Notes from './components/Notes'
import AddNoteForm from './components/AddNoteForm'


// const backendUrl = import.meta.env.VITE_BACKEND_URL;
// const getHostInfo = useMemo(() => async ()=>{
//   try{
//     const response = await fetch(`${backendUrl}`)
//     const hostname = response.json()
//     setHostInfo(hostname)
//   }catch(error){
//     console.error(error.message)
//   }
// })

// useEffect(()=>{
//   getHostInfo()
// }, [])

function App() {

  return (
    <>
      <div className='flex justify-center'>
        <img src={viteLogo} className="logo" alt="Vite logo" />    
      </div>
      <h1 className="text-xl text-center my-2">Notes App</h1>      
      <AddNoteForm />

      <Notes />      

      <p className="text-gray-400 static bottom-0">
        For testing purposes only...
      </p>
    </>
  )
}

export default App
