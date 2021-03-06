import React,{Component} from "react";
import {
    Card,
    Button
  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component{
    render(){
        return(
            <div style={{position:"absolute", bottom:"0", width:"100%"}}>
            <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
          </div>
        )
    }
}

export default Footer;