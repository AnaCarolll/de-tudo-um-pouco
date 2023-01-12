import { useState } from 'react'

import './App.css'
import Editar from './pages/editar/Editar.jsx'
import Entrada from './pages/login/Login.jsx'
function App() {
  return (
    <div className="App">
      <Entrada/>
      <Editar/>
      </div>
 
  )
}

export default App
