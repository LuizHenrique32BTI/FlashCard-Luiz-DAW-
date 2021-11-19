import React from 'react';
import { useState } from "react";
import api from "../../api"
import { Row, Col, Input, Button } from 'react-materialize'
import {NavLink, useParams} from 'react-router-dom'

const Edicao = () =>{
   	const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const {colecaoId} = useParams('');
    const editar = async () =>{
		await api.put("/" + colecaoId, {nome: name, descricao: description}).then(response => setName(response.data))
	}
    return (
        <Row>
            <Input placeholder="Nome curso-" label="Nome do curso" onChange={event => setName(event.target.value)} s={10} />
            <Input placeholder="Descrição curso-" label="Descrição" onChange={event => setDescription(event.target.value)} s={10} />
            <Col s={10} m={12}>
            <NavLink to="/courses"><Button onClick={editar} waves='light' className="right grey darken-2">Editar</Button></NavLink>
            </Col>
        </Row>
    );
}

export default Edicao;