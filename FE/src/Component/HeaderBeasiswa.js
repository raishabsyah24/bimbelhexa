import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl
} from 'react-bootstrap';
import { Container } from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderBeasiswa extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Semua</Nav.Link>
              <Nav.Link href="#action2">Beasiswa</Nav.Link>
              <Nav.Link href="#action2">Beasiswa Full</Nav.Link>
              <Nav.Link href="#action2">Beasiswa Sampai Lulus</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderBeasiswa;