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
             <div className='barHeader' id='barHeader'>
                <img src="./src/assets/image/android-chrome-192x192.png" alt="" className='picture'/>
                <h2>Add Um Produto</h2>
                <div className='BtnMenu'><a className='text' href="http://localhost:5173/"> 
                    <img src="./src/assets/menu.svg" alt="" className='imgMenu'/>
                </a></div>
            </div>
            <main className='produtomain'>
                {
                    produtos.map((elemento) => (
                        <section className='produtoC'>
                            <div className="produt">
                                <img className='image' src="./src/assets/image/meliuz.png" alt="" />
                                <div className='info'>
                                    <div className="titulo">Nome:{elemento.titulo}</div>
                                    <div>Preco:{elemento.valor}</div>
                                    <p>Descrição:{elemento.descricao}</p>
                                </div>
                                <div className='botoes'>
                                    <form action="/editar" method="post">
                                        <input type="hidden" name="id" id='id' value={elemento.id} />
                                        <button type="submit" className='botao'><a href="/editar" id='letra'>Editar</a></button>
                                    </form>
                                    <button className='botao'></button>
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