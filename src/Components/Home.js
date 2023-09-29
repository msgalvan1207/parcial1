import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Cafe from "./Cafe"
import CafeDetail from "./CafeDetail";


function Home() {
    const [cafes, setcafes] = useState([])
    const [detailId, setDetailId] = useState("")

    useEffect(()=>{
        //deberia hacer fetch para la entrega final
        //fetch(URL).then(response => response.json()).then(data=>setcafes(data))
        setcafes([
            {
                "id": 1,
                "nombre": "Café Especial para tí",
                "tipo": "Blend",
                "region": "Angelópolis, Antioquia",
                "notas": "Panela, Durazno, Caramelo",
                "fecha_cultivo": "2023-01-18",
                "altura": 1920,
                "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-para-ti-cafe-colombiano_720x.png?raw=true"
            }
            
        ])
    },[])

    const handleCafeClick = (id) => {
        console.log(id)
        setDetailId(id)
    }

    return (
        <div>
            <Row>
                <Col sm={8} md={8} lg={8} xl={8}>
                    <table className="table">
                        <thead className={"thead-dark"}>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Nombre</th>
                                <th scope='col'>Tipo</th>
                                <th scope='col'>Region</th>
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
                {detailId.length>0 && <CafeDetail id={cafes[0].id} tipo={cafes[0].tipo}/>} 
                </Col>
            </Row>
        </div>
    )



}

export default Home