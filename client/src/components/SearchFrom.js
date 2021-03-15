import React from "react"
import {Form, Button} from "react-bootstrap"
import API from "../utils/API";
function SearchForm({setBooks}){

    const bookInput = useRef();

    const handleFromSubmit = event =>{
        event.preventDefault()

        API.getBooks(bookInput.current.value).then(({data}) =>{
            setBooks(data);
        })


        

    }

    return(
    <Form onSubmit={handleFromSubmit}>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Search Book</Form.Label>
          <Form.Control ref={bookInput} type="text" placeholder="Title" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>)
}

export default SearchForm;