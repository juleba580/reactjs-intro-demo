import React from 'react';

import {Row, Col, Button} from "react-bootstrap";
import {FaCheck, FaTrash, FaEdit } from "react-icons/fa"

const Task = (props) => {
    return(
        <Row>
            <Col xs={8}>
                {props.title}
            </Col>
            <Col xs={1}>
            <Button variant='success'><FaCheck/></Button>
            </Col>
            <Col xs={1}>
            <Button variant='primary'> <FaEdit/></Button>
            </Col>
            <Col xs={1}>
            <Button variant='danger'>
                <FaTrash/>
            </Button>
            </Col>
        </Row>
    );
};

export default Task;