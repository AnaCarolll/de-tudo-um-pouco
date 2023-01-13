import styles from'../../pages/login/Login.css?inline'

import { Link } from 'react-router-dom';
const Login =  () => {
  return (
    <article className={styles}>
        <form  className="formularioLogin" action ="">
            <div className='containerInput'>
          
                <label htmlFor="email" className='escritaid'>E-mail:</label>
                <input  type="email" name="email" id="email" placeholder="E-mail" />
            </div>
            <div className="containerInput">
                <label htmlFor="senha" className='escritaid'>Senha:</label>
                <input type="password" placeholder="Senha"id='senha' />
            </div>
            <div>
               <button className='entrar'>Entrar</button>
            </div>
            <div className='pergunta'> Não possui Login? <Link to='/Cadastrar' className='pergunta' >Cadastrar-se!</Link>  x</div>
        </form>
        </article>

  );
};

export default Login;