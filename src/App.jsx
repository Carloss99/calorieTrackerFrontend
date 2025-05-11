import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
// 

import './App.css'
import Home from './pages/home'
import Login from './pages/Login'
import Register from './pages/register'

export const apiUrl = "http://127.0.0.1:5000"


function App() {
  const [foods, setFoods] = useState([])
  // const getFoods = async () => {
  //   const response = await fetch(apiUrl)
  //   const data = await response.json()
  //   console.log(data)
  // }

  // useEffect(() => {
  //   getFoods()
  // }, [])

  return (
    <div className="App">
    
      <Routes>
        <Route exact path="/" element={<Login/>}/>

        <Route exact path="/home" element = {<Home/>}/>

        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
