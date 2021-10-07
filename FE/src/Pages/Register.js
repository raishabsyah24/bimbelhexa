import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../CSS/Login.css";

export default function Register() {
  const [firstname, setFisrtName] = useState("");
  const [lastname, setLastName] = useState("");
  const [tempatlahir, setTempatLahir] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="FirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type="FirstName"
            value={firstname}
            onChange={(e) => setFisrtName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocus
            type="LastName"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="TempatLahir">
          <Form.Label>Tempat Lahir</Form.Label>
          <Form.Control
            autoFocus
            type="TempatLahir"
            value={tempatlahir}
            onChange={(e) => setTempatLahir(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        Sudah punya akun, silahkan<a href="/login" alt="">Login</a>
        <Button style={{paddingTop:"20"}} block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form>
    </div>
  );
}