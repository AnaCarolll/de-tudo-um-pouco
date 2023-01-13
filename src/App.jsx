import { useState } from 'react'

import './App.css'

//paginas
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
// import Editar from  './pages/editar/Editar.jsx'
import Entrada from './pages/login/Login.jsx'
// import Cadastrar from './pages/cadastro/Cadastro.jsx'
const App = () => {
  return (
    <Router>
    <Switch>
      
    <Route path='/Entrada' exact  component={Entrada}/>

    </Switch>
     

     
    </Router>
  );
};

export default App;
