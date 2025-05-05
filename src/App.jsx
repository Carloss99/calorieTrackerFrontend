import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './pages/home'

const apiUrl = "http://127.0.0.1:5000/foods"


function App() {
  const [foods, setFoods] = useState([])
  const getFoods = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log("Nicole")
  }

  useEffect(() => {
    getFoods()
  }, [])

  return (
    <div className="App">
    
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
