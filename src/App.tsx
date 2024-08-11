import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getDatabase } from "firebase/database";

function App() {
  const [count, setCount] = useState(0)

  const database = getDatabase();

  
  return (
  <div className=""></div>
  )
}

export default App
