import { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';

export default function Pokemon(){
    
    const[pokemons,setPokemons]=useState([]);
    const[displayButton,setDisplayButton]=useState('none');
    const[next,setNext]=useState(0);
    const[paginacao,setPaginacao]=useState(1);
    const[nomePokemon,setNomePokemon]=useState('');
    const[displayLoading,setDisplayLoading]=useState('none');
    
    async function buscarPokemons(){
 
        let url='';

        if(nomePokemon===''){
            
            url='https://pokeapi.co/api/v2/pokemon/?limit=10&offset='+next;
        }

        else{

            url='https://pokeapi.co/api/v2/pokemon/'+nomePokemon;
        }

        let resp= await axios.get(url);

        let extrairPokemons= [];

        if(nomePokemon===''){
            

            for(let item of resp.data.results){

                let chanceShiny=parseInt(Math.random()*100);
    
                let pokeResp= await axios.get(item.url);

                let image='';

                // 25%  de chance de gerar um shiny
                if(chanceShiny<25){

                    image=pokeResp.data.sprites.other['official-artwork'].front_shiny;
                }

                else{

                    image=pokeResp.data.sprites.other['official-artwork'].front_default;
                }

                let tipos='';

                for(let tipo of pokeResp.data.types){

                    tipos=tipos+tipo.type.name+'   ';
                }

                extrairPokemons.push({

                    nome:item.name,
                    imagem:image,
                    tipos:tipos
                });
            }

            setPokemons(pokemons.concat(extrairPokemons));
        }

        else{

            let chanceShiny=parseInt(Math.random()*100);
            let pokeResp= await axios.get(url);
            
            let image='';

            // 25%  de chance de gerar um shiny
            if(chanceShiny<25){

                image=pokeResp.data.sprites.other['official-artwork'].front_shiny;
            }

            else{

                image=pokeResp.data.sprites.other['official-artwork'].front_default;
            }

            let tipos='';

            for(let tipo of pokeResp.data.types){

                tipos=tipos+tipo.type.name+'   ';
            }
            extrairPokemons.push({

                nome:pokeResp.data.name,
                imagem:image,
                tipos:tipos
            });

            setPokemons(extrairPokemons);
        }
        
        setDisplayButton('flex');
    }

    function maisPokes(){

        setNext(next+10);
        setPaginacao(paginacao+1);
    }

    useEffect(() => {

        if(pokemons!==([])){
            setDisplayLoading('none');
        }
        
    },[pokemons]);

    useEffect(() =>{

        if(next!==0){

            buscarPokemons();
        }

    },[next]);

    return(

        <div className='page-pokemon'>

            <div className='container-page'>

                <div className='encontrar-pokemons'>

                    <img src='/assets/images/pokemon-images/pikachu-image.png' alt=''/>
                    <button onClick={() => {
                        setDisplayLoading('block');
                        buscarPokemons();}}>Encontrar pokémons</button>

                    {/* Loading enquanto api não carrega */}
                    <div class="loading" style={{display:`${displayLoading}`}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>

                <div className='filtro-nome-pokemon'>

                    <div>
                        <label style={{fontSize:"14px"}}>Procurar por pokemon específico (Nome deve ser igual)</label>
                        <input type='text' value={nomePokemon} onChange={(e) => {
                            
                            setNomePokemon(e.target.value)}}/>
                    </div>
                </div>

                <div className='pokemons'>

                    {pokemons.map(item =>
                        
                        <div className='card-pokemon'>

                            <div id='image-pokemon'> 
                            
                                <img src={item.imagem} alt=''/>
                            </div>
                            <div id='nome'> <b>{item.nome} </b></div>
                            <div>{item.tipos}</div>
                        </div>)}
                </div>

                <div style={{display: `${displayButton}`,flexDirection:"column",alignItems:"center"}}>

                    <div style={{marginBottom:"20px"}}>Página de Pokemons: {paginacao}</div>
                    {/* Loading enquanto api não carrega */}
                    <div class="loading" style={{display:`${displayLoading}`,marginBottom:"20px"}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    <button id='button-mais' onClick={() => {
                        
                        setDisplayLoading('block');
                        maisPokes();}}>Buscar mais</button>
                </div>
                
            </div>
        </div>
    );
}