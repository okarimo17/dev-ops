import { useState, useMemo, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [hostInfo, setHostInfo] = useState("Loading...")
  const getHostInfo = useMemo(() => async ()=>{
    try{
      const response = await fetch(`${backendUrl}`)
      const hostname = response.json()
      setHostInfo(hostname)
    }catch(error){
      console.error(error.message)
    }
  })

  useEffect(()=>{
    getHostInfo()
  }, [])

  return (
    <>
      <div>
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
      </div>
      <h1>Node + React</h1>
      <div className="card">
        <button>
          {hostInfo}
        </button>
      </div>
      <p className="read-the-docs">
        For testing purposes only...
      </p>
    </>
  )
}

export default App
