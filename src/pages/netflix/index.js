import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.scss';

export default function Netflix(){

    const[buscar,setBuscar]=useState('');
    const typeF='movie';
    const typeG='game';
    const typeS='series';
    const[resultadosF,setResultadosF]=useState([]);
    const[resultadosG,setResultadosG]=useState([]);
    const[resultadosS,setResultadosS]=useState([]);

    async function searchFilmes(){


        let urlF='http://www.omdbapi.com/?apikey=85a936bc&s='+buscar+'&type='+typeF;
        let urlG='http://www.omdbapi.com/?apikey=85a936bc&s='+buscar+'&type='+typeG;
        let urlS='http://www.omdbapi.com/?apikey=85a936bc&s='+buscar+'&type='+typeS;
        //http://www.omdbapi.com/?apikey=85a936bc&s=Spider Man&type=movie
        let searchF= await axios.get(urlF);
        let searchG= await axios.get(urlG);
        let searchS= await axios.get(urlS);

        setResultadosF(searchF.data.Search);     
        setResultadosG(searchG.data.Search);
        setResultadosS(searchS.data.Search);
    }

    return(

        <div className='page-netflix'>

            <div className='container-friends'>

                <img src='/assets/images/image-friends.png' alt=''/>
                <header className='cabecalho'>

                    <div className='menu-header'>

                        <div className='logo'>

                            <img src='/assets/images/dark-header.png' alt=''/>
                            <p>Portifolio.me</p>
                        </div>

                        <nav className='menu'>

                            <Link className='Link-menu'>Início</Link>
                            <Link className='Link-menu'>Séries</Link>
                            <Link className='Link-menu'>Filmes</Link>
                            <Link className='Link-menu'>Entretenimento</Link>
                            <Link className='Link-menu'>Minha lista</Link>
                        </nav>
                    </div>

                    <div className='pesquisa'>

                        <div className='pesquisar'>

                            <input placeholder='Pesquise pelo título' type='text' value={buscar} onChange={(e) => {
                                setBuscar(e.target.value)
                                }}/>
                            <button onClick={searchFilmes}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7372 14.0706L12.7159 11.2465C13.6907 10.0823 14.2196 8.64459 14.2176 7.16452C14.2176 5.8464 13.8007 4.55789 13.0196 3.46191C12.2385 2.36594 11.1282 1.51173 9.82925 1.00731C8.53028 0.502888 7.10094 0.370908 5.72196 0.62806C4.34299 0.885212 3.07631 1.51995 2.08213 2.452C1.08794 3.38404 0.410893 4.57155 0.136597 5.86434C-0.137698 7.15713 0.00308013 8.49714 0.54113 9.71492C1.07918 10.9327 1.99033 11.9736 3.15937 12.7059C4.32841 13.4382 5.70283 13.829 7.10882 13.829C8.68756 13.8309 10.2211 13.335 11.463 12.4212L14.4753 15.2536C14.5579 15.3317 14.6562 15.3936 14.7645 15.4359C14.8728 15.4782 14.9889 15.5 15.1062 15.5C15.2236 15.5 15.3397 15.4782 15.448 15.4359C15.5563 15.3936 15.6545 15.3317 15.7372 15.2536C15.8204 15.1761 15.8865 15.084 15.9317 14.9825C15.9768 14.881 16 14.7721 16 14.6621C16 14.5521 15.9768 14.4432 15.9317 14.3417C15.8865 14.2402 15.8204 14.1481 15.7372 14.0706ZM1.77721 7.16452C1.77721 6.17593 2.0899 5.20955 2.67575 4.38757C3.26159 3.56558 4.09428 2.92493 5.0685 2.54661C6.04273 2.1683 7.11474 2.06931 8.14897 2.26218C9.1832 2.45504 10.1332 2.93109 10.8788 3.63013C11.6245 4.32916 12.1323 5.21979 12.338 6.18938C12.5437 7.15898 12.4381 8.16399 12.0346 9.07732C11.6311 9.99066 10.9477 10.7713 10.0709 11.3205C9.19413 11.8698 8.16332 12.1629 7.10882 12.1629C5.69479 12.1629 4.33867 11.6363 3.3388 10.6989C2.33893 9.76154 1.77721 8.49018 1.77721 7.16452Z" fill="#E8E8E8"/>
                                </svg>
                            </button>
                        </div>

                        <div className='perfil'>

                            <div>Nome</div>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.833984 17.5V15.5H3.25065V8.5C3.25065 7.11667 3.75412 5.88733 4.76107 4.812C5.76801 3.73667 7.07704 3.03267 8.68815 2.7V0.5H12.3132V2.7C13.9243 3.03333 15.2333 3.73767 16.2402 4.813C17.2472 5.88833 17.7507 7.11733 17.7507 8.5V15.5H20.1673V17.5H0.833984ZM10.5007 20.5C9.83607 20.5 9.26694 20.304 8.79328 19.912C8.31961 19.52 8.08318 19.0493 8.08398 18.5H12.9173C12.9173 19.05 12.6805 19.521 12.2068 19.913C11.7331 20.305 11.1644 20.5007 10.5007 20.5ZM5.66732 15.5H15.334V8.5C15.334 7.4 14.8607 6.45833 13.9142 5.675C12.9677 4.89167 11.8298 4.5 10.5007 4.5C9.17148 4.5 8.03364 4.89167 7.08711 5.675C6.14058 6.45833 5.66732 7.4 5.66732 8.5V15.5Z" fill="#E8E8E8"/>
                            </svg>
                            <select>

                                <img src='' alt=''/>
                            </select>  
                        </div>          
                    </div>
                </header>

                <div className='sinopse'>

                    <h3 style={{fontFamily: "Oleo Script, cursive"}}>Friends</h3>
                    <p>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</p>
                    <button id='button-assitir'> 
                        <svg width="15" height="20" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.82663e-06 2.20701L4.04128e-06 27.386C0.00080513 27.6409 0.0712988 27.8908 0.203896 28.1087C0.336493 28.3267 0.526173 28.5044 0.752518 28.6228C0.978865 28.7412 1.23331 28.7958 1.48845 28.7808C1.7436 28.7657 1.98979 28.6815 2.20053 28.5372L20.433 15.9477C21.189 15.426 21.189 14.1698 20.433 13.6467L2.20053 1.05717C1.99023 0.911444 1.74392 0.825989 1.48834 0.810086C1.23277 0.794182 0.977716 0.84844 0.750893 0.966963C0.524067 1.08549 0.334143 1.26374 0.201761 1.48236C0.0693779 1.70098 -0.000400533 1.95161 3.82663e-06 2.20701Z" fill="black"/>
                        </svg>
                    Assistir</button>
                </div>
            </div>
            
            <div className='resultados'>

                <h4>Resultados da busca</h4>
                
                <h5>Filmes</h5>
                <div>
                    {resultadosF.map(item => 
                        
                        <img src={item.Poster} alt=''/> )}
                </div>

                <h5>Jogos</h5>
                <div>
                    {resultadosG.map(item => 
                        
                        <img src={item.Poster} alt=''/> )}
                </div>

                <h5>Séries</h5>
                <div>
                    {resultadosS.map(item => 
                        
                        <img src={item.Poster} alt=''/> )}
                </div>
            </div>
        </div>
    );
}