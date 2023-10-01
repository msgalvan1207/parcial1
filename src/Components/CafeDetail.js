import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "./CafeDetail.css"
import { FormattedMessage, FormattedDate } from "react-intl";

function CafeDetail(prop) {


    const [Cafe, setCafe] = useState({})
    const [id, setId] = useState("")

    const URL = "http://localhost:3001/"


    useEffect(()=>{
      setId(prop.id)
    },)

    useEffect(()=>{
      //normalmente deberia hacer fetch pero no hay tiempo para eso
      fetch(URL + "cafes/" + id).then(response => response.json()).then(data=>setCafe(data))
  },[id])

    return(
        <Container className='text-center detail-container'>
            <Row><b>{Cafe.nombre}</b></Row>
            <Row><p><FormattedDate
                        value= {Cafe.fecha_cultivo}
                        year = 'numeric'
                        month = 'long'
                        day = 'numeric'
                        /></p></Row>
            <Row><img src={Cafe.imagen}/></Row>
            <Row><p><FormattedMessage id='Notes'/></p></Row>
            <Row><p>{Cafe.notas}</p></Row>
            <Row><b><FormattedMessage id='HeightFormat' values={{number:Cafe.altura}}/></b></Row>
        </Container>
    )
}

export default CafeDetail;