import React from "react";
import {Card, Button} from "react-bootstrap"


function Results({books}){
    return(
<div>
        {books.map((book) =>{

<Card key = {book.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={books.img} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>
        {book.description}
      </Card.Text>
      <SaveButton book={book} />
    </Card.Body>
  </Card>

        })}

</div>
    )
}

export default Results;