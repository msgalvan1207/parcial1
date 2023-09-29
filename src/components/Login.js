import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Image from "react-bootstrap/Image";


function Login() {
    return (
      <Container>
        <Row>
        <Col className='bg-success'>
          <Image/>
          <h2 className='text-center text-white'>Encuentra hasta el libro que no estabas buscando</h2>
        </Col>
        <Col>
          <h1 className='text-center'>Tu Libreria Aliada</h1>
        </Col>
        </Row>
      </Container>
    );
}

export default Login;