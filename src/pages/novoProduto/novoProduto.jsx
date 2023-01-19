import '../novoProduto/novoProduto.css'
// import axios from "axios"
import { useState } from 'react';

function NovoProduto() {
    return (
        <div className='tudo'>
            <div className='barHeader' id='barHeader'>
                <img src="./src/assets/image/android-chrome-192x192.png" alt="" className='picture'/>
                <h2>Add Um Produto</h2>
                <div className='BtnMenu'><a className='text' href="http://localhost:5173/"> 
                    <img src="./src/assets/menu.svg" alt="" className='imgMenu'/>
                </a></div>
            </div>
            <form className="fAddProduto" action="">
                <div className='Input'>
                    <label htmlFor="Nome" className='escritaid'>Nome do Produto:</label>
                    <input type="Nome" name="Nome" id="Nome" placeholder="Nome do Produto" />
                </div>
                <div className='Input'>
                    <label htmlFor="foto" className='escritaid'>Foto:</label>
                    <button type="submit" className='BtnFoto'>
                        <input type="file" src="./src/assets/menu.svg" alt="" className='inpFoto'/>
                    </button>
                </div>
                <div className="Input">
                    <label htmlFor="produto" className='escritaid'>Descrição do produto</label>
                    <input type="product" placeholder="Produto" id='produto' />
                </div>
                <div className="Input">

                    <label htmlFor="preço" className='escritaid'>Preço:</label>
                    <input type="preco" placeholder="Preço" id='preço' />
                </div>
                <div>
                    <button className='BtnAdicionar'>Add Produto</button>
                </div>
            </form>
        </div>
    );
};

export default NovoProduto;