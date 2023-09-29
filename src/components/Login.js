import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";


function Login() {

  const [formValues, setFormValues] = useState({email:"", password:""});

  const [validationStates, setValidationStates] = useState({emailState:false, passwordState:false})

  const handleEmailChange = (e) => {
    setFormValues({...formValues, email: e.target.value})
    if (formValues.email.match(/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i))
    {
      setValidationStates({...validationStates, emailState:true})
    } else 
    {
      setValidationStates({...validationStates,emailState:false})
    }
  }

  const handlePasswordChange = (e) => {
    setFormValues({...formValues, password: e.target.value})
    if (formValues.password.length >= 6)
    {
      setValidationStates({...validationStates, passwordState:true})
    } else 
    {
      setValidationStates({...validationStates,passwordState:false})
    }
  }

  const clickSignIn = () => {
    if (validationStates.emailState && validationStates.passwordState)
    {
      window.location.href = '/Home';
    }
  }




    return (
      <Container>
        <Row>
        <Col className='bg-success'>
          <Image/>
          <h2 className='text-center text-white'>Encuentra hasta el libro que no estabas buscando</h2>
        </Col>
        <Col>
          <h1 className='text-center'>Tu Libreria Aliada</h1>
          <Form>
            <Form.Group className='mb-6' controlId='emailForm'>
              <Form.Label>Username</Form.Label>
              <Form.Control required type='email' onChange={handleEmailChange} value = {formValues.email} isInvalid={!validationStates.emailState}/>
              { !validationStates.emailState && <Form.Text className='text-muted'>Ponga un email valido</Form.Text>}
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label>Password</Form.Label>
              <Form.Control required type='password' onChange={handlePasswordChange} value = {formValues.password} isInvalid={!validationStates.passwordState}/>
              {!validationStates.passwordState && <Form.Text className='text-muted'>La contraseña debe tener 6 caractes</Form.Text>}
            </Form.Group>

            <Button variant='primary' onClick={clickSignIn}>Sign in</Button>
          </Form>
        </Col>
        </Row>
      </Container>
    );
}

export default Login;