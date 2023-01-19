import '../cadastro/Cadastro.css'
// import axios from "axios"
import { useState } from 'react';

function Cadastrar() {

    const [usuarios, setUsuarios] = useState([]);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function postApi() {
        await axios.post("https://ecomerceapi-com.onrender.com/produtos", { nome, email, senha });
    }

    return (

        <form className="formCadastro">
            <label htmlFor="nome" className='escritaid'>Nome:</label>
            <input className='nome' id='nome'
                type="text"
                placeholder="nome"
                onChange={(e) => setNome(e.target.value)}
            />
            <label htmlFor="email" className='escritaid'>E-mail:</label>
            <input className='email' id='email'
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="senha" className='escritaid'>Senha:</label>
            <input className='senha' id='senha'
                type="password"
                placeholder="senha"
                onChange={(e) => setSenha(e.target.value)}
            />
            <label htmlFor="ConfirmaSenha" className='escritaid'>Comfirme a Senha:</label>
            <input className='ConfirmaSenha' id='ConfirmaSenha'
                type="password"
                placeholder="Confirmar Senha"
                onChange={(e) => setSenha(e.target.value)}
            />
            <button className='BtnCadastrar' onClick={postApi}>Cadastrar</button>
            <div className='Alternativa'> Já possui uma Conta? <a className='txt' href="http://localhost:5173/login"> Entrar</a></div>
        </form>

    );
};

export default Cadastrar;