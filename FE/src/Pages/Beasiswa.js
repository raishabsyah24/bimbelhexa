import React, { Component } from 'react';
import {
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderBeasiswa from '../Component/HeaderBeasiswa';
import I001 from '../Image/001.png';

class Beasiswa extends Component {
  render() {
    return (
      <div style={{ paddingLeft: 50, paddingRight: 50 }}>
        <h1>Beasiswa BimbelHexa</h1>
        <HeaderBeasiswa />
        <Col>
            <Row style={{ padding: 10 }}>
              <Card style={{ width: '18rem' ,margin:10}}>
                <Card.Img variant="top" src={I001} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem',margin:10 }}>
                <Card.Img variant="top" src={I001} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem',margin:10 }}>
                <Card.Img variant="top" src={I001} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>  <Card style={{ width: '18rem' ,margin:10}}>
                <Card.Img variant="top" src={I001} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>
            <Row style={{ padding: 10 }}>
              <Card style={{ width: '18rem' ,margin:10}}>
                <Card.Img variant="top" src={I001} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem',margin:10 }}>
                <Card.Img variant="top" src={I001} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem',margin:10 }}>
                <Card.Img variant="top" src={I001} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>  <Card style={{ width: '18rem' ,margin:10}}>
                <Card.Img variant="top" src={I001} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>
        </Col>
      </div>
    );
  }
}
export default Beasiswa;