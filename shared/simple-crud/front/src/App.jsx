import { useState, useMemo, useEffect } from 'react'
import viteLogo from '/vite.svg'
// import './assets/App.css'

import Notes from './components/Notes'
import AddNoteForm from './components/AddNoteForm'
import { hostnameApi } from './api/hostnameApi'



function App() {
  const [hostname,setHostname] = useState('loading...')
  const getHostInfo = useMemo(() => async ()=>{
    try{
      const response = await fetch(`${backendUrl}`)
      const hostname = response.json()
      setHostInfo(hostname)
    }catch(error){
      console.error(error.message)
    }
  })
  
  useEffect(async ()=>{
    hostnameApi.fetchHostname().then(setHostname)
  }, [])

  return (
    <>
      <div className='flex justify-center'>
        <img src={viteLogo} className="logo" alt="Vite logo" />    
      </div>
      <h1 className="text-xl text-center my-2">Notes App: {hostname}</h1>      
      <AddNoteForm />
      <Notes />
      <p className="text-gray-400 static bottom-0">
        For testing purposes only...
      </p>
    </>
  )
}

export default App
