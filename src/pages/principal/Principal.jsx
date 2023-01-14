import '../principal/Principal.css'
import axios from "axios"
import { useState } from 'react';

function Principal() {
    const [produtos, setProdutos] = useState([]);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");

    async function did() {
        const res = await axios.get("https://ecomerceapi-com.onrender.com/produtos")
        setProdutos(res.data)
    }

    did()
    return (
        <>
            <section className='pesquisa'><input type="text" name="" id="oi" /></section>
            <main>
                {
                    produtos.map((elemento) => (
                        <section className='produtoC'>
                            <div className="produto">
                                <img className='imagem' src="" alt="" />
                                <div className='info'>
                                    <div className="titulo">Nome:{elemento.titulo}</div>
                                    <div>Preco:{elemento.valor}</div>
                                    <p>Descrição:{elemento.descricao}</p>
                                </div>
                                <div className='botoes'>
                                    <form action="/editar" method="post">
                                        <input type="hidden" name="id" value={elemento.id} />
                                        <button type="submit">Editar <a href="/editar"></a></button>
                                    </form>
                                    <button></button>
                                </div>
                            </div>
                        </section>
                    )
                    )
                }
            </main>
        </>
    )
}



export default Principal