import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import Editar from './pages/editar/Editar.jsx'
import Entrada from './pages/login/Login.jsx'
import Cadastrar from './pages/cadastro/Cadastro.jsx'

function App() {
  return (
    <Routes>
      <div className="App">
        <ul>
          <li><Link to='/cadastro'>cadastro</Link></li>
        </ul>
        <Switch>
          <Route exact path='/cadastro'>
            <Cadastrar />
          </Route>
        </Switch>
      </div>
    </Routes>
  )
}

export default App
