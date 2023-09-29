import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";

function BookDetail(card) {

    const isbn = card.isbn

    const [book, setBook] = useState({})

    useEffect(()=>{
        fetch("https://my.api.mockaroo.com/books-schema.json?key=7d7c6d00&isbn="+isbn).then(response => response.json()).then(data=>setBook(data))
    },[])

    return(
        <Container>
            <Row><h1>{book.title}</h1></Row>
            <Row>
                <Col>ISBN</Col> <Col>{book.isbn}</Col>
            </Row>
            <Row>
                <Col>author</Col> <Col>{book.author}</Col>
            </Row>
            <Row>
                <Col>year</Col> <Col>{book.year}</Col>
            </Row>
            <Row>
                <Col>available</Col> <Col>{book.availableOnline ? 'Si': 'No'}</Col>
            </Row>
            <Row>
                <Col>Publisher</Col> <Col>{book.publisher}</Col>
            </Row>
            <Row>
                <Col>price</Col> <Col>{book.price}</Col>
            </Row>
            <Row>Summary:</Row>
            <Row>
                {book.summary}
            </Row>
        </Container>
    )
}

export default BookDetail;