import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Editar from './pages/editar/Editar.jsx'
import Login from './pages/login/Login.jsx'
// import Cadastrar from './pages/cadastro/Cadastro.jsx'
function App (){
  return (
    <Routes>
  
        <Route path='/Login' element={<Login/>}/>
    
    </Routes>
  )
}

export default App
