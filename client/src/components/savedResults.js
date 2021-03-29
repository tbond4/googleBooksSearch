import React from "react";
import {Card, Button} from "react-bootstrap"
import DeleteButton from "./deleteButton"

function savedResults({books, getBooks}){
  
    return(
      
<div style={{display:"flex",flexDirection:"row", flexWrap:"wrap"}} >
    
        {books.map((book) =>{return(
          
<Card key = {book._id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={book.image} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
      <Card.Text>
        {book.description}
      </Card.Text>
     <Button stlye={{margin:"3%"}} href={book.link}>Visit on Google</Button>
     <DeleteButton bookId={book._id} getBooks={getBooks}/>
    </Card.Body>
  </Card>
        )
        })}

</div>
    )
}

export default savedResults;