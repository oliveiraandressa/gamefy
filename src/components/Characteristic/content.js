import React, { useEffect, useState } from 'react';
import api from "../../services/api";
import List from './list';
import { Table } from 'react-bootstrap';

export default function Content() {

    const [chars, setChars] = useState();

    useEffect(() => {
        api
        .get("/char")
        .then((response) => setChars(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    return (
        <div>
        {/* <CharacteristicsList chars={chars}/> */}
        {console.log(chars)}
        <Table striped borderless hover responsive>
            <thead>
            <tr>
                <th>Caracteristicas</th>
                <th>É oposta?</th>
                <th>É sinônimo?</th>
                <th>Positiva</th>
                <th>Negativa</th>
                <th>Neutra</th>
            </tr>
            </thead>
            <tbody>
                <List chars={chars}/>
            </tbody>
        </Table>
        </div>
    ) 

}

//TODO: criar a chamada pra api pra salvar as alterações
//TODO: fazer a navegação
