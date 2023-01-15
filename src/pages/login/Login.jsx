import '../login/Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <article >
        <form  className="formularioLogin" action ="">
            <div className='containerInput'>
                <label htmlFor="email" className='escritaid'>E-mail:</label>
                <input  type="email" name="email" id="e-mail" placeholder="E-mail" />
            </div>
            <div className="containerInput">
                <label htmlFor="senha" className='escritaid'>Senha:</label>
                <input type="password" placeholder="Senha"id='s-enha' />
            </div>
            <div>
               <button className='entrar'>Entrar</button>
            </div>
            <div className='pergunta'> Não possui Login? <Link to='/cadastro' className='pergunta1' >Cadastrar-se!</Link></div>
        </form>
        </article>

  );
};

export default Login;