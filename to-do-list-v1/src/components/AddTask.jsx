import React, { useState } from 'react';

import {Row, Col, Form, Button} from "react-bootstrap";
import {FaPlus } from "react-icons/fa"

const AddTask = (props) => {
    return(
        <Row>
            <Col xs={10}>
                <Form.Control type='texte' placeholder='Entrez Task'/>
            </Col>
            <Col xs={2}>
                <Button variant='primary'><FaPlus/></Button>
            </Col>
        </Row>
    );
};



export default AddTask;