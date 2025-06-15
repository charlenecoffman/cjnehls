import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/CJNehlsLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>CJ Nehls</h1>
    </>
  )
}

export default App
