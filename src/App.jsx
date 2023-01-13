import { useState } from 'react'

import './App.css'
import {BrowserRouter as Routes, Route } from 'react-router-dom'

import Editar from './pages/editar/Editar.jsx'
import Entrada from './pages/login/Login.jsx'
import Cadastrar from './pages/cadastro/Cadastro.jsx'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Cadastro' element={Cadastrar}/>
      </Routes>
    </div>
  
  )
}

export default App
