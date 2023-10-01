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
    const [test, setTest] = useState(false)

    useEffect(()=>{
        //deberia hacer fetch para la entrega final
        //fetch(URL).then(response => response.json()).then(data=>setcafes(data))
        setcafes([
            {
                id: 1,
                nombre: "Café Especial para tí",
                tipo: "Blend",
                region: "Angelópolis, Antioquia",
                notas: "Panela, Durazno, Caramelo",
                fecha_cultivo: "2023-01-18",
                altura: 1920,
                imagen:
                  "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-para-ti-cafe-colombiano_720x.png?raw=true",
              },
              {
                id: 2,
                nombre: "Café Especial Navegante",
                tipo: "Café de Origen",
                region: "Guatapé, Antioquia",
                notas: "Cítrico, Naranja, Cacao",
                fecha_cultivo: "2023-02-10",
                altura: 1800,
                imagen:
                  "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-navegante-cafe-colombiano-1_720x.png?raw=true",
              },
              {
                id: 3,
                nombre: "Café Especial El Poeta",
                tipo: "Blend",
                region: "Gómez Plata, Antioquia",
                notas: "Notas Dulces, Vino y Frutos Rojos",
                fecha_cultivo: "2023-03-11",
                altura: 1800,
                imagen:
                  "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-poeta-cafe-colombiano_720x.png?raw=true",
              },
              {
                id: 4,
                nombre: "Café Especial Valentina",
                tipo: "Café de Origen",
                region: "Fredonia, Antioquia",
                notas: "Chocolate, Cáscara de limón, Nuez",
                altura: 1700,
                imagen:
                  "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-valentina-cafe-colombiano_1_720x.png?raw=true",
              },
              {
                id: 5,
                nombre: "Café Especial Sombrero Vueltiao",
                tipo: "Café de Origen",
                region: "Amagá, Antioquia",
                notas: "Chocolate, Frutos secos, Frutos rojos, Caña de azúcar",
                fecha_cultivo: "2023-04-12",
                altura: 1450,
                imagen:
                  "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especal-sombrero-vueltiao-2-cafe-colombiano-f_720x.png?raw=true",
              },
              {
                id: 6,
                nombre: "Café Especial La Guacamaya",
                tipo: "Café de Origen",
                region: "Amagá, Antioquia",
                notas: "Chocolate, Frutos Secos, Frutos Rojos y Caña de Azúcar",
                fecha_cultivo: "2023-05-13",
                altura: 1450,
                imagen:
                  "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202310/p2_v1/cafe-especial-guacamayo2-cafe-colombiano-f_720x.png?raw=true",
              },
        ])
    },[])

    const handleCafeClick = (id) => {
        setDetailId(id)
        setTest(true)
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