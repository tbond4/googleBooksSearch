import React from "react"
import {Form, Button} from "react-bootstrap"
function SearchForm(){

    const handleFromSubmit = event =>{
        event.preventDefault()
    }
    
    return(
    <Form onSubmit={handleFromSubmit}>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Search Book</Form.Label>
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>)
}

export default SearchForm;