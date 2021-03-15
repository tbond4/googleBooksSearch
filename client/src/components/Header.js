import React from "react"
import {Jumbotron, Container} from "react-bootstrap"

function Header(){
    return(
    <Jumbotron fluid>
        <Container>
          <h1>Google Books</h1>
          <p>
            Search for a Book!
          </p>
        </Container>
      </Jumbotron>);
}

export default Header;