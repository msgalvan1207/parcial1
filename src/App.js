import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';

import Algo from './Components/algo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<h1 className='text-center'>Hola Mundo</h1>}/>
          <Route patg='/algo' element = {<Algo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
