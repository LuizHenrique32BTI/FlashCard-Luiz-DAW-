// Importantando o React
import React from "react";
// Importantando o component Home
import Home from "./components/home/home";
// Importantando o component Contact
import Courses from "./components/courses/courses";
// Importando os components necessárias da lib react-materialize
import { Container } from 'react-materialize';
// Importanto o component <Switch /> e <Route /> da nossa Lib de rotas
import { Routes, Route } from 'react-router-dom'
import Form from './components/courses/form'
const Main = (props) => (
  <main>
    <Container>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses courses={props.courses}/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </Container>
  </main>
);

export default Main;