import './index.scss';
import Cabecalho from '../../components/header';
import { useState } from 'react';

function Carro() {

  const[valor, setValor]=useState(0);
  const[valorTotal,setValorTotal]=useState(0);
  const[parcela,setParcela]=useState(0);
  const[parcelas,setParcelas]=useState(0);
  const[juros,setJuros]=useState(0);


  function calcularMontante(){

    let value=Number(valor);
    let parcelasNumber=Number(parcelas);
    let jurosporcem=juros/100;
    let jurosS=value*jurosporcem*parcelasNumber;
    let montante=value+jurosS;
    setValorTotal(montante);

    console.log(parcelasNumber);
    console.log(value);
    setParcela(montante/parcelasNumber);
  }

  return (
    <div className="carro-page">
      <Cabecalho/>

      <div className='container-page'>

        <div className='container-carro'>

          <div className='image-carro'>

            <img src='/assets/images/carro.png' alt=''/>
          </div>

          <div className='calc'>
            <label>Valor Total</label>
            <input type='text' value={valor} onChange={(e) =>{

              setValor(e.target.value);
            }}/>

            <div className='subc-carro'>

              <div>
                <label>Parcelas</label>
                <input type='number' value={parcelas} onChange={(e) =>{
                  setParcelas(e.target.value);
                  }}/>
              </div>

              <div>
                <label>Juros Mensal %</label>
                <input type='number' value={juros} onChange={(e) =>{
                  setJuros(e.target.value);
                  }}/>
              </div>

            </div>

            <button className='calcular' onClick={() =>{calcularMontante(); }}>CALCULAR</button>

            <div className='resultados'>

              <p>Parcela: <b>R${parcela.toFixed(2)}</b> </p>
              <p>Valor total: <b>R${valorTotal}</b> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carro;