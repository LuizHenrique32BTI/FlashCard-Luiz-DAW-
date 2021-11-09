// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
import foto1 from '../../images/foto1.jpg';
import foto2 from '../../images/foto2.jpg';
import foto3 from '../../images/foto3.jpg';
import foto4 from '../../images/foto4.jpg';
import foto5 from '../../images/foto5.jpg';

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
        name={course.nome}
        description={course.descricao} />
    ))}
    <Col m={12} s={12}>
        <Experience title="Biologia"
                    company=""
                    description=""
                    avatar={foto1}
        />
        <Experience title="Física"
                    company=""
                    description=""
                    avatar={foto2}
        />
        <Experience title="Matemática"
                    company=""
                    description=""
                    avatar={foto3}
        />
        <Experience title="Química"
                    company=""
                    description=""
                    avatar={foto4}
        />
        <Experience title="Português"
                    company=""
                    description=""
                    avatar={foto5}
        />
    </Col>
  </Row>
);

export default Courses;