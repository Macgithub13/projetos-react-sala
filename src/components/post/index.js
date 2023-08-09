import './index.scss';

export default function Post(props){

    return(

        <div className='post'>

            <div className='user'>

                <img src={props.pfp} alt='Avatar não encontrado'/>
                <div id='nick'> {props.usuario} </div>
                <div id='tempo'> •{props.temppost} </div>
            </div>

            <div className='post'>

                <img src={props.postagem} alt=''/>
            </div>

            <div className='desc-post'>

                    <div className='curtidas'>

                        <div className='buttons'>
                            <button>

                                <img src='/assets/images/heart-icon.png' alt=''/>
                            </button>

                            <button>
                                
                                <img src='/assets/images/mesage-icon.png' alt=''/>
                            </button>
                        </div>
                        
                        <div> {props.Ncurtidas} curtidas</div>
                    </div>

                    <div className='desc'>

                        <div> {props.usuario} </div>
                        <div id='cor'> {props.descricao} </div>
                    </div>
            </div>

            <hr className='line'/>
        </div>
    );
}