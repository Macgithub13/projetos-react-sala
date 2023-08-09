import './index.scss';
import Cabecalho from '../../components/header';
import Item from '../../components/item-compra/index';
import { useState } from 'react';

export default function Sorvete(){

    const[produto,setProduto]=useState('');
    const[preco,setPreco]=useState(0);
    const[produtos,setProdutos]=useState([]);
    const[total,setTotal]=useState(Number(0));
    const[mostrar,setMostrar]=useState('');

    let verifp=Number();

    function verif(e){

        setProduto(e.target.value);
        if(e.target.value==='Casquinha'){

            verifp=Number(2.50);
        }

        else if(e.target.value==='MilkShake'){

            verifp=Number(10.50);
        }

        else if(e.target.value==='Picolé'){

            verifp=Number(4.50);
        }
        
        verifp=verifp.toFixed(2);
        setPreco(verifp);
    }

    function adicionarItem(){

        let itemCompra={

            nome:produto,
            valor:preco
        }

        setProdutos([...produtos,itemCompra]);

        let p=Number(preco);

        setTotal(Number(total+p));
        setProduto('');
        setPreco('');
        setMostrar('true');
    }

    return(

        <div className='page-sorvete'>

            <Cabecalho/>

            <div className='container-sorvete'>

                <div className='conteudo'>
                    <div className='imagem-sorveteria'>

                        <div>Sorveteria</div>
                    </div>

                    <div className='adicionar'>

                        <div className='novo-item'>
                            <label>Novo Item</label>
                            <input type='text' value={produto} onChange={verif}/>
                        </div>

                        <div className='preco'> 
                            
                            <div id='cifrao'>R$</div>
                            <div>{preco}</div>
                        </div>
                        <button onClick= {adicionarItem}>Adicionar</button>
                    </div>
                    <div className='lista'>

                        <div className='header-lista'>

                            <h3>Lista de Compras</h3>
                            <div>R${total.toFixed(2)}</div>
                        </div>

                        <ul>
                            {produtos.map(item=>
                            <li>
                                <Item nome={item.nome} valor={item.valor} item={mostrar}/>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}