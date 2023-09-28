import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState } from "react";


function Login() {
    const [validationState, setValidationState] = useState({emailValidation: false, passwordValidation: false});

    const handleEmail = () => {
        console.log("lol")
    };

    const handlePass = () => {
        console.log("lmao")
    };

    return (
        <h1>Hola mundo</h1>
    )
}