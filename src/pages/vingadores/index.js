import './index.scss';
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Vingadores(){

    const[nomeHeroi,setNomeHeroi]=useState('');
    const[herois,setHerois]=useState([]);
    const[offset,setOffset]=useState(0);

    async function search(){

        let p=true;
        let url='http://gateway.marvel.com/v1/public/characters?ts=1&apikey=c06634bbcc50c18c62a32c98290be07f&hash=f742925bbe89597b3895b48d3f8a0d4d&limit=10&offset='+offset;
        
        if(nomeHeroi!==''){

            p=false;
        }

        let resp= await axios.get(url);
        
        let extrairPersonagens=[];
        
        if(p){
            for(let item of resp.data.data.results){

                let caminho='';
                let extensao='';
                let image='';
                let nome='';
                let desc='';

                caminho=item.thumbnail.path;
                extensao=item.thumbnail.extension;
                image=caminho+'.'+extensao;
                nome=item.name;
                desc=item.description;

                extrairPersonagens.push({

                    poster:image,
                    nome:nome,
                    descricao:desc
                });
            }
        }

        else{  

            for(let item of resp.data.data.results){

                let caminho='';
                let extensao='';
                let image='';
                let nome='';
                let desc='';
    
                caminho=item.thumbnail.path;
                extensao=item.thumbnail.extension;
                image=caminho+'.'+extensao;
                nome=item.name;
                desc=item.description;
    
                if(item.name===nomeHeroi){
                    extrairPersonagens.push({
    
                    poster:image,
                    nome:nome,
                    descricao:desc
                    });
                }
            }
            
            setOffset(offset+10);
        }

        setHerois(extrairPersonagens);
    }

    useEffect(() => {

        if(offset!==0){

            search();
        }
    }, [offset]);

    return(

        <div className='page-vingadores'>


            <header className='cabecalho'>

                <img src='/assets/images/avengers-images/logo-marvel.png' alt=''/>
                <nav className='menu-header'>

                    <Link className='link'><b>Home</b></Link>
                    <Link className='link'>Personagens</Link>
                    <Link className='link'>Quadrinhos</Link>
                    <Link className='link'>Eventos</Link>
                    <Link className='link'>Contato</Link>
                    <img src='/assets/images/avengers-images/marvel-icon-menu.png'alt=''/>
                </nav>
            </header>

            <div className='personagens'>

                <h1>Personagens da MARVEL</h1>

                <div className='container-personagens'>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non malesuada et, molestie ut purus.</p>

                    <div className='pesquisar-personagens'>

                        <button onClick={search}>

                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.6 7.74999C2.6 4.90573 4.90573 2.6 7.74999 2.6C10.5943 2.6 12.9 4.90573 12.9 7.74999C12.9 10.5943 10.5943 12.9 7.74999 12.9C4.90573 12.9 2.6 10.5943 2.6 7.74999ZM7.74999 0.9C3.96685 0.9 0.9 3.96685 0.9 7.74999C0.9 11.5331 3.96685 14.6 7.74999 14.6C9.07773 14.6 10.3172 14.2222 11.3669 13.5683C11.3733 13.5751 11.3798 13.5819 11.3865 13.5885L14.649 16.851C14.9809 17.183 15.5191 17.183 15.851 16.851C16.183 16.5191 16.183 15.9809 15.851 15.6489L12.6937 12.4916C13.8744 11.2609 14.6 9.59016 14.6 7.74999C14.6 3.96685 11.5331 0.9 7.74999 0.9Z" fill="#717171"/>
                            </svg>
                        </button>
                        <input type='text' value={nomeHeroi} onChange={(e) => {setNomeHeroi(e.target.value)}} placeholder='Nome do personagem'/>
                    </div>
                    
                </div>
                
            </div>

            <div className='resultados'>

                <div className='scroll'>

                    {herois.map(item => 
                        
                        <div className='card-personagem'>

                            <img src={item.poster} alt=''/>
                            <div id='nome'>{item.nome}</div>
                            <div id='desc'>{item.descricao}</div>

                        </div>)}            
                </div>
                
            </div>
        </div>
    );
}