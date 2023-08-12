import './index.scss';
import axios from 'axios';
import Cabecalho from '../../components/header';
import { useEffect, useState } from 'react';

export default function Filme(){

    const[filme,setFilme]=useState('');
    const[filmes,setFilmes]=useState([]);

    const[page,setPage]=useState(Number(1));
    const[filtro,setFiltro]=useState('no-load');

    const[respResults,setRespResults]=useState('');
    const[display,setDisplay]=useState('none');
    const[image,setImage]=useState('');
                                        
    async function search(){

        let filtroInicial='';
        let url='';

        // Para não ser realizado um search quando a página for carregada
        if(filtro==='no-load'){

            url='http://www.omdbapi.com/?apikey=85a936bc&s='+filme+'&page='+page+'&type='+filtroInicial;
        }

        else{

            url='http://www.omdbapi.com/?apikey=85a936bc&s='+filme+'&page='+page+'&type='+filtro;
        }
        
        let resultados= await axios.get(url);

        // Para verificar os resultados (se for true ou false)
        const resp=resultados.data.Response;
        if(resp==='True'){

            setFilmes(resultados.data.Search);
            setImage(`${filmes.Poster}`);
            setRespResults('');
            setDisplay('flex');
        }
        
        else if(resp==='False'){

            setRespResults('Sem resultados');
            setFilmes([]);
        }
    }   

    // Avançar/Voltar página
    useEffect(() => {

        if(page!==1){

            search();
        }
    },[page]);

    // Aplicar filtro
    useEffect(() => {

        if(filtro!=='no-load'){

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

                                <option value=''>Todos</option>
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

                        <h2 style={{color:"#646464", fontWeight:"700", fontSize:"25px"}}>{respResults}</h2>
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
                                <tr  onMouseOver={() => {
                                    let img=item.Poster;
                                    if(item.Poster==='N/A'){
                                        img='/assets/images/default-placeholder.png';
                                    }
                                    setImage(img);
                                    }}>

                                    <td style={{fontWeight:"700"}}>{item.imdbID.substr(2,9)}</td>
                                    <td>{item.Title}</td>
                                    <td>{item.Year}</td>
                                    <td className='images'> <img src={image} alt='' draggable={false}/> </td>
                                           
                                </tr>
                                )}
                            </tbody>
                            
                        </table>

                        <div className='paginas' style={{display:`${display}`}}>

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