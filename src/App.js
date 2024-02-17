import './App.css';
import React from 'react'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <NoteState>
    <BrowserRouter>
    <Navbar />
    <Alert />
    <Routes>
    <Route exact path='/about' element={<About />}></Route>
    <Route exact path='/' element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;
