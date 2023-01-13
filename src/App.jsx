import './App.css'
import { Routes, Route } from 'react-router-dom'
import Editar from './pages/editar/Editar.jsx'
import Login from './pages/login/Login.jsx'
import Cadastrar from './pages/cadastro/Cadastro.jsx'
function App (){
  return (
    <main>
     <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/cadastrar' element={<Cadastrar/>}/>
     <Route path='/editar' element={<Editar/>}/>
     {/* <Route path='/' /> */}
   
    </Routes>
    </main>
  )
}

export default App
