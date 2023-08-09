import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Carro from './pages/carro';
import Sorvete from './pages/sorvete';
import Instagram from './pages/instagram';
import Filmes from './pages/filmes'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>

        <Route path='/carro' element={<Carro/>}></Route>
        <Route path='/sorvete' element={<Sorvete/>}></Route>
        <Route path='/instagram' element={<Instagram/>}></Route>
        <Route path='/filmes' element={<Filmes/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

