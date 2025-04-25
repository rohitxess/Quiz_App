import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User } from './components/User'
import { Admin } from './components/Admin'

// Add routing here 

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='admin' element={<Admin/>}></Route>
        <Route path='user' element={<User/>}></Route>
å      </Routes>
    </BrowserRouter>
  )
}

export default App
