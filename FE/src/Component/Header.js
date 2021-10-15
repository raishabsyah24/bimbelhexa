import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button
} from 'react-bootstrap';
import { Container } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: "#6495ED" }} expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Navbar.Brand href="/">Bimbel Hexa</Navbar.Brand>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="/promo">Promo</Nav.Link>
              <Nav.Link href="/beasiswa">Beasiswa</Nav.Link>
              <Nav.Link href="#action4">Kompetisi Saint</Nav.Link>
              <NavDropdown title="Hexa Desk" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action5">Hexa Les</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Hexa Kursus</NavDropdown.Item>
                <NavDropdown.Item href="#action7">Hexa Pelatihan</NavDropdown.Item>
                <NavDropdown.Item href="#action8">Hexa Programing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action9">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Button href="/login" variant="outline-success">Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;