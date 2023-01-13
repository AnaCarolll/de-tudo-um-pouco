import '../editar/Editar.css'
import brinco from '../../assets/image/meliuz.png'
function Editar(){
    return(
        <form  className="container">
            <div className='imagem'>
         <img src={brinco} width = "196px" />
            </div>
            <div>
                <input className='nomedoproduto' type="text" placeholder="Nome do Produto"/> 
                <input className='preco' type="text" name="preco" id="" placeholder='Preço do Produto' />
            </div>

            <div>
                <input className='descricao'type="text" name="text" id="" placeholder="Descrição do Produto" />
                <button className='editar'>Editar</button>

            </div>
        </form>
    )
}
export default Editar;