import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { FormattedMessage } from "react-intl";

function Login() {
    const [formValues, setFormValues] = useState({login:"", password:""});
    const [validationState, setValidationStates] = useState(true);

    const URL = 'http://localhost:3001/'

    async function handlePost() {
        console.log(JSON.stringify(formValues))
        const response = await fetch(URL + 'login', { method: "POST", body: JSON.stringify(formValues), headers: {"Content-type":'application/json;charset=utf-8'} });
        const data = await response.json()
        if (data.status==="success"){
            setValidationStates(true)
            window.location.href='/home'
        } else {
            setValidationStates(false)
        }
    }

    const handleloginChange = (e) => {
        setFormValues({...formValues, login: e.target.value})
    }

    const handlePasswordChange = (e) => {
        setFormValues({...formValues, password: e.target.value})
    }

    const clickSignIn = () => {
        console.log("realizar validacion")
        if (formValues.login.length>0 && formValues.password.length>0){
        //    alert("Para esta etapa, se valida que login y contraseña tengan algo")
        //    window.location.href = '/home';
        handlePost()
        } else
        {
            console.log("bleh")
        }
        //Aqui se deberia llamar al post
    }

    const clickCancel = () => {
        console.log("cancelar inicio de sesion")
        setFormValues({...formValues, password:"", login:"" })
        //no estoy muy seguro que deberia pasar aqui
    }

    return (
        <div>
            <Container>
                <Container className='loginfont mb-3 width' ><FormattedMessage id='Signin'/></Container>
                <Container className='loginContainer'>
                    <Form>
                        <Form.Group className='mb-2' controlId='loginForm'>
                            <Form.Label className='loginfont'><FormattedMessage id='Username'/></Form.Label>
                            <Form.Control required onChange={handleloginChange} value = {formValues.login}/>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label className='loginfont'><FormattedMessage id='Password'/></Form.Label>
                            <Form.Control required type="password" onChange={handlePasswordChange} value = {formValues.password}/>
                        </Form.Group>
                        

                        <Row className='mb-3'>
                            <Col className='text-center'> <Button variant='primary' className='btn-sucess' onClick={clickSignIn}><FormattedMessage id='Login'/></Button></Col>
                            <Col className='text-center'> <Button variant='primary' className='btn-danger' onClick={clickCancel}><FormattedMessage id='Cancel'/></Button></Col>
                        </Row>
                        <Row>{!validationState && <p className='loginfont text-danger'><FormattedMessage id="AuthError"/></p>}</Row>
                    </Form>
                </Container>
            </Container>
        </div>
    )


}

export default Login