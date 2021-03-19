import React from "react";
import {Card, Button} from "react-bootstrap"


function savedResults({books}){
    return(
<div>
        {books.map((book) =>{

<Card key = {book._id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={books.img} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>
        {book.description}
      </Card.Text>
     <Button href={book.link}>Visit on Google</Button>
     <DeleteButton bookId={book._id}/>
    </Card.Body>
  </Card>

        })}

</div>
    )
}

export default savedResults;