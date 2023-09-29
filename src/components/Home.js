import { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import BookCard from "./BookCard";
import BookDetail from "./BookDetail";


function Home(){

    const [books, setBooks] = useState([])
    const [detailIndex, setDetailIndex] = useState("")


    useEffect(()=>{
        fetch("https://my.api.mockaroo.com/books-schema.json?key=7d7c6d00").then(response => response.json()).then(data=>setBooks(data))
    },[])



    const handleCardClick = (isbn) => {
        console.log(isbn)
        setDetailIndex(isbn)
    }



    return (
        <Container>
            <Row>
                <Col sm={8} md={8} lg={8} xl={8}>
                    <Row>
                    { books.length>0 && books.map((book, index) => (
                        <Col key ={book.isbn} sm={4} md={4} lg={4} xl={4}>
                        <BookCard onClick={handleCardClick} title={book.title} image={book.image} isbn={book.isbn}/>
                        </Col>
                    ))}
                    </Row>
                </Col>
            <Col sm={4} md={4} lg={4} xl={4}>
                {detailIndex.length>0 && <BookDetail isbn={detailIndex}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default Home