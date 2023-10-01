import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { FormattedMessage } from "react-intl";

function Login() {
    const [formValues, setFormValues] = useState({user:"", password:""});
    const [validationState, setValidationStates] = useState(false);

    const [dataPost, setDataPost] = useState({})

    const URL = ''

    async function handlePost() {
        const response = await fetch(URL, { method: "POST", body: JSON.stringify(formValues), headers: {"X-Requested-With": "XMLHttpRequest"} });
        const data = await response.json()
        console.log(JSON.stringify(data))
        setDataPost(JSON.stringify(data))
    }

    const handleUserChange = (e) => {
        setFormValues({...formValues, user: e.target.value})
    }

    const handlePasswordChange = (e) => {
        setFormValues({...formValues, password: e.target.value})
    }

    const clickSignIn = () => {
        console.log("realizar validacion")
        if (formValues.user.length>0 && formValues.password.length>0){
            alert("Para esta etapa, se valida que user y contraseña tengan algo")
            window.location.href = '/home';
        } else
        {
            console.log("bleh")
        }
        //Aqui se deberia llamar al post
    }

    const clickCancel = () => {
        console.log("cancelar inicio de sesion")
        setFormValues({...formValues, password:"", user:"" })
        //no estoy muy seguro que deberia pasar aqui
    }

    return (
        <div>
            <Container>
                <Container className='loginfont mb-3 width' ><FormattedMessage id='Signin'/></Container>
                <Container className='loginContainer'>
                    <Form>
                        <Form.Group className='mb-2' controlId='userForm'>
                            <Form.Label className='loginfont'><FormattedMessage id='Username'/></Form.Label>
                            <Form.Control required onChange={handleUserChange} value = {formValues.user}/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='loginfont'><FormattedMessage id='Password'/></Form.Label>
                            <Form.Control required type="password" onChange={handlePasswordChange} value = {formValues.password}/>
                        </Form.Group>

                        <Row>
                            <Col className='text-center'> <Button variant='primary' className='btn-sucess' onClick={clickSignIn}><FormattedMessage id='Login'/></Button></Col>
                            <Col className='text-center'> <Button variant='primary' className='btn-danger' onClick={clickCancel}><FormattedMessage id='Cancel'/></Button></Col>
                        </Row>

                    </Form>
                </Container>
            </Container>
        </div>
    )


}

export default Login