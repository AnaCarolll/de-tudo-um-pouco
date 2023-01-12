import styles from'../../pages/login/Login.css'


function Entrada  ()  {
  return (

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
            <div className='pergunta'> Não possui Cadastro? <a className='text' href="http://"> Cadastra-se</a></div>
        </form>
   

  );
};

export default Entrada;
