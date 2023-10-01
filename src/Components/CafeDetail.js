import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "./CafeDetail.css"
import { FormattedMessage, FormattedDate } from "react-intl";

function CafeDetail(prop) {


    //const [Cafe, setCafe] = useState({})

    useEffect(()=>{
        //normalmente deberia hacer fetch pero no hay tiempo para eso
        //fetch("https://my.api.mockaroo.com/Cafes-schema.json?key=7d7c6d00&isbn="+isbn).then(response => response.json()).then(data=>setCafe(data))
    },[])

    const id = prop.id - 1

    const cafes = [
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
    ]




    return(
        <Container className='text-center detail-container'>
            <Row><b>{(cafes[id].nombre).toUpperCase()}</b></Row>
            <Row><p><FormattedDate
                        value= {cafes[id].fecha_cultivo}
                        year = 'numeric'
                        month = 'long'
                        day = 'numeric'
                        /></p></Row>
            <Row><img src={cafes[id].imagen}/></Row>
            <Row><p><FormattedMessage id='Notes'/></p></Row>
            <Row><p>{cafes[id].notas}</p></Row>
            <Row><b><FormattedMessage id='HeightFormat' values={{number:cafes[id].altura}}/></b></Row>
        </Container>
    )
}

export default CafeDetail;