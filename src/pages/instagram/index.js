import './index.scss';
import Cabecalho from '../../components/dark-menu';
import Post from '../../components/post';
import { useState } from 'react';

export default function Instagram(){

    const[user,setUser]=useState('');
    const[tempo,setTempo]=useState('');
    const[avatar,setAvatar]=useState('');
    const[desc,setDesc]=useState('');
    const[post,setPost]=useState('');
    const[curtidas,setCurtidas]=useState('');

    const[postagem,setPostagem]=useState([]);

    function addPost(){

        let objeto={

            usuario:user,
            temppost:tempo,
            pfp:avatar,
            descricao:desc,
            postagem:post,
            Ncurtidas:curtidas
        }
        
        setPostagem([...postagem,objeto]); 
    }

    return(
    
    <div className='page-instagram'>

        <Cabecalho/>
        
        <div className='container-page'>

            <div className='novas-pubs'>

                <div id='mensagem-novaspubs'>Novas publicações</div>
                <div className='perfis'>

                    <div>

                        <img src='/assets/images/instagram-images/profile1.png' alt=''/>
                    </div>

                    <div>

                        <img src='/assets/images/instagram-images/profile2.png' alt=''/>
                    </div>

                    <div>

                        <img src='/assets/images/instagram-images/profile3.png' alt=''/>
                    </div>
                    <div>   

                        <img src='/assets/images/instagram-images/profile4.png' alt=''/>
                    </div>

                    <div>
                        <img src='/assets/images/instagram-images/profile5.png' alt=''/>
                    </div>

                    <div>
                        <img src='/assets/images/instagram-images/profile6.png' alt=''/>
                    </div>

                    <div>
                        <img src='/assets/images/instagram-images/profile7.png' alt=''/>
                    </div>

                    <div>
                        <img src='/assets/images/instagram-images/profile8.png' alt=''/>
                    </div>
                </div>
            </div>

            <div className='postar'>

                <div className='container-postar'>

                    <div className='container-2inputs'>
                        <div>

                            <label>Usuário:</label>
                            <input className='maior' type='text' placeholder='ex:brunooliveira' value={user} onChange={ (e) => {setUser(e.target.value)}}/>
                        </div>

                        <div>

                            <label>Tempo:</label>
                            <input type='text' value={tempo} onChange={ (e) => {setTempo(e.target.value)}}/>
                        </div>
                    </div>

                    <div>

                        <label>Avatar:</label>
                        <input type='url' value={avatar} placeholder='ex: https://i.pinimg.com/1200x/c0/1b/10/c01b109bcb43eaffa1c2adb1ba0bebc5.jpg'onChange={ (e) => {setAvatar(e.target.value)}}/>
                    </div>

                    <div id='desc'>

                        <p><label>Descrição:</label></p>
                        <textarea rows='5' cols='54' maxlength='285' onChange={ (e) => {setDesc(e.target.value)}}/>
                    </div>

                    <div className='container-2inputs'>
                        <div>

                            <label>Post:</label>
                            <input className='maior' type='text' value={post} onChange={(e) => {setPost(e.target.value)}}/>
                        </div>

                        <div>

                            <label>Curtidas:</label>
                            <input type='number' value={curtidas} onChange={(e) => {setCurtidas(e.target.value)}}/>
                        </div>
                    </div>
                
                    <button onClick={addPost}>Postar</button>
                </div>
                
            </div>

            <div className='postagem'>

                {postagem.map(item => <Post pfp={item.pfp} usuario={item.usuario} temppost={item.tempps} 
                                            postagem={item.postagem}
                                            Ncurtidas={item.Ncurtidas} descricao={item.descricao}/>)}
            </div>
        </div>
    </div>
    );
}