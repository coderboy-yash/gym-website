import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import './App.css';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
   <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
    <Navbar></Navbar>
   
     
       
    <Routes>
     
      <Route path='/' element={<Home/>}></Route>
      <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
      
    </Routes>
  
   <Footer></Footer>

   </Box>
  );
}

export default App;
