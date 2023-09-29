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
      <h1>El aroma magico</h1>
       <Container fluid><img src='algo.jpg' alt='cafe'/> </Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login/>}/>
          <Route path='/home' element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
