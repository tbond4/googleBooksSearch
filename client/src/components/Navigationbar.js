
import React from "react"
import {Navbar, Nav} from "react-bootstrap"

function Navigationbar(){
return(
<Navbar style={{backgroundColor:"lightblue"}} expand="lg">
<Navbar.Brand href="#home">GBS</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/search">Search</Nav.Link>
    <Nav.Link href="/saved">Saved</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>)
}

export default Navigationbar