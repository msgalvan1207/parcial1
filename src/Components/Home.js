import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Cafe from "./Cafe"
import CafeDetail from "./CafeDetail";
import { FormattedMessage } from "react-intl";


function Home() {
    const [cafes, setcafes] = useState([])
    const [detailId, setDetailId] = useState("")

    const URL = "http://localhost:3001/"

    useEffect(()=>{
        //deberia hacer fetch para la entrega final
        fetch(URL+ 'cafes').then(response => response.json()).then(data=>setcafes(data))
    },[])

    const handleCafeClick = (id) => {
        setDetailId(id)
    }

    return (
        <div>
            <Row>
                <Col sm={8} md={8} lg={8} xl={8}>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'><FormattedMessage id='Name'/></th>
                                <th scope='col'><FormattedMessage id='Type'/></th>
                                <th scope='col'><FormattedMessage id='Region'/></th>
                            </tr>
                        </thead>
                        <tbody>
                            { cafes.length>0 && cafes.map((cafe, index) => (
                                <Cafe key={index} onClick={handleCafeClick} id = {cafe.id} nombre={cafe.nombre} tipo={cafe.tipo} region={cafe.region}/>
                            ))}
                        </tbody>
                    </table>
                </Col>
            <Col sm={4} md={4} lg={4} xl={4}>
                {!(detailId==="") && <CafeDetail id={detailId}/>}
                </Col>
            </Row>
        </div>
    )



}

export default Home