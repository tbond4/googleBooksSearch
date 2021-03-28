// disable-eslint-file
import React from "react";
import {Card, Button} from "react-bootstrap"
import SaveButton from "./SaveButton"
function Results({books}){
    return(
<div style={{display:"flex",flexDirection:"row", flexWrap:"wrap"}}>
  {books.map((book) =>{return(
    
      <Card key = {book.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={book.volumeInfo.imageLinks.smallThumbnail} />
        <Card.Body>
        <Card.Title>{book.volumeInfo.title}</Card.Title>
        <Card.Text>
          {book.volumeInfo.description}
        </Card.Text>
        <SaveButton book={book} />
        </Card.Body>
      </Card>
  )
        })}

</div>
    )
}

export default Results;