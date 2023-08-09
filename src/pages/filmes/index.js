import './index.scss';
import axios from 'axios';
import Cabecalho from '../../components/header';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';

export default function Filme(){

    const[filme,setFilme]=useState('');
    const[filmes,setFilmes]=useState([]);
    const[page,setPage]=useState(Number(1));
    const[filtro,setFiltro]=useState('');

    let click='false';

    function mudarPagina(){

        click='true';
     }

    async function search(){

        if(click==='true'){

            setPage(page+1);
        }

        let url='http://www.omdbapi.com/?apikey=85a936bc&s='+filme+'&page='+page+'&type='+filtro;

        let resultados= await axios.get(url);

        setFilmes(resultados.data.Search);

        click='false';
    }

    return(

        <div className='page-filme'>

            <Cabecalho/>

            <div className='container-page'>

                <div className='conteudo'>

                    <div className='image'>

                        <div>IMDB</div>
                    </div>

                    <div className='consulta'>
                        <div className='header-consulta'>

                            <h3>Consulta de Filmes</h3>
                            <select>

                                <option onClick={() => {setFiltro('')}}>Todos</option>
                                <option onClick={() => {setFiltro('movie')}}>Filme</option>
                                <option onClick={() => {setFiltro('series')}}>Série</option>
                                <option onClick={() => {setFiltro('games')}}>Jogo</option>
                            </select>
                        </div>
                        <div className='button-pesquisar'>

                            <div>

                                <label>Nome</label>
                                <input type='text' value={filme} onChange={(e) => setFilme(e.target.value)}/>
                            </div>

                            <button onClick={search}>
                                <img src='/assets/images/icon-pesquisar.png' alt=''/>
                            </button>
                        </div>                      
                    </div>

                    <div className='resultados'>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{color:"#A0960D"}}>ID</th>
                                    <th>Title</th>
                                    <th>Year</th>
                                </tr>   
                            </thead>

                            <tbody>
                                {filmes.map(item=> 
                                <tr>
                                    <td style={{fontWeight:"700"}}>{item.imdbID.substr(2,9)}</td>
                                    <td>{item.Title}</td>
                                    <td>{item.Year}</td>
                                    <td> <img src={item.Poster} alt=''/></td>
                                    
    
                                </tr>
                                )}
                            </tbody>
                        </table>

                        <button onClick={mudarPagina} onClickCapture={search}>Próximo</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}