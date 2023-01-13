import { useState } from 'react'

import './App.css'
import { Routes, Route, Link} from "react-router-dom"

import Editar from './pages/editar/Editar.jsx'
import Entrada from './pages/login/Login.jsx'
import Cadastrar from './pages/cadastro/Cadastro.jsx'
function App() {
  return (
    <Routes>
      <Switch>
        <Route path='/Cadastrar' element={<Cadastrar/>}/>
      </Switch>
    </Routes>
  )
}

export default App
