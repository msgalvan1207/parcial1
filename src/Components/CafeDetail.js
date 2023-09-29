import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";

function CafeDetail(prop) {

    const id = prop.id

    //const [Cafe, setCafe] = useState({})

    useEffect(()=>{
        //normalmente deberia hacer fetch pero no hay tiempo para eso
        //fetch("https://my.api.mockaroo.com/Cafes-schema.json?key=7d7c6d00&isbn="+isbn).then(response => response.json()).then(data=>setCafe(data))
    },[])

    return(
        <Container>
            <Row><h2>{prop.nombre}</h2></Row>
            <Row>
                {prop.tipo}
            </Row>
        </Container>
    )
}

export default CafeDetail;