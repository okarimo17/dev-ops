import { useState, useMemo, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [hostInfo, setHostInfo] = useState("Loading...")
  
  const getHostInfo = useMemo(() => async ()=>{
    const response = await fetch("http://localhost:5000/")
    const hostname = response.json()
    setHostInfo(hostname)
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
