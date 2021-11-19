// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';

import Curso from './curse'
import {NavLink} from 'react-router-dom';

const Courses = (props) => (
  <Row>
    <div>
    <h5>Cursos</h5>
    <NavLink to="/form"><a class="grey waves-effect waves-light btn">Adicionar Curso</a></NavLink>
    </div>
    {props.courses.map(course=>(
    <Curso
        course={course} />
    ))}
  </Row>
);

export default Courses;