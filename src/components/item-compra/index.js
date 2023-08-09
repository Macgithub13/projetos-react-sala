import './index.scss';

export default function Item(props){
      
    return(
    
        <div className={props.item} >
            
            <div className='produto'>
                <div>{props.nome}</div> 
                <div> <b>R$</b>{props.valor}</div> 
            </div>       
        </div>
    );
}
