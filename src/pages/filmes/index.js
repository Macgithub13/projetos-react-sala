import './index.scss';
import axios from 'axios';
import Cabecalho from '../../components/header';
import { useEffect, useState } from 'react';
import ReactImageZoom from 'react-image-zoom';

export default function Filme(){

    const[filme,setFilme]=useState('');
    const[filmes,setFilmes]=useState([]);
    const[page,setPage]=useState(Number(1));
    const[filtro,setFiltro]=useState(null);
    const[display,setDisplay]=useState('none');

    async function search(){

        let url='http://www.omdbapi.com/?apikey=85a936bc&s='+filme+'&page='+page+'&type='+filtro;
        // http://www.omdbapi.com/?apikey=85a936bc&s=Spider Man&page=2&type=null
        let resultados= await axios.get(url);

        setFilmes(resultados.data.Search);
        console.log(filtro);
    }

    useEffect(() => {

        if(page!==1){

            search();
        }
    },[page]);

    useEffect(() => {

        if(filtro!==null){

            search();
        }

    },[filtro])
    
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
                            <select name='Filtrar' onChange={(e) => {setFiltro(e.target.value)}}>

                                <option value=''>Filtrar</option>
                                <option value='movie'>Filme</option>
                                <option value='game'>Jogos</option>
                                <option value='series'>Séries</option>
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

                        <div className='paginas'>

                            <div className='avancar-voltar-pages'>

                                <button onClick={() => {

                                    if(page!==1){setPage(page-1)}
                                }}>Voltar</button>
                                <button onClick={() =>{setPage(page+1)}}>Próximo</button>
                            </div>

                            <div id='enumerar'>Página: {page}</div>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
    );
}