import style from '../../pages/cadastro/Cadastro.css'

function Cadastrar  ()  {
    return (
  
          <form  className="formCadastro" action ="">
              <div className='Input'>
            
                  <label htmlFor="nome" className='escritaid'>Nome:</label>
                  <input  type="nome" name="nome" id="nome" placeholder="Nome Completo" />
              </div>
              <div className='Input'>
            
                  <label htmlFor="email" className='escritaid'>E-mail:</label>
                  <input  type="email" name="email" id="email" placeholder="E-mail" />
              </div>
              <div className="Input">

                  <label htmlFor="senha" className='escritaid'>Senha:</label>
                  <input type="password" placeholder="Senha"id='senha' />
              </div>
              <div>
                 <button className='BtnCadastrar'>Cadastrar</button>
              </div>
              <div className='Alternativa'> Já possui uma Conta? <a className='text' href="http://"> Entrar</a></div>
          </form>
     
  
    );
  };
  
  export default Cadastrar;