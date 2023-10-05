import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Col, Card} from "react-bootstrap";
import {FaList } from "react-icons/fa6"

import AddTask from "./components/AddTask";
import Task from "./components/Task";
import Tasks from "./components/Tasks";

export default () => (
  <Container style={{marginTop: "150px"}}>
    <Row>
      <Col md={{span:5,offset:3}}>
        <Card>
          <Card.Header as="h5">
            <FaList/> To Do Liste
          </Card.Header>
          <Card.Body>
            <AddTask/>
            <hr/>
            <Tasks/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
