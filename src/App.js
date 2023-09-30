import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { Container } from "react-bootstrap";

import Algo from './Components/algo';

function App() {
  return (
    <div className="App">
      <Container>
        <div className='font1'>El aroma magico</div>
        <div className='line'>{""}</div>
        <img className='banner' src='cafe.png' alt='foto del banner: cafe'/>
        <div className='line'>{""}</div>
      </Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path='/home' element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
      <p className='text-center mt-5'>Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
    </div>
  );
}

export default App;
