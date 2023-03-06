import { useState } from 'react'
import './App.css'
import NavBar from './componets/NavBar'
import Card from './componets/Card'
import ChangeTemp from './componets/ChangeTemp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <NavBar/>

     <Card/>

     <ChangeTemp/>
    </div>
  )
}

export default App
