import Card from "react-bootstrap/Card"
import { useState } from "react"

function BookCard(card) {


    const handleClick = () =>
    {
        card.onClick(card.isbn)
    }



    return(
    <Card onClick={handleClick} style={{cursor: "pointer"}}>
        <Card.Img variant='top' src = {card.image}/>
        <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{'ISBN: ' + card.isbn}</Card.Text>
        </Card.Body>
    </Card>
    )
}


export default BookCard