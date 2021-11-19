import React from 'react';
import { useState } from "react";
import api from "../../api"
import { Row, Col, Input, Button } from 'react-materialize'
import {NavLink} from 'react-router-dom'

const Form = () =>{
   	const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const adicionarCurso = async () =>{
		await api.post("", {nome: name, descricao: description});
	}
    return (
        <Row>
            <Input placeholder="Nome curso-" label="Nome do curso" onChange={event => setName(event.target.value)} s={10} />
            <Input placeholder="Descrição curso-" label="Descrição" onChange={event => setDescription(event.target.value)} s={10} />
            <Col s={10} m={12}>
            <NavLink to="/courses"><Button onClick={adicionarCurso} waves='light' className="right grey darken-2">Cadastrar</Button></NavLink>
            </Col>
        </Row>
    );
}

export default Form;